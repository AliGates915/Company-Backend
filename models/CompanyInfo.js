import mongoose from 'mongoose';

const companyInfoSchema = new mongoose.Schema({

  companyName: { type: String, required: true, unique: true },
  companyCode: { type: String, required: true , unique: true},
  logo: { type: String  }, // Adjust if you're storing images differently
  address: { type: String, required: true },
  telephone: { type: String, required: true },
  mobile: { type: String,  },
  fax: { type: String, required: true },
  email: { type: String, required: true },
  contactPerson: { type: String },
  ntn: { type: String, required: true },
  gst: { type: String, required: true },
  
  createdAt: { type: Date, default: Date.now }
});

const CompanyInfo = mongoose.model('CompanyInfo', companyInfoSchema);
export default CompanyInfo;
