import mongoose from 'mongoose';

import config from '../../config/constants.js';

const utils = {};

utils.offset = function (page, pageLimit) {
  if (!pageLimit) {
    pageLimit = 20;
  }

  if (page === 1 || page === 0) {
    return 0;
  }
  return (page - 1) * pageLimit;
};

utils.pageLimit = function (pageLimit) {
  if (pageLimit) {
    return pageLimit;
  }
  return config.pageLimit;
};

utils.hasResult = function (totalResult, page, pageLimit) {
  const totalPage = Math.ceil(totalResult / pageLimit);
  let nextPage = false;

  if (totalPage > page) {
    nextPage = true;
  }
  return nextPage;
};

// this function make output response when return list.
utils.getListMapperWithPagination = function (
  dataList,
  resultCount,
  page,
  pageLimit
) {
  return resultCount.then(function (totalRes) {
    const makeNewResponse = {};
    makeNewResponse.list = dataList;
    makeNewResponse.hasResult = utils.hasResult(totalRes, page, pageLimit);
    makeNewResponse.resultCount = totalRes;
    return makeNewResponse;
  });
};
utils.recordCount = function (q) {
  q.push({
    $count: 'recordCount'
  });
  return q;
};
utils.getBlankListMapper = function () {
  // return resultCount.then(function () {
  const makeNewResponse = {};
  makeNewResponse.list = [];
  makeNewResponse.hasResult = false;
  makeNewResponse.resultCount = 0;
  return makeNewResponse;
  // })
};

// this function make output response when return list.
utils.getListMapperWithPaginationFromAggregate = function (
  dataList,
  resultCount,
  page,
  pageLimit
) {
  return resultCount.then(function (totalRes) {
    const makeNewResponse = {};

    makeNewResponse.list = dataList;
    makeNewResponse.hasResult = utils.hasResult(
      totalRes[0].recordCount,
      page,
      pageLimit
    );
    makeNewResponse.resultCount = totalRes[0].recordCount;

    return makeNewResponse;
  });
};

// convert string to object in mongoose db
utils.convertToObjectId = function (id) {
  return mongoose.Types.ObjectId(id);
};

utils.convertDouble = function (number) {
  return parseFloat((Math.floor(number * 100) / 100).toFixed(2));
};

utils.getStartDateOfTheMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const startDate = new Date(year, month, 1);
  startDate.setUTCHours(0, 0, 0, 0);

  return new Date(startDate.toISOString());
};

utils.getStartDateOfThePreviousMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const startDate = new Date(year, month - 1, 1);
  startDate.setUTCHours(24, 0, 0, 0);

  return new Date(startDate.toISOString());
};

utils.getEndDateOfThePreviousMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const endDate = new Date(year, month, 0);
  endDate.setUTCHours(23, 59, 59, 0);

  return new Date(endDate.toISOString());
};

utils.getEndDateOfTheMonth = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the start date of the current month
  const endDate = new Date(year, month + 1, 0);
  endDate.setUTCHours(23, 59, 59, 0);

  return new Date(endDate.toISOString());
};

utils.modifyEndDate = function (date) {
  const currentDate = date;
  currentDate.setUTCHours(23, 59, 59, 0);
  return new Date(currentDate.toISOString());
};
export default utils;
