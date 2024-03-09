import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';

export interface UserHeader {
  payload: {
    userId: string;
  };
}

export interface IReqCustom<THeader> extends Request {
  headers: IncomingHttpHeaders & THeader;
}
