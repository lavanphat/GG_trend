import { KeywordAttributes } from '../../models/keyword';

export interface KeywordGetAll {
  count: number;
  list: KeywordAttributes[];
}

export interface KeywordUpdateAndCreate {
  Query?: string;
  Link?: string;
  Value?: number;
  TopicId?: number;
  Status?: 'Active' | 'Inactive';
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
