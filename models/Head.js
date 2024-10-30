import mongoose from "mongoose";

const headSchema = new mongoose.Schema({
    headName: { type: String, required: true , unique : true},
    headCode: { type: String, required: true},
    companyName: { type: String, required: true },
    companyCode: { type: String, },
    description: { type: String }
});

const Head = mongoose.model("Head", headSchema);
export default Head;
