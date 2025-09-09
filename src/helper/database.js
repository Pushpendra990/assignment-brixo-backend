import IfscDetail from '../models/IfscDetail.js';

export const getFromDb = async (ifsc) => {
  return IfscDetail.findOne({ ifsc });
};

export const upsertInDb = async (ifsc, data) => {
  return IfscDetail.findOneAndUpdate(
    { ifsc },
    { ...data, ifsc},
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};
