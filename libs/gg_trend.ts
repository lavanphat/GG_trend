import googleTrends, {
  ConvertRelatedQueries,
  RelatedQueriesResult
} from 'google-trends-api';

export function relatedKeyword(
  numberAgo: number,
  keyword: string,
  property: 'youtube' | 'news' = 'youtube'
): Promise<ConvertRelatedQueries[]> {
  return new Promise((resolve, reject) => {
    const date: Date = new Date();
    // tslint:disable-next-line:no-console
    console.log('object', keyword);
    googleTrends
      .relatedQueries({
        keyword,
        startTime: date.addDays(numberAgo),
        property
      })
      .then((results: string) => {
        const result: RelatedQueriesResult = JSON.parse(results);
        resolve(result.default.rankedList[1]?.rankedKeyword);
      })
      .catch((err: any) => {
        // tslint:disable-next-line:no-console
        console.log('err', err);
        reject(err);
      });
  });
}
