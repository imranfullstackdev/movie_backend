'use strict';

import {
  FilterQuery,
  Model,
  PipelineStage,
  ProjectionType,
  QueryOptions,
  SaveOptions,
  UpdateQuery,
  Document
} from 'mongoose';

type MongoArgs<T> = {
  model: Model<T>;
  criteria: FilterQuery<T>;
  projection: ProjectionType<T>;
  options: QueryOptions<T>;
};

function getData<T>(Model: Model<T>, criteria?: FilterQuery<T>, projection?: ProjectionType<T>) {
  if (criteria) {
    return Model.find(criteria, projection) as Promise<FilterQuery<T>>;
  }
  return Model.find() as Promise<FilterQuery<T>>;
}
const findOne = async function <T>(
  Model: Model<T>,
  criteria: FilterQuery<T>,
  projection?: ProjectionType<T>,
  options?: QueryOptions<T>
): Promise<T | null> {
  return Model.findOne(criteria, projection, options);
};

const countDocuments = function <T>(Model: Model<T>, criteria: FilterQuery<T>) {
  return Model.countDocuments(criteria);
};

const insertMany = function <T>(Model: Model<T>, objToSave: Model<T>) {
  return Model.insertMany(objToSave);
};

const insertOne = async function <T extends Document>(
  Model: Model<T>,
  objToSave: Model<T>,
  callback?: SaveOptions
): Promise<T> {
  return new Model(objToSave).save(callback);
};

const createData = function <T extends Document>(
  Model: Model<T>,
  objToSave: Model<T>,
  callback: SaveOptions
): Promise<T> {
  return new Model(objToSave).save(callback);
};

const updateData = function <T>(
  Model: Model<T>,
  criteria: FilterQuery<T>,
  dataToSet: UpdateQuery<T>
) {
  console.log('---dddd-----', Model, criteria, dataToSet);
  return Model.findOneAndUpdate(criteria, dataToSet);
};

const updateMultipleData = function <T>(
  Model: Model<T>,
  criteria: FilterQuery<T>,
  dataToSet: UpdateQuery<T>,
  options: QueryOptions<T>,
  callback: SaveOptions
) {
  return Model.updateMany(criteria, dataToSet, options);
};

const deleteOne = function <T>(Model: Model<T>, criteria: FilterQuery<T>) {
  // console.log('---dddd-----',Model: Model<T>criteria, dataToSet)
  return Model.deleteOne(criteria);
};

const deleteMany = function <T>(Model: Model<T>, criteria: FilterQuery<T>) {
  // console.log('---dddd-----',Model: Model<T>criteria, dataToSet)
  return Model.deleteMany(criteria);
};

const dataAggregation = function <T>(Model: Model<T>, pipeline: PipelineStage[]) {
  return Model.aggregate(pipeline).exec();
};

// const dataAggregationWithPagination = function <T>(
//   Model: Model<T>,
//   pipeline: PipelineStage[],
//   page,
//   pageLimit
// ) {
//   return Model.aggregate(pipeline)
//     .skip(utils.offset(page, pageLimit))
//     .limit(utils.pageLimit(pageLimit))
//     .then(function <T>(data) {
//       if (data.length >= 1) {
//         pipeline = utils.recordCount(pipeline);
//         const result = data;
//         return utils.getListMapperWithPaginationFromAggregate(
//           result,
//           Model.aggregate(pipeline),
//           page,
//           utils.pageLimit(pageLimit)
//         );
//       } else {
//         return utils.getBlankListMapper();
//       }
//     });
// };

const updateMultipleInsert = function <T>(Model: Model<T>, arr: T[]) {
  return Model.insertMany(arr);
};

const dataCount = function <T>(Model: Model<T>, criteria: FilterQuery<T>) {
  return Model.count(criteria);
};

export default {
  getData,
  createData,
  updateData,
  updateMultipleData,
  updateMultipleInsert,
  dataAggregation,
  dataCount,
  insertMany,
  findOne,
  insertOne,
  deleteOne,
  deleteMany,
  countDocuments
};
