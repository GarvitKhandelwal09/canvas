import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
       content :{
        type: String,
        required: true
       },
}, {timestamps: true});
const File = mongoose.model("File", textSchema);

export default File;