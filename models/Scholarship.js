import mongoose, { Schema } from 'mongoose';

const ScholarshipSchema = new Schema({
  name: { type: String, required: true },
  administered_by: { type: String, required: true },
  category: { type: String, required: true },
  target_audience: { type: String, required: true },
  location: { type: String, required: true },
  eligibility: { type: Schema.Types.Mixed, required: true },
  benefits: { type: Schema.Types.Mixed, required: true },
  income_criteria: { type: String },
  application_portal: { type: String, required: true },
  application_deadline: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.Scholarship || mongoose.model('Scholarship', ScholarshipSchema);

