import { CronJob } from 'cron';
import { ConvertRelatedQueries } from 'google-trends-api';
import { TopicAttributes } from '../models/topic';
import { upsertKeyword } from '../service/keyword';
import { getKeywordInTopic } from '../service/topic';
import { relatedKeyword } from './gg_trend';

const job: CronJob = new CronJob({
  cronTime: '0 0 */72 * * *',
  onTick: async () => {
    const topics: TopicAttributes[] = await getKeywordInTopic();

    for await (const topic of topics) {
      if (topic.Keyword) {
        const resultsSearch: ConvertRelatedQueries[][] = await Promise.all(
          topic.Keyword?.map(item => relatedKeyword(-3, item))
        );
        for await (const result of resultsSearch) {
          if (result.length > 0) {
            await Promise.all(
              result.map(item => {
                if (item.value > 100) {
                  upsertKeyword({
                    Value: item.value,
                    Query: item.query,
                    Link: item.link,
                    TopicId: topic.Id
                  });
                }
              })
            );
          }
        }
      }
    }

    // tslint:disable-next-line:no-console
    console.log('success');
  },
  start: true,
  timeZone: 'Asia/Ho_Chi_Minh'
});

job.start();
