import mongoose from "mongoose";

const subHeadSchema = new mongoose.Schema({
    headName: { type: String, required: true }, // No unique constraint
    headCode: { type: String, }, // Allow duplicates
    companyName: { type: String, required: true },
    subHeadName: { type: String, required: true, unique: true }, // Set unique constraint here
    subHeadCode: { type: String },
    companyCode: { type: String, },
    description: { type: String }
});

const subHead = mongoose.model("subHead", subHeadSchema);
export default subHead;
