import { Schema, model } from 'mongoose';

const ifscSchema = new Schema({
  ifsc: { type: String, unique: true, required: true, uppercase: true },
  MICR: String,
  BRANCH: String,
  ADDRESS: String,
  STATE: String,
  CONTACT: String,
  UPI: Boolean,
  RTGS: Boolean,
  CITY: String,
  CENTER: String,
  DISTRICT: String,
  NEFT: Boolean,
  IMPS: Boolean,
  SWIFT: String,
  ISO3166: String,
  BANK: String,
  BANKCODE: String,
},
{ timestamps: true }
);

export default model('IfscDetail', ifscSchema);