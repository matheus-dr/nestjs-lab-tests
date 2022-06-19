import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    databaseName: process.env.DB_NAME,
  };
});
