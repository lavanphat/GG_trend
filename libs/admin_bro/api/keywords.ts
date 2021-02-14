import { URL } from '.';
import { ResposeFetchKeyWords } from '../type/keyword';

const requestOptions: object = {
  method: 'GET',
  redirect: 'follow'
};

export async function fetchKeywords(
  offset: number,
  topicId: number
): Promise<ResposeFetchKeyWords> {
  // tslint:disable-next-line:no-console
  const response: any = await fetch(
    `${URL}/api/keywords?offset=${offset}&topicId=${topicId}`,
    requestOptions
  );
  const result: ResposeFetchKeyWords = await response.json();
  return result;
}

export async function copyTag(topicId: number): Promise<string> {
  // tslint:disable-next-line:no-console
  const response: any = await fetch(
    `${URL}/api/keywords/copy-tag?topicId=${topicId}`,
    requestOptions
  );
  const result: string = await response.json();
  return result;
}
