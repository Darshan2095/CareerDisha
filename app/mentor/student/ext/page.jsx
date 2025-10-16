"use client";

import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  Link2, 
  Video,
  Search,
  Filter,
  CheckCircle,
  ExternalLink
} from "lucide-react";

export default function SessionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [registeredSessions, setRegisteredSessions] = useState(new Set());
  const [joiningSession, setJoiningSession] = useState(null);

  // Sample sessions data - in real app this would come from API
  const sessions = [
    {
      id: 1,
      title: "JEE Main 2025 Strategy & Preparation Tips",
      speaker: "Dr. Rajesh Kumar, IIT Delhi Alumni",
      interestArea: "Engineering & Technology",
      description: "Comprehensive strategy session covering all aspects of JEE Main preparation including subject-wise tips, time management, and mock test strategies.",
      resourceLink: "https://example.com/jee-materials",
      date: "2024-10-15",
      time: "18:00",
      duration: "90",
      joinLink: "https://meet.google.com/abc-defg-hij",
      registered: false
    },
    {
      id: 2,
      title: "Medical Career Opportunities in J&K",
      speaker: "Dr. Priya Sharma, GMC Srinagar",
      interestArea: "Medical & Healthcare",
      description: "Explore various medical career paths available in Jammu & Kashmir, including government opportunities, private practice, and specialization options.",
      resourceLink: "",
      date: "2024-10-18",
      time: "19:00",
      duration: "75",
      joinLink: "https://zoom.us/j/123456789",
      registered: false
    },
    {
      id: 3,
      title: "NEET 2025 Biology Preparation Masterclass",
      speaker: "Dr. Anjali Verma, AIIMS Delhi",
      interestArea: "Medical & Healthcare",
      description: "Advanced biology concepts for NEET with focus on previous year questions, important topics, and scoring strategies.",
      resourceLink: "https://example.com/neet-bio-notes",
      date: "2024-10-20",
      time: "16:00",
      duration: "120",
      joinLink: "https://meet.google.com/xyz-pqrs-tuv",
      registered: false
    },
    {
      id: 4,
      title: "Business Studies & Commerce Career Guidance",
      speaker: "Prof. Amit Singh, NIT Srinagar",
      interestArea: "Business & Management",
      description: "Career opportunities in business, commerce, and management fields with insights into various entrance exams and job prospects.",
      resourceLink: "",
      date: "2024-10-22",
      time: "17:30",
      duration: "60",
      joinLink: "https://meet.google.com/business-career",
      registered: false
    },
    {
      id: 5,
      title: "Study Abroad Options for Kashmir Students",
      speaker: "Ms. Riya Patel, Education Consultant",
      interestArea: "Study Abroad",
      description: "Complete guide to studying abroad including scholarships, application process, and best countries for different fields of study.",
      resourceLink: "https://example.com/study-abroad-guide",
      date: "2024-10-25",
      time: "15:00",
      duration: "90",
      joinLink: "https://zoom.us/j/studyabroad2024",
      registered: false
    }
  ];

  const interestAreas = [
    "Engineering & Technology",
    "Medical & Healthcare", 
    "Business & Management",
    "Science & Research",
    "Arts & Humanities",
    "Law & Governance",
    "Career Guidance",
    "Entrance Exam Preparation",
    "Study Abroad"
  ];

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === '' || session.interestArea === selectedArea;
    return matchesSearch && matchesArea;
  });

  const handleJoinSession = async (sessionId, joinLink) => {
    setJoiningSession(sessionId);
    
    // Simulate joining process
    setTimeout(() => {
      window.open(joinLink, '_blank');
      setRegisteredSessions(prev => new Set([...prev, sessionId]));
      setJoiningSession(null);
    }, 1000);
  };

  const getAreaColor = (area) => {
    const colors = {
      "Engineering & Technology": "bg-blue-100  dark:bg-blue-900/30 ",
      "Medical & Healthcare": "bg-red-100  dark:bg-red-900/30 ",
      "Business & Management": "bg-green-100  dark:bg-green-900/30 ",
      "Study Abroad": "bg-purple-100  dark:bg-purple-900/30 ",
      "Science & Research": "bg-yellow-100  dark:bg-yellow-900/30 "
    };
    return colors[area] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 ">
        <section className="text-white h-64 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
                <div className="text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Sessions</h2>
                    <p className="text-lg md:text-xl opacity-90">
              Join expert-led seminars and workshops. Learn from industry professionals and get guidance for your career.</p>
                </div>
            </section>
      <div className="w-full max-w-7xl mx-auto bg-white shadow-lg dark:shadow-none">
       
        
        {/* Header Section */}
        

        {/* Search and Filter Section */}
        <div className="px-4 sm:px-6 md:px-8 py-8 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                <input
                  type="text"
                  placeholder="Search sessions or speakers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-100  rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-300  placeholder-black"
                />
              </div>

              {/* Filter */}
              <div className="md:w-64 relative">
                <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500  bg-gray-300"
                >
                  <option value="">All Interest Areas</option>
                  {interestAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="font-poppins text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredSessions.length} session{filteredSessions.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="px-4 sm:px-6 md:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {filteredSessions.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen size={64} className="mx-auto  mb-4" />
                <h3 className="font-urbanist font-semibold text-xl  mb-2">
                  No sessions found
                </h3>
                <p className="font-poppins ">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredSessions.map((session) => (
                  <div
                    key={session.id}
                    className=" rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-urbanist font-bold text-xl  mb-2">
                            {session.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm  mb-3">
                            <User size={16} />
                            <span className="font-inter">{session.speaker}</span>
                          </div>
                        </div>
                        {registeredSessions.has(session.id) && (
                          <div className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                            <CheckCircle size={12} />
                            Registered
                          </div>
                        )}
                      </div>

                      {/* Interest Area Tag */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getAreaColor(session.interestArea)}`}>
                          {session.interestArea}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-poppins text-sm  mb-6 leading-relaxed">
                        {session.description}
                      </p>

                      {/* Session Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                          <span className="font-inter ">
                            {formatDate(session.date)}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-sm">
                          <Clock size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                          <span className="font-inter ">
                            {formatTime(session.time)} • {session.duration} minutes
                          </span>
                        </div>

                        {session.resourceLink && (
                          <div className="flex items-center gap-3 text-sm">
                            <Link2 size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                            <a
                              href={session.resourceLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-inter text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                            >
                              Study Materials
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Join Button */}
                      <button
                        onClick={() => handleJoinSession(session.id, session.joinLink)}
                        disabled={joiningSession === session.id}
                        className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-inter font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        {joiningSession === session.id ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Joining...
                          </>
                        ) : (
                          <>
                            <Video size={16} />
                            Join Session
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}


