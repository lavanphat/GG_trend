import { Request, Response } from 'express';
import { getKeywords, getKeywordToTag } from '../service/keyword';
import { KeywordGetAll } from '../types/interface/keyword';

interface GetAllKeywordQuery {
  topicId?: number;
  offset?: number;
}

export async function getAllKeyword(
  req: Request,
  res: Response
): Promise<void> {
  const { topicId, offset }: GetAllKeywordQuery = req.query;
  const keywords: KeywordGetAll = await getKeywords(offset, topicId);

  res.status(200).json(keywords);
}

export async function copyTag(req: Request, res: Response): Promise<void> {
  const { topicId }: GetAllKeywordQuery = req.query;
  const keywords: string = await getKeywordToTag(topicId);

  res.status(200).json(keywords);
}
