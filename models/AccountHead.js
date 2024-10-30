import mongoose from "mongoose";

const accountHeadSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    companyCode: { type: String },
    headName: { type: String, required: true },
    headCode: { type: String },
    subHeadName: { type: String, },
    subHeadCode: { type: String },
    accountName: { type: String, required: true, unique: true },
    accountCode: { type: String },
    date: { type: String },
    balance: { type: String },
    amountCheck: { type: Boolean  },
    debitCheck: { type: Boolean  },
    description: { type: String }
});

const AccountHead = mongoose.model("AccountHead", accountHeadSchema);
export default AccountHead;
