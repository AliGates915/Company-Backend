import mongoose from "mongoose";

const subHeadSchema = new mongoose.Schema({
    headName: { type: String, required: true },
    headCode: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    subHeadName: { type: String, required: true },
    subHeadCode: { type: String, required: true, unique: true },
    companyCode: { type: String, required: true },
    description: { type: String }
});

const subHead = mongoose.model("subHead", subHeadSchema);
export default subHead;
