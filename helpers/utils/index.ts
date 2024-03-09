import mongoose, { ObjectId } from 'mongoose';

import config from '../../config/constants.js';


type Aggregate<T> = {
  list: T[];
  hasResult: boolean;
  resultCount: number;
}

export const  offset = function (page: number, pageLimit?:number) {
  if (!pageLimit) {
    pageLimit = 20;
  }

  if (page === 1 || page === 0) {
    return 0;
  }
  return (page - 1) * pageLimit;
};

export const  pageLimit = function (pageLimit?:number) {
  if (pageLimit) {
    return pageLimit;
  }
  return config.pageLimit;
};

export const  hasResult = function (totalResult:number, page: number, pageLimit:number) {
  const totalPage = Math.ceil(totalResult / pageLimit);
  let nextPage = false;

  if (totalPage > page) {
    nextPage = true;
  }
  return nextPage;
};

// this function make output response when return list.
export const  getListMapperWithPagination = function<T> (dataList:T[], resultCount, page: number, pageLimit) {
  return resultCount.then(function (totalRes) {
    const makeNewResponse: Aggregate<T> = {
    list: dataList,
    hasResult: hasResult(totalRes, page, pageLimit),
    resultCount: totalRes
    };
    makeNewResponse.list = dataList;
    makeNewResponse.hasResult = hasResult(totalRes, page, pageLimit);
    makeNewResponse.resultCount = totalRes;
    return makeNewResponse;
  });
};
export const  recordCount = function (q) {
  q.push({
    $count: 'recordCount'
  });
  return q;
};
// export const  getBlankListMapper = function<T> ():Aggregate<T> {
//   return {
//   list:[],
//   hasResult: false,
//   resultCount:0,
//   };
// };

// // this function make output response when return list.
// export const  getListMapperWithPaginationFromAggregate = async function<T> (dataList:T[], resultCount:Promise<T>, page: number, pageLimit:number) {
//   return resultCount.then(function (totalRes) {
//     const makeNewResponse:Aggregate<T> = {
//       list: dataList,
//       hasResult: hasResult(totalRes[0].recordCount, page, pageLimit),
//       resultCount: totalRes[0].recordCount
//     };

//     makeNewResponse.list = dataList;
//     makeNewResponse.hasResult = hasResult(totalRes[0].recordCount, page, pageLimit);
//     makeNewResponse.resultCount = totalRes[0].recordCount;

//     return makeNewResponse;
//   });
// };

// convert string to object in mongoose db
export const  convertToObjectId = function (id:string):ObjectId {
  return convertToObjectId(id);
};

export const  convertDouble = function (num: number) {
  return parseFloat((Math.floor(num * 100) / 100).toFixed(2));
};

export const  getStartDateOfTheMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const startDate = new Date(year, month, 1);
  startDate.setUTCHours(0, 0, 0, 0);

  return new Date(startDate.toISOString());
};

export const  getStartDateOfThePreviousMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const startDate = new Date(year, month - 1, 1);
  startDate.setUTCHours(24, 0, 0, 0);

  return new Date(startDate.toISOString());
};

export const  getEndDateOfThePreviousMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const endDate = new Date(year, month, 0);
  endDate.setUTCHours(23, 59, 59, 0);

  return new Date(endDate.toISOString());
};

export const  getEndDateOfTheMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const endDate = new Date(year, month + 1, 0);
  endDate.setUTCHours(23, 59, 59, 0);

  return new Date(endDate.toISOString());
};

export const  modifyEndDate = function (date:Date) {
  const currentDate = date;
  currentDate.setUTCHours(23, 59, 59, 0);
  return new Date(currentDate.toISOString());
};


