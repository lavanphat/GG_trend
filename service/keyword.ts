import { Keyword, KeywordAttributes } from '../models/init-models';
import {
  KeywordGetAll,
  KeywordUpdateAndCreate
} from '../types/interface/keyword';

const LIMIT: number = 10;
interface KeywordAndCount {
  rows: KeywordAttributes[];
  count: number;
}

export function getKeywords(
  offset: number = 1,
  topicId: number | undefined
): Promise<KeywordGetAll> {
  return new Promise(async resolve => {
    const keywords: KeywordAndCount = await Keyword.findAndCountAll({
      where: { TopicId: topicId },
      limit: LIMIT,
      offset: LIMIT * (offset - 1),
      order: [['Value', 'DESC']]
    });

    resolve({ count: keywords.count, list: keywords.rows });
  });
}

export function upsertKeyword(keyword: KeywordUpdateAndCreate): Promise<void> {
  return new Promise(async resolve => {
    await Keyword.upsert(keyword, { fields: ['Query', 'Value'] });
    resolve();
  });
}

export function getKeywordToTag(topicId: number = 1): Promise<string> {
  return new Promise(async resolve => {
    let stringCopy: string = '';
    let stopWhile: boolean = true;
    let offset: number = 0;

    while (stopWhile) {
      const keywords: KeywordAttributes[] = await Keyword.findAll({
        where: { TopicId: topicId },
        limit: 10,
        offset
      });

      if (keywords.length < 10) {
        stopWhile = false;
      }
      for (const keyword of keywords) {
        if (keyword.Query && stringCopy.length + keyword.Query?.length < 500) {
          stringCopy += keyword.Query + ',';
        } else {
          stopWhile = false;
        }
      }
      offset += 10;
    }

    stringCopy = stringCopy.slice(0, -1);
    resolve(stringCopy);
  });
}
