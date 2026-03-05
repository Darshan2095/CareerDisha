


"use client"; // needed for router + onClick

import { useRouter } from "next/navigation";
import { FiSearch, FiAward, FiBookOpen, FiGlobe } from "react-icons/fi";
import { LuSchool } from "react-icons/lu";
import { MdOutlineEventNote, MdOutlineNewspaper } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";



// /* 🔹 Reusable Card Component */
function Card({ icon, title, desc, onClick }) {

  return (
    <div
      className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <h3 className="mt-2 mb-1 text-lg font-semibold text-blue-900">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}



import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      {/* Central Container */}
      <div className=" mx-auto bg-white shadow-lg">



        {/* Hero Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="font-poppins font-semibold text-sm text-blue-600 mb-4">
                Your Educational Journey Starts Here
              </p>

              <h1
                className="font-urbanist font-semibold mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                  lineHeight: "1.1",
                }}
              >
                Bright Futures J&K –
                <br />
                <span className="text-blue-600">Education & Career</span>
                <br />
                Opportunities
              </h1>

              <p className="font-poppins text-lg text-gray-600 mb-8 leading-relaxed">
                A dedicated platform for students of Jammu & Kashmir. Find scholarships, explore colleges, and get career guidance – all in one place, designed to help you succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-inter font-medium text-sm rounded-full hover:scale-105 active:scale-100 transition-all duration-200 flex items-center justify-center gap-2">
                  Explore Colleges
                  <ArrowRight size={16} />
                </button>
                <button className="px-8 py-4 border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900 font-inter font-medium text-sm rounded-full hover:scale-105 active:scale-100 transition-all duration-200">
                  Find Scholarships
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://abirpothi.com/wp-content/uploads/2024/07/image-654.png"
                  alt="Students studying in college campus"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        50+
                      </div>
                      <div className="text-xs text-gray-600">Colleges</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        200+
                      </div>
                      <div className="text-xs text-gray-600">Scholarships</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        1000+
                      </div>
                      <div className="text-xs text-gray-600">
                        Students Helped
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-[95%] mx-auto rounded-2xl shadow-2xl px-4 sm:px-6 md:px-8 py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="text-center mb-12">
            <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              Our Educational Services
            </h2>
            <p className="font-poppins text-lg text-white max-w-2xl mx-auto">
              Everything you need to make informed decisions about your
              education in Jammu & Kashmir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* College Database Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                <BookOpen
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-3">
                College
              </h3>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Comprehensive information about all colleges in J&K including
                courses, fees, admission criteria, and campus facilities.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-H0PY2hiURdDK9kvJedn-S8zHOwpsnmkHw&s"
                alt="College building"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <button className="text-blue-600 dark:text-blue-400 font-inter font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2"

                onClick={() => router.push("/colleges")}
              >
                Explore Colleges <ArrowRight size={14} />
              </button>
            </div>

            {/* Scholarships Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                <Award
                  size={24}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-3">
                Scholarship Opportunities
              </h3>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Find government and private scholarships available for students
                in J&K with eligibility criteria and application processes.
              </p>
              <img
                src="https://i.ndtvimg.com/i/2018-02/scholarship_650x400_41518165885.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180"
                alt="Student receiving scholarship"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <button className="text-green-600 dark:text-green-400 font-inter font-medium text-sm hover:text-green-700 dark:hover:text-green-300 flex items-center gap-2"

                onClick={() => router.push("/scholarships")}
              >
                Find Scholarships <ArrowRight size={14} />
              </button>
            </div>

            {/* Career Guidance Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                <Users
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-3">
                Career Guidance
              </h3>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Get expert advice on career paths, course selection, and future
                opportunities based on your interests and aptitude.
              </p>
              <img
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Career counseling session"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <button className="text-purple-600 dark:text-purple-400 font-inter font-medium text-sm hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-2"

                onClick={() => router.push("/courses")}
              >
                Get Guidance <ArrowRight size={14} />
              </button>
            </div>

            {/* Key Dates Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors">
                <Calendar
                  size={24}
                  className="text-orange-600 dark:text-orange-400"
                />
              </div>
              <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-3">
                Important Dates
              </h3>
              <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                Stay updated with admission deadlines, exam dates, result
                announcements, and other important academic calendar events.
              </p>
              <img
                src="https://cdn.getmidnight.com/45d07b00b0188a892509950ff919e14e/2022/01/Date-Image.jpeg"
                alt="Calendar with important dates"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <button className="text-orange-600 dark:text-orange-400 font-inter font-medium text-sm hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-2"
              >
                View Calendar <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Feature Section */}
      <div className="w-[90%] px-4 sm:px-6 md:px-8 py-16 my-5 bg-gray-200 rounded-lg mx-auto shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="font-poppins font-semibold text-blue-600 mb-6 text-3xl md:text-4xl  ">
              Find Your Perfect Course with Our Smart Quiz
            </h2>
            <p className="font-poppins text-lg  mb-6 leading-relaxed">
              Not sure which course to choose? Take our intelligent career
              assessment quiz that analyzes your interests, skills, and career
              goals to recommend the most suitable courses and colleges in
              J&K.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                />
                <p className="font-poppins">
                  <span className="font-semibold">
                    Personalized Assessment:
                  </span>{" "}
                  Answer questions about your interests, strengths, and career
                  aspirations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                />
                <p className="font-poppins ">
                  <span className="font-semibold">
                    Smart Recommendations:
                  </span>{" "}
                  Get course suggestions tailored specifically to your profile
                  and goals
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                />
                <p className="font-poppins ">
                  <span className="font-semibold">College Matching:</span>{" "}
                  Discover colleges in J&K that offer your recommended courses
                </p>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-inter font-semibold text-sm rounded-full hover:scale-105 active:scale-100 transition-all duration-200 shadow-lg"
              onClick={() => router.push("/quiz/start")}>
              Take the Career Quiz
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="https://www.shutterstock.com/image-vector/quiz-symbol-remote-team-work-260nw-1915237630.jpg"
                alt="Student taking career assessment quiz on laptop"
                className="w-full h-[400px] object-cover"
              />

              {/* Quiz Stats Overlay */}
              <div className="absolute top-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    5 Minutes
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Quick Assessment
                  </div>
                </div>
              </div>

              {/* Course Match Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      95% Accuracy
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Course Matching
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      500+
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      Students Guided
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep other sections (services, admission, CTA, footer) same style */}




      {/* Mentor ships section */}
      <div className="w-[95%] mx-auto rounded-2xl px-4 sm:px-6 md:px-8 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-12">
          <h2 className="font-urbanist font-semibold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
            Expert Mentorship & Online Seminars
          </h2>
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with industry experts and educational mentors through live
            seminars and one-on-one guidance sessions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Feature Information */}
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users
                    size={24}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <div>
                  <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-2">
                    Connect with Expert Mentors
                  </h3>
                  <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Get guidance from experienced professionals, college
                    alumni, and industry experts who understand your career
                    path and can provide valuable insights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
                <div>
                  <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-2">
                    Live Online Seminars
                  </h3>
                  <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Mentors regularly post upcoming seminars on topics like
                    entrance exam preparation, career guidance, college life,
                    and industry trends. Join live sessions from anywhere.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle
                    size={24}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>
                <div>
                  <h3 className="font-urbanist font-semibold text-xl text-gray-900 dark:text-white mb-2">
                    Easy Registration & Reminders
                  </h3>
                  <p className="font-poppins text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Simple one-click registration for seminars with automatic
                    email reminders. Get meeting links and access recorded
                    sessions for later viewing.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-inter font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"

                onClick={() => router.push("/mentor")}>
                <Users size={16} />
                Find Mentors
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-white font-inter font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                onClick={() => router.push("/mentor/student")}>
                <Calendar size={16} />
                View Upcoming Seminars
              </button>
            </div>
          </div>

          {/* Right - Seminar Cards & Image */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online mentorship seminar session"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-inter font-semibold text-lg">
                  Live Career Guidance Session
                </p>
                <p className="font-poppins text-sm opacity-90">
                  Join 150+ students online
                </p>
              </div>
            </div>

            {/* Upcoming Seminars Cards */}
            <div className="space-y-4">
              <h4 className="font-urbanist font-semibold text-lg text-gray-900 dark:text-white">
                Upcoming Seminars
              </h4>

              {/* Seminar Card 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen
                      size={20}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-inter font-semibold text-sm text-gray-900 dark:text-white mb-1">
                      JEE Main 2025 Strategy & Tips
                    </h5>
                    <p className="font-poppins text-xs text-gray-600 dark:text-gray-300 mb-2">
                      By Dr. Rajesh Kumar, IIT Delhi Alumni
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        Oct 15, 6:00 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        90 mins
                      </span>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors">
                    Join
                  </button>
                </div>
              </div>

              {/* Seminar Card 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award
                      size={20}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-inter font-semibold text-sm text-gray-900 dark:text-white mb-1">
                      Medical Career Opportunities in J&K
                    </h5>
                    <p className="font-poppins text-xs text-gray-600 dark:text-gray-300 mb-2">
                      By Dr. Priya Sharma, GMC Srinagar
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        Oct 18, 7:00 PM
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        75 mins
                      </span>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Admission Steps Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-urbanist font-semibold text-3xl md:text-4xl  mb-4">
            Simple Admission Process
          </h2>
          <p className="font-poppins text-lg  max-w-2xl mx-auto">
            Follow these easy steps to secure your admission in your dream
            college
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600  rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="font-urbanist font-semibold text-xl  mb-3">
              Research & Explore
            </h3>
            <p className="font-poppins  text-sm leading-relaxed">
              Browse our comprehensive college database to find institutions
              that match your interests and career goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-600  rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="font-urbanist font-semibold text-xl  mb-3">
              Apply for Scholarships
            </h3>
            <p className="font-poppins  text-sm leading-relaxed">
              Check eligibility and apply for relevant scholarships to reduce
              your financial burden and focus on studies.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-600  rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="font-urbanist font-semibold text-xl  mb-3">
              Complete Admission
            </h3>
            <p className="font-poppins text-gray-600  text-sm leading-relaxed">
              Submit your applications before deadlines and track your
              admission status through our platform.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-urbanist font-semibold text-3xl md:text-4xl mb-4">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="font-poppins text-lg mb-8 text-blue-100">
            Join thousands of students who have successfully navigated their
            academic path with J&K Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-inter font-semibold rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => router.push("/courses")}
            >
              Start Exploring Now
            </button>
            <button className="px-8 py-4 border border-white bg-transparent hover:bg-white hover:text-blue-600 font-inter font-semibold rounded-full transition-colors"
              onClick={() => router.push("/mentor/student")}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>




      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&family=Poppins:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
        
        .font-urbanist { font-family: 'Urbanist', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

    </>
  );
}



