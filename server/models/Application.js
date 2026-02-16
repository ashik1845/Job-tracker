import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  companyName: { type: String, required: true },
  role: { type: String, required: true },
  domain: String,
  status: { type: String, default: "Applied" },
  interviewDate: Date,
  appliedDate: { type: Date, default: Date.now }
});


export default mongoose.model("Application", applicationSchema);
