/* eslint-disable no-console */
/**
 * Server setup
 */
import express from 'express';
import chalk from 'chalk';
import bodyparser from "body-parser"

import './config/database.js';
import constants from './config/constants.js';
import ApiRoutes from './routes/index.js';

const app = express();
app.use(bodyparser.json())

// Wrap all the middlewares with the server

// Add the apiRoutes stack to the server
app.use('/',ApiRoutes);

// We need this to make sure we don't run a second instance
app.listen(constants.PORT, (err) => {
  if (err) {
    console.log(chalk.red('Cannot run!'));
  } else {
    console.log(
      chalk.green.bold(
        `
        Yep this is working 🍺
        App listen on port: ${constants.PORT} 🍕
        Env: ${process.env.NODE_ENV} 🦄
      `
      )
    );
  }
});

export default app;
