"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function MindlerComputerApplicationPage() {
  const [copied, setCopied] = useState("");
  const [activeSection, setActiveSection] = useState("summary");
  // References for each section
  const summaryRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const jammuKashmirRef = useRef(null); // New ref for J&K opportunities section
  const careerPathRef = useRef(null);
  const leadingInstitutesRef = useRef(null);
  const institutionsAbroadRef = useRef(null);
  const entranceExamsRef = useRef(null);
  const workDescriptionRef = useRef(null);
  const prosConsRef = useRef(null);

  const router = useRouter();

  const handleCareerChange = (e) => {
    const value = e.target.value;
    if (value) {
            router.push(value);
    }
  };  
  const institutesIndia = [
    { college: "Delhi University", location: "Delhi", website: "http://www.du.ac.in" },
    { college: "Loyola College", location: "Chennai", website: "http://www.loyolacollege.edu/" },
    { college: "Ashoka University", location: "Delhi", website: "http://www.ashoka.edu.in/" },
    { college: "Fergusson College", location: "Pune", website: "http://www.fergusson.edu/" },
    { college: "Madras Christian College", location: "Chennai", website: "https://www.mcc.edu.in/" },
    { college: "Symbiosis Institute of Computer Studies & Research", location: "Pune", website: "http://sicsr.ac.in/home/" },
    { college: "Christ University, Bangalore", location: "Bangalore", website: "http://www.christuniversity.in/" },
    { college: "SRM University", location: "Chennai", website: "http://www.srmuniv.ac.in/" },
    { college: "GLS Institute of Computer Application", location: "Ahmedabad", website: "http://glsica.org/" },
  ];
  const institutesWorld = [
    { college: "Stanford University", location: "United States", website: "https://www.stanford.edu/" },
    { college: "Massachusetts Institute of Technology", location: "United States", website: "http://web.mit.edu/" },
    { college: "University of California Berkeley", location: "United States", website: "http://www.berkeley.edu/" },
    { college: "Harvard University", location: "United States", website: "http://www.harvard.edu/" },
    { college: "Princeton University", location: "United States", website: "http://www.princeton.edu/" },
    { college: "Carnegie Mellon University", location: "United States", website: "http://www.cmu.edu/" },
    { college: "The University of Texas at Austin", location: "United States", website: "http://www.utexas.edu/" },
    { college: "Cornell University", location: "United States", website: "https://www.cornell.edu/" },
    { college: "University of Toronto", location: "Canada", website: "https://www.utoronto.ca/" },
  ];
  const entranceExams = [
    {
      college: "GGSIPU-CET",
      date: "May",
      elements: "Mathematics, Logical Reasoning, General Knowledge, Computer Awareness, English",
      website: "http://www.ipu.ac.in/",
    },
    {
      college: "Christ University Entrance Exam",
      date: "December",
      elements: "Skill and Personality Assessment, Interview",
      website: "http://www.christuniversity.in/",
    },
    {
      college: "CUET",
      date: "Application - Feb-March, Examination - May-June",
      elements:
        "Physics + Mathematics / Applied Mathematics + Chemistry / Computer Science / Informatics Practices, Any one Language",
      website: "https://cuet.samarth.ac.in/",
    },
    {
      college: "Symbiosis Entrance Test (SET)",
      date: "May",
      elements: "Mathematics, Logical Reasoning, General Knowledge, English",
      website: "http://www.set-test.org/",
    },
  ];

  // Professional opportunities with descriptions
  const professionalOpportunities = [
    {
      role: "Computer Programmers",
      description: "Computer programmers write and test code that allows computer applications and software programs to function properly. They turn program designs created by software developers and engineers into instructions that a computer can follow. Programmers often work closely with software developers, and in some cases their duties overlap."
    },
    {
      role: "Software Developers",
      description: "Software developers are the creative minds behind computer programs. They develop applications that allow users to perform specific tasks on computers or other devices. They also create the underlying systems that run the devices or control networks. Software developers typically analyze user needs and then design, test, and develop software to meet those needs."
    },
    {
      role: "Web Designer",
      description: "Web designers create the look, layout, and features of a website. The job involves understanding both graphic design and computer programming. They work with development teams or managers for keeping the site up-to-date and prioritizing needs, among other tasks. Web designers need to be familiar with technology and understand how computers and web servers function."
    },
    {
      role: "Database Administrator",
      description: "Database administrators (DBAs) use specialized software to store and organize data. The role may include capacity planning, installation, configuration, database design, migration, performance monitoring, security, troubleshooting, as well as backup and data recovery. DBAs ensure that organizational data is secure, available, and consistently performing as expected."
    },
    {
      role: "Web/Multimedia Programmer",
      description: "Web and multimedia programmers use a variety of programming languages to create interactive websites and multimedia applications. They work with designers to implement visual elements and user interfaces. These programmers are responsible for the technical aspects of website creation, including performance and capacity, which are measures of a website's speed and how much traffic the site can handle."
    },
    {
      role: "Software Consultant",
      description: "Software consultants provide expert advice to organizations on how to use software to meet their business objectives. They analyze a company's needs and recommend software solutions to improve efficiency and productivity. Software consultants may also assist with implementation, training, and troubleshooting. They often specialize in specific types of software or industries."
    },
    {
      role: "Technical Writer",
      description: "Technical writers create instruction manuals and other supporting documents to communicate complex and technical information more easily. They also develop, gather, and disseminate technical information among customers, designers, and manufacturers. Technical writers often work with computer hardware engineers, scientists, computer support specialists, and software developers to manage the flow of information among project workgroups."
    },
    {
      role: "System Analyst",
      description: "System analysts analyze an organization's current computer systems and procedures and design information systems solutions to help the organization operate more efficiently and effectively. They bring business and information technology (IT) together by understanding the needs and limitations of both. System analysts may serve as change agents who identify the organizational benefits of new technologies."
    }
  ];

  // Jammu and Kashmir opportunities
  const jammuKashmirOpportunities = [
    {
      title: "Government IT Initiatives",
      description: "The Jammu & Kashmir government has launched several IT initiatives including 'Digital J&K' and 'e-Office' to digitize government services. These projects create opportunities for software developers, system administrators, and IT consultants to work on government contracts and projects.",
      icon: "🏛️"
    },
    {
      title: "IT Parks and Startups",
      description: "IT parks in Srinagar and Jammu are being developed to foster the growth of IT companies and startups. These hubs provide infrastructure and support for new ventures, creating opportunities for software developers, web designers, and IT entrepreneurs.",
      icon: "🏢"
    },
    {
      title: "Tourism Tech Solutions",
      description: "With tourism being a major industry in J&K, there's growing demand for IT professionals to develop tourism-related applications, booking platforms, and digital marketing solutions. This creates opportunities for web developers, mobile app developers, and digital marketing specialists.",
      icon: "🏔️"
    },
    {
      title: "E-Governance Projects",
      description: "Various e-governance projects are being implemented to improve service delivery to citizens. These projects require IT professionals for software development, system integration, and maintenance, offering stable career opportunities in the public sector.",
      icon: "📋"
    },
    {
      title: "Educational Institutions",
      description: "Universities and colleges in J&K are expanding their IT departments, creating teaching and research opportunities for qualified professionals. There's also demand for IT professionals to develop and maintain educational technology platforms.",
      icon: "🎓"
    },
    {
      title: "Remote Work Opportunities",
      description: "Improved internet connectivity has opened up remote work opportunities for J&K residents with national and international companies. This allows IT professionals to work with global teams while living in the region, offering competitive salaries and diverse experiences.",
      icon: "💻"
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };
  const scrollToSection = (sectionRef, sectionId) => {
    setActiveSection(sectionId);
    if (sectionRef.current) {
      const headerHeight = 80; // Height of the fixed header
      const elementPosition = sectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    const sectionRefs = {
      summary: summaryRef,
      opportunities: opportunitiesRef,
      jammuKashmir: jammuKashmirRef,
      careerPath: careerPathRef,
      leadingInstitutes: leadingInstitutesRef,
      institutionsAbroad: institutionsAbroadRef,
      entranceExams: entranceExamsRef,
      workDescription: workDescriptionRef,
      prosCons: prosConsRef
    };
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-section-id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Add data-section-id attribute and observe each section
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.setAttribute('data-section-id', id);
        observer.observe(ref.current);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header - Sticky */}
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20"></div>
      {/* Banner */}
      <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
        <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
      </section>
      {/* Breadcrumb */}
      <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
        <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Computer Application IT &gt; Computer Application And IT</div>
        {/* Dropdown */}
        <div className="relative">
          <select
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            defaultValue=""
            onChange={handleCareerChange}
          >
            <option value="" disabled>
              Choose another Career
            </option>
            <option value="/engineering">Engineering</option>
            <option value="/computer-application-it">Computer Application & IT</option>
            <option value="/game-development">Game Development</option>
            <option value="/mech">Mechanical Engineering</option>
            <option value="/civil">Civil Engineering</option>
            <option value="/ele">Electrical Engineering</option>
          </select>
        </div>
      </div>
      <div className="flex px-8 py-8 gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-1/4 pr-6">
          <div className="sticky top-24 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <ul className="space-y-1 p-2">
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(summaryRef, "summary")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-blue-600"}`}>📄</span>
                  <span>Summary</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(opportunitiesRef, "opportunities")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-blue-600"}`}>🎯</span>
                  <span>Professional Opportunities</span>
                </div>
              </li>
              {/* New J&K opportunities section in sidebar */}
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-blue-600"}`}>🏔️</span>
                  <span>J&K Opportunities</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(careerPathRef, "careerPath")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-blue-600"}`}>🛤️</span>
                  <span>Career Path</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-blue-600"}`}>🏫</span>
                  <span>Leading Institutes</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-blue-600"}`}>🌍</span>
                  <span>Institutions Abroad</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-blue-600"}`}>📝</span>
                  <span>Entrance Exams</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(workDescriptionRef, "workDescription")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-blue-600"}`}>💼</span>
                  <span>Work Description</span>
                </div>
              </li>
              <li
                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                onClick={() => scrollToSection(prosConsRef, "prosCons")}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-blue-600"}`}>⚖️</span>
                  <span>Pros & Cons</span>
                </div>
              </li>
            </ul>
            {/* Demo Form */}
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-gray-100">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Computer Application and IT?</h3>
              <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">Take Free Demo</button>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="w-3/4">
          {/* Summary Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={summaryRef}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">Computer Application and IT</h2>
            </div>
            <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">📄</span>
              <span>Summary</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Computer Application is the most preferred career option for those who wish to join the IT sector as well as for those who have a quick thinking mind that can analyze the situation at hand and apply concepts towards solving them.
                  It is more professionally oriented as compared to computer science and other similar alternatives. Education in Computer Application includes knowledge of computer fundamentals and programming concepts as well as learning and mastering programming languages.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                  <img src="/shutterstock_284316539_CL.png" alt="Computer Application and IT" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                </div>
              </div>
            </div>
          </section>
          {/* Professional Opportunities Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">🎯</span>
              <span>Career Opportunities in Computer Application and IT</span>
            </h3>
            <div className="space-y-4">
              {professionalOpportunities.map((opportunity, idx) => (
                <details key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="cursor-pointer font-medium text-gray-800 flex items-center justify-between">
                    <span>{opportunity.role}</span>
                    <span className="text-gray-500">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{opportunity.description}</p>
                </details>
              ))}
            </div>
          </section>

          {/* New Jammu and Kashmir Opportunities Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={jammuKashmirRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">🏔️</span>
              <span>Opportunities in Jammu and Kashmir</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jammuKashmirOpportunities.map((opportunity, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{opportunity.icon}</span>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">{opportunity.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{opportunity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <span className="text-amber-600">🌟</span>
                <span>Key Benefits for J&K Residents</span>
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Special government incentives for IT professionals working in J&K</li>
                <li>Lower cost of living compared to major metropolitan cities</li>
                <li>Growing startup ecosystem with government support</li>
                <li>Improving digital infrastructure across the region</li>
                <li>Unique opportunity to contribute to the region's technological development</li>
              </ul>
            </div>
          </section>

          {/* Career Path Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">🛤️</span>
              <span>How to Pursue a Career in Computer Application and IT</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream with Maths (Computer Science is recommended)</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BCA/ BSc Computer Science for 3 years</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MCA for 2-3 years</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII in Science Stream with IT/Computer Science/ Similar</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue B.Tech in Computer Science for 4 years</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue M.Tech for 2 Years</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Important Facts */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <span className="text-blue-600">✔️</span>
                <span>Important Facts</span>
              </h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Some colleges have Maths and Computer Science as mandatory subjects in Class XII</li>
                <li>Must have passed class 12th or senior secondary examination with at least 50% marks including English</li>
                <li>The minimum age limit is 17 years and the maximum age varies between 22-25 years for BCA Course</li>
              </ul>
            </div>
          </section>
          {/* Leading Institutes Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">🏫</span>
              <span>Leading Institutes (India)</span>
            </h3>
            <p className="mb-6 text-gray-700 text-lg">Top Computer Application and IT Institutes in India</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {institutesIndia.map((inst, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                      <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                      <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                        <a href={inst.website} target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors">
                          {inst.website}
                        </a>
                        <button
                          onClick={() => handleCopy(inst.website)}
                          className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
                        >
                          {copied === inst.website ? "Copied!" : "Copy"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* Institutions Abroad Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={institutionsAbroadRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">🌍</span>
              <span>Institutions Abroad</span>
            </h3>
            <p className="mb-6 text-gray-700 text-lg">Top Computer Application and IT Institutes in the World</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {institutesWorld.map((inst, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                      <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                      <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                        <a href={inst.website} target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors">
                          {inst.website}
                        </a>
                        <button
                          onClick={() => handleCopy(inst.website)}
                          className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
                        >
                          {copied === inst.website ? "Copied!" : "Copy"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* Entrance Exams Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={entranceExamsRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">📝</span>
              <span>Important Entrance Exams</span>
            </h3>
            <h4 className="text-lg font-medium mb-5 text-gray-800 flex items-center gap-2">
              <span className="text-blue-600">🎓</span>
              <span>Undergraduate</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Important Elements</th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {entranceExams.map((exam, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{exam.college}</td>
                      <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.date}</td>
                      <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.elements}</td>
                      <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                        <a href={exam.website} target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors">
                          {exam.website}
                        </a>
                        <button
                          onClick={() => handleCopy(exam.website)}
                          className="text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
                        >
                          {copied === exam.website ? "Copied!" : "Copy"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* Work Description Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={workDescriptionRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">💼</span>
              <span>Work Description</span>
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Design software, operating systems, network control systems and computer games</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Produce computer applications, software and utility programmes based on user's requirement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Design and develop website, mobile applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Write codes and design programmes for operating systems and software</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Design innovative IT solutions to drive businesses and increase efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Make high level decisions in the architecture and designing of IT products and services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Collaborate with engineers or software developers to select appropriate design solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Ensure that network connectivity throughout a company's LAN/WAN infrastructure is at par with technical considerations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Develop & implement the most efficient and cost-effective solutions for business requirement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Evaluate a client's business and IT processes to provide software solutions to drive business efficiency</span>
              </li>
            </ul>
          </section>
          {/* Pros & Cons Section */}
          <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
              <span className="text-2xl">⚖️</span>
              <span>Pros & Cons of a Career in Computer Application and IT</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Pros</span>
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Wide demand of computer professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>High paying potential</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Growth and learning oriented field</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <span className="text-rose-600">✗</span>
                  <span>Cons</span>
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Low salaries in the initial phases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Have to keep updated on new technologies/languages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span>Only people passionate about it can survive in long run</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}