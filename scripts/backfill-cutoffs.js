/*
  Backfill script to add cutoff_category_wise to existing College documents.
  - Sets field to an empty object {} if missing.
  - Run with: npm run backfill:cutoffs
*/

const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MONGODB_URI env var is not set");
  process.exit(1);
}

async function run() {
  await mongoose.connect(MONGODB_URI);

  const collegeSchema = new mongoose.Schema({}, { strict: false, collection: "colleges" });
  const College = mongoose.models.__BackfillCollege || mongoose.model("__BackfillCollege", collegeSchema);

  const filter = { $or: [{ cutoff_category_wise: { $exists: false } }, { cutoff_category_wise: null }] };
  const update = { $set: { cutoff_category_wise: {} } };

  const result = await College.updateMany(filter, update);
  console.log(`Updated ${result.modifiedCount} colleges.`);

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});



