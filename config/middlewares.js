/**
 * Configuration of the server middlewares.
 */

import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import expressWinston from 'express-winston';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';
import expressStatusMonitor from 'express-status-monitor';
import basicAuth from 'express-basic-auth';


const isDev = process.env.NODE_ENV === 'development';

export default (app) => {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors());
  app.use(expressStatusMonitor());
  app.use(methodOverride());
  const basicAuthMiddleware = basicAuth({
    users: { '5xaUser!@2#': '7raPass@3!)#@done' },
    unauthorizedResponse: 'Access Denied'
  });

  app.use((req, res, next) => {
    return basicAuthMiddleware(req, res, next);
  });
  if (isDev) {
    app.use(morgan('dev'));
    expressWinston.requestWhitelist.push('body');
    expressWinston.responseWhitelist.push('body');
    app.use(
      expressWinston.logger({
        meta: true,
        msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true
      })
    );
  }
};
