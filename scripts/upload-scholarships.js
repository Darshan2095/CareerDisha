const fs = require('fs');
const path = require('path');

async function uploadScholarships() {
  try {
    console.log('Uploading scholarships to MongoDB...');
    
    const response = await fetch('http://localhost:3002/api/scholarships/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Success:', result.message);
      console.log('📊 Count:', result.count);
    } else {
      console.error('❌ Error:', result.error);
    }
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
  }
}

uploadScholarships();
