export interface Keyword {
  Id: number;
  Query?: string;
  Link?: string;
  Value?: number;
  TopicId?: number;
  Status?: 'Active' | 'Inactive';
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
}

export interface ResposeFetchKeyWords {
  count: number;
  list: Keyword[];
}
