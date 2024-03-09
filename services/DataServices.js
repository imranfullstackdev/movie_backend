'use strict';

import utils from '../helpers/utils/index.js';

const getData = function (Model, criteria, projection, options, callback) {
  return Model.find(criteria, projection, options, callback);
};
const findOne = function (Model, criteria, projection, options, callback) {
  return Model.findOne(criteria, projection, options, callback);
};

const countDocuments = function (Model, criteria) {
  return Model.countDocuments(criteria);
};

const insertMany = function (Model, objToSave) {
  return Model.insertMany(objToSave);
};

const insertOne = function (Model, objToSave, callback) {
  return new Model(objToSave).save(callback);
};

const createData = function (Model, objToSave, callback) {
  return new Model(objToSave).save(callback);
};

const updateData = function (Model, criteria, dataToSet, options, callback) {
  console.log('---dddd-----',Model,criteria, dataToSet)
  return Model.findOneAndUpdate(criteria, dataToSet, options, callback);
};

const updateMultipleData = function (
  Model,
  criteria,
  dataToSet,
  options,
  callback
) {
  return Model.updateMany(criteria, dataToSet, options, callback);
};

const deleteOne = function (Model, criteria) {
  // console.log('---dddd-----',Model,criteria, dataToSet)
  return Model.deleteOne(criteria);
};

const deleteMany = function (Model, criteria) {
  // console.log('---dddd-----',Model,criteria, dataToSet)
  return Model.deleteMany(criteria);
};

const dataAggregation = function (Model, pipeline, callback) {
  return Model.aggregate(pipeline).exec(callback);
};

const dataAggregationWithPagination = function (
  Model,
  pipeline,
  page,
  pageLimit
) {
  return Model.aggregate(pipeline)
    .skip(utils.offset(page, pageLimit))
    .limit(utils.pageLimit(pageLimit))
    .then(function (data) {
      if (data.length >= 1) {
        pipeline = utils.recordCount(pipeline);
        const result = data;
        return utils.getListMapperWithPaginationFromAggregate(
          result,
          Model.aggregate(pipeline),
          page,
          utils.pageLimit(pageLimit)
        );
      } else {
        return utils.getBlankListMapper();
      }
    });
};

const updateMultipleInsert = function (Model, arr) {
  return Model.insertMany(arr);
};

const dataCount = function (Model, criteria) {
  return Model.count(criteria);
};

export default {
  getData: getData,
  createData: createData,
  updateData: updateData,
  updateMultipleData: updateMultipleData,
  updateMultipleInsert: updateMultipleInsert,
  dataAggregation: dataAggregation,
  dataCount: dataCount,
  insertMany: insertMany,
  findOne: findOne,
  insertOne: insertOne,
  dataAggregationWithPagination,
  deleteOne,
  deleteMany,
  countDocuments
};
