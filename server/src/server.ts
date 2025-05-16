import app from './app';
import dotenv from 'dotenv';
import config from './config/config';

// setup the environment variables form .env file
dotenv.config();

const port = config.port;

// check if the server in production or development phase
const serverURL =
  config.env === 'production' ? `port : ${port}` : `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`[server] is listening at ${serverURL}`);
});
