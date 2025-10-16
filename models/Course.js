import mongoose, { Schema } from 'mongoose';

const CourseSchema = new Schema({
  level: { type: String, required: true },
  category: { type: String, required: true },
  courses: [{
    name: { type: String, required: true },
    duration: { type: String, required: true },
    notes: { type: String, required: true },
    description: { type: String }
  }]
}, {
  timestamps: true
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);

