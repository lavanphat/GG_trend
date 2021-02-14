import { URL } from '.';
import { Topic } from '../type/topic';

const requestOptions: object = {
  method: 'GET',
  redirect: 'follow'
};

export async function fetchTopics(): Promise<Topic[]> {
  const response: any = await fetch(URL + '/api/topics', requestOptions);
  const result: Topic[] = await response.json();
  return result;
}
