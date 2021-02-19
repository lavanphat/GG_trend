import cors, { CorsOptions } from 'cors';

const whitelist: string[] = ['https://gg-trend.glitch.me'];
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
