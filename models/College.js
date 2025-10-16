import mongoose, { Schema } from "mongoose";

const CollegeSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-H0PY2hiURdDK9kvJedn-S8zHOwpsnmkHw&s" }, 
    district: { type: String, required: true },
    main_city: { type: String, required: true },
    type: { type: String, required: true },
    courses_available: { type: [String], required: true },
    category: { type: String, required: true },
    cd_score: { type: String, required: true },
    course_fees: { type: String, required: true },
    // Category-wise cutoff values, e.g., { general: 85, obc: 80, sc: 75, st: 70 }
    cutoff_category_wise: {
      type: Map,
      of: Number,
      default: undefined,
    },
    placement: {
      average_package: { type: String, required: true },
      highest_package: { type: String, required: true },
      placement_percent: { type: String, required: true },
    },
    user_reviews: { type: String, required: true },
    ranking: { type: String, required: true },
  },
  { timestamps: true }
);

if (mongoose.models.College) {
  if (typeof mongoose.deleteModel === "function") {
    mongoose.deleteModel("College");
  } else {
    delete mongoose.models.College;
  }
}

const CollegeModel = mongoose.model("College", CollegeSchema);

export default CollegeModel;

