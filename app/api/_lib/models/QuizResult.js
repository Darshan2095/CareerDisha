import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  session: { type: String, required: true },
  stream: { type: String, required: true },
  branch: { type: String, required: true },
  interestAnswers: { type: Object, required: true },
  aptitudeAnswers: { type: Object, required: true },
  interestScore: { type: Number, required: true },
  aptitudeScore: { type: Number, required: true },
  totalScore: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: "quizResults" });

export default mongoose.models.QuizResult || mongoose.model("QuizResult", quizResultSchema);


