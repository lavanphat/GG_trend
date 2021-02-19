import cors, { CorsOptions } from 'cors';

const whitelist: string[] = ['http://example1.com', 'http://example2.com'];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

cors(corsOptions);
