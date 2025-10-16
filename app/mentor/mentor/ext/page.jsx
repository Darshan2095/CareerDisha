"use client";

import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  Link2, 
  FileText, 
  Video,
  CheckCircle,
  ArrowLeft
} from "lucide-react";

export default function PostSessionPage() {
  const [formData, setFormData] = useState({
    sessionTitle: '',
    speaker: '',
    interestArea: '',
    description: '',
    resourceLink: '',
    date: '',
    time: '',
    duration: '',
    joinLink: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const interestAreas = [
    "Engineering & Technology",
    "Medical & Healthcare", 
    "Business & Management",
    "Science & Research",
    "Arts & Humanities",
    "Law & Governance",
    "Career Guidance",
    "Entrance Exam Preparation",
    "Study Abroad",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white ">
        <div className="w-full max-w-7xl mx-auto bg-white  shadow-lg dark:shadow-none">
         
          
          <div className="px-4 sm:px-6 md:px-8 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100  rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
              </div>
              
              <h1 className="font-urbanist font-bold text-3xl  mb-4">
                Session Posted Successfully!
              </h1>
              
              <p className="font-poppins text-lg mb-8">
                Your seminar has been posted and students will be able to see it and register. 
                You'll receive notifications when students join.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-inter font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen size={16} />
                  Post Another Session
                </button>
                
                <a 
                  href="/"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-inter font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back to Home
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 ">
         {/* Header Section */}
        <section className="text-white h-64 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
                <div className="text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Post a New Session</h2>
                    <p className="text-lg md:text-xl opacity-90">
              Share your expertise with students across J&K. Schedule a seminar, workshop, or guidance session.</p>
                </div>
            </section>
      <div className="w-full max-w-7xl mx-auto bg-white  shadow-lg ">
      
        
       
       

        {/* Form Section */}
        <div className="px-4 sm:px-6 md:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Session Title */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                  <BookOpen size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Session Title *
                </label>
                <input
                  type="text"
                  name="sessionTitle"
                  value={formData.sessionTitle}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., JEE Main 2025 Strategy & Preparation Tips"
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white placeholder-gray-100 "
                />
              </div>

              {/* Speaker */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                  <User size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Speaker *
                </label>
                <input
                  type="text"
                  name="speaker"
                  value={formData.speaker}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Dr. Rajesh Kumar, IIT Delhi Alumni"
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white placeholder-gray-100 "
                />
              </div>

              {/* Interest Area */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                  <BookOpen size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Interest Area *
                </label>
                <select
                  name="interestArea"
                  value={formData.interestArea}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white"
                >
                  <option value="">Select Interest Area</option>
                  {interestAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium e mb-3">
                  <FileText size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Describe what students will learn in this session..."
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white  resize-none"
                />
              </div>

              {/* Resource Link */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                  <Link2 size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Resource Link (Optional)
                </label>
                <input
                  type="url"
                  name="resourceLink"
                  value={formData.resourceLink}
                  onChange={handleInputChange}
                  placeholder="https://example.com/study-material"
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white placeholder-white"
                />
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="flex items-center gap-2 font-inter font-medium e mb-3">
                    <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                    <Clock size={18} className="text-indigo-600 dark:text-indigo-400" />
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                  <Clock size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Duration (mins) *
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white"
                >
                  <option value="">Select Duration</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="75">1 hour 15 minutes</option>
                  <option value="90">1 hour 30 minutes</option>
                  <option value="120">2 hours</option>
                  <option value="150">2 hours 30 minutes</option>
                  <option value="180">3 hours</option>
                </select>
              </div>

              {/* Join Link */}
              <div>
                <label className="flex items-center gap-2 font-inter font-medium  mb-3">
                  <Video size={18} className="text-indigo-600 dark:text-indigo-400" />
                  Join Link *
                </label>
                <input
                  type="url"
                  name="joinLink"
                  value={formData.joinLink}
                  onChange={handleInputChange}
                  required
                  placeholder="https://meet.google.com/xxx-xxxx-xxx or https://zoom.us/j/xxxxxxxxx"
                  className="w-full px-4 py-3 border-none border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-400 text-gray-900 dark:text-white placeholder-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-inter font-semibold text-lg rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Posting...
                      </>
                    ) : (
                      <>
                        <BookOpen size={20} />
                        Post Session
                      </>
                    )}
                  </button>
                  
                  <a
                    href="/"
                    className="px-8 py-4 border border-gray-300 dark:border-gray-600  dark:text-black hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 font-inter font-semibold text-lg rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                  >
                    <ArrowLeft size={20} />
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


