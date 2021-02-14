import { Topic, TopicAttributes } from '../models/init-models';

export function getAllTopic(): Promise<TopicAttributes[]> {
  return new Promise(async resolve => {
    const topics: TopicAttributes[] = await Topic.findAll({
      attributes: [
        ['id', 'value'],
        ['name', 'text']
      ]
    });
    resolve(topics);
  });
}

export function getKeywordInTopic(): Promise<TopicAttributes[]> {
  return new Promise(async resolve => {
    const keywords: TopicAttributes[] = await Topic.findAll({
      attributes: ['Keyword', 'Id'],
      where: { Status: 'Active' }
    });

    resolve(keywords);
  });
}
