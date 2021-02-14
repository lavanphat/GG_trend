import { Request, Response } from 'express';
import { TopicAttributes } from '../models/topic';
import { getAllTopic } from '../service/topic';

export async function getTopics(_req: Request, res: Response): Promise<void> {
  const topics: TopicAttributes[] = await getAllTopic();

  res.status(200).json(topics);
}
