export const URL: string =
  process.env.NODE_ENV === 'dev'
    ? 'http://localhost:3000'
    : 'https://gg-trend.glitch.me';
