"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HistoryArtsPage() {
    const [copied, setCopied] = useState("");
    const [activeSection, setActiveSection] = useState("summary");

    // References for each section
    const summaryRef = useRef(null);
    const opportunitiesRef = useRef(null);
    const jammuKashmirRef = useRef(null);
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
        { college: "Jawaharlal Nehru University", location: "Delhi", website: "https://www.jnu.ac.in/" },
        { college: "University of Delhi", location: "Delhi", website: "https://www.du.ac.in/" },
        { college: "Banaras Hindu University", location: "Varanasi", website: "https://www.bhu.ac.in/" },
        { college: "Aligarh Muslim University", location: "Aligarh", website: "https://www.amu.ac.in/" },
        { college: "University of Calcutta", location: "Kolkata", website: "https://www.caluniv.ac.in/" },
        { college: "Osmania University", location: "Hyderabad", website: "https://www.osmania.ac.in/" },
        { college: "Archaeological Survey of India", location: "New Delhi", website: "https://asi.nic.in/" },
        { college: "National Museum Institute", location: "New Delhi", website: "https://www.nmi.gov.in/" },
        { college: "Deccan College Post-Graduate and Research Institute", location: "Pune", website: "https://dcpgi.ac.in/" },
    ];

    const institutesWorld = [
        { college: "University of Oxford", location: "United Kingdom", website: "https://www.ox.ac.uk/" },
        { college: "Harvard University", location: "United States", website: "https://www.harvard.edu/" },
        { college: "University of Cambridge", location: "United Kingdom", website: "https://www.cam.ac.uk/" },
        { college: "Yale University", location: "United States", website: "https://www.yale.edu/" },
        { college: "Heidelberg University", location: "Germany", website: "https://www.uni-heidelberg.de/" },
        { college: "University of Tokyo", location: "Japan", website: "https://www.u-tokyo.ac.jp/en/" },
        { college: "Australian National University", location: "Australia", website: "https://www.anu.edu.au/" },
        { college: "Leiden University", location: "Netherlands", website: "https://www.universiteitleiden.nl/en" },
        { college: "University of Copenhagen", location: "Denmark", website: "https://www.ku.dk/english/" },
    ];

    const entranceExams = [
        {
            college: "CUET (UG)",
            date: "Application - Feb-March, Examination - May-June",
            elements: "Language, Domain Specific Subjects (History), General Awareness",
            website: "https://cuet.samarth.ac.in/",
        },
        {
            college: "Jawaharlal Nehru University Entrance Exam",
            date: "May",
            elements: "General Awareness, Reasoning, History Specific",
            website: "https://www.jnu.ac.in/",
        },
        {
            college: "Delhi University Entrance Test",
            date: "June",
            elements: "History, General Knowledge, Reasoning",
            website: "https://www.du.ac.in/",
        },
        {
            college: "Banaras Hindu University UET",
            date: "May-June",
            elements: "History, Mental Ability, General Knowledge",
            website: "https://www.bhu.ac.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Historian",
            description: "Historians research, analyze, and interpret past events, societies, and civilizations. They examine historical documents, artifacts, and other sources to understand and explain historical developments. Historians may specialize in specific time periods, regions, or themes, and often publish their findings in books, articles, or academic papers."
        },
        {
            role: "Archaeologist",
            description: "Archaeologists study human history and prehistory through the excavation and analysis of material remains. They conduct fieldwork at archaeological sites, recover artifacts, and use scientific techniques to date and interpret findings. Archaeologists contribute to our understanding of ancient cultures, technologies, and social structures."
        },
        {
            role: "Museum Curator",
            description: "Museum curators oversee collections of artifacts and historical objects. They research, catalog, and preserve items, develop exhibitions, and create educational programs. Curators often specialize in specific types of collections or historical periods and play a key role in making history accessible to the public."
        },
        {
            role: "Archivist",
            description: "Archivists appraise, preserve, and provide access to historically valuable documents and records. They organize archival materials, create finding aids, and assist researchers in locating relevant information. Archivists work in libraries, museums, government agencies, and other institutions that maintain historical records."
        },
        {
            role: "Heritage Manager",
            description: "Heritage managers are responsible for the conservation and management of historical sites, buildings, and cultural landscapes. They develop conservation plans, coordinate restoration projects, and promote public engagement with heritage sites. Heritage managers work for government agencies, NGOs, or private organizations."
        },
        {
            role: "History Teacher",
            description: "History teachers educate students about historical events, civilizations, and developments. They develop lesson plans, create learning materials, and facilitate discussions about historical interpretations. History teachers may work in schools, colleges, or universities, and often conduct research in their area of specialization."
        },
        {
            role: "Cultural Resource Manager",
            description: "Cultural resource managers identify, evaluate, and protect archaeological and historical sites during development projects. They ensure compliance with heritage protection laws and regulations, conduct impact assessments, and develop mitigation strategies. Cultural resource managers often work for government agencies or consulting firms."
        },
        {
            role: "Historical Researcher",
            description: "Historical researchers conduct in-depth investigations into specific historical topics, events, or periods. They gather and analyze primary and secondary sources, interpret historical evidence, and present their findings in reports, publications, or presentations. Historical researchers may work for academic institutions, media organizations, or government agencies."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Heritage Conservation",
            description: "J&K has numerous historical sites, monuments, and archaeological remains that require conservation and management. Historians and archaeologists can work with government agencies and NGOs to preserve and restore these heritage sites, including Mughal gardens, temples, and Buddhist monasteries.",
            icon: "🏛️"
        },
        {
            title: "Cultural Tourism Development",
            description: "With J&K's rich historical and cultural heritage, there's growing demand for professionals to develop cultural tourism initiatives. History graduates can work on creating heritage trails, developing interpretive materials, and managing tourist experiences at historical sites.",
            icon: "🏞️"
        },
        {
            title: "Documentation of Oral History",
            description: "J&K has a rich tradition of oral history and folklore that needs systematic documentation. Historians can work on projects to record and preserve oral narratives, folk traditions, and historical memories of communities, especially in remote areas.",
            icon: "📚"
        },
        {
            title: "Archaeological Research",
            description: "J&K has numerous unexplored archaeological sites that offer research opportunities. Archaeologists can work with institutions like the Archaeological Survey of India to conduct excavations, surveys, and research projects that uncover the region's ancient past.",
            icon: "🔍"
        },
        {
            title: "Museum and Archive Development",
            description: "There's growing investment in museums and archives in J&K to preserve and showcase the region's cultural heritage. History graduates can find opportunities in curating collections, developing exhibitions, and managing archival materials in these institutions.",
            icon: "🏺"
        },
        {
            title: "Academic Positions",
            description: "Universities and colleges in J&K are expanding their history and archaeology departments. There are teaching and research opportunities for qualified professionals to contribute to higher education and research in the region.",
            icon: "🎓"
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
        <div className="font-sans bg-gradient-to-br from-amber-50 to-stone-50 min-h-screen">
            {/* Header - Sticky */}
            

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-20"></div>

            {/* Banner */}
            <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-stone-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            {/* Breadcrumb */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Arts & Humanities &gt; History & Archaeology</div>
                {/* Dropdown */}
                <div className="relative">
                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        defaultValue=""
                        onChange={handleCareerChange}
                    >
                        <option value="" disabled>
                            Choose another Career
                        </option>
                        <option value="/arts">Arts</option>
                        <option value="/fine-arts">Fine Arts</option>
                        <option value="/performing-arts">Performing Arts</option>
                        <option value="/literature">Literature & Languages</option>
                        <option value="/history">History & Archaeology</option>
                        <option value="/philosophy">Philosophy</option>
                        <option value="/sociology">Sociology & Anthropology</option>
                    </select>
                </div>
            </div>

            <div className="flex px-8 py-8 gap-8 max-w-7xl mx-auto">
                {/* Sidebar */}
                <aside className="w-1/4 pr-6">
                    <div className="sticky top-24 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        <ul className="space-y-1 p-2">
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(summaryRef, "summary")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-amber-700"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(opportunitiesRef, "opportunities")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-amber-700"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-amber-700"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(careerPathRef, "careerPath")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-amber-700"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-amber-700"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-amber-700"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-amber-700"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(workDescriptionRef, "workDescription")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-amber-700"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-amber-700 to-stone-700 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(prosConsRef, "prosCons")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-amber-700"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>
                        {/* Demo Form */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-stone-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in History & Archaeology?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                            />
                            <button className="w-full bg-gradient-to-r from-amber-600 to-stone-600 hover:from-amber-700 hover:to-stone-700 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">Take Free Demo</button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-3/4">
                    {/* Summary Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={summaryRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-stone-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">History & Archaeology</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    History & Archaeology is a field of study that explores human past through the examination of written records, material remains, and cultural artifacts. It combines the analysis of historical documents with the scientific investigation of archaeological sites to reconstruct and understand past societies, cultures, and civilizations.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    A degree in History & Archaeology develops critical thinking, research skills, and cultural awareness. Students learn to analyze evidence, construct arguments, and interpret the past in its context. This field prepares graduates for careers in academia, heritage management, museums, archives, and various roles that require historical knowledge and analytical skills.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-stone-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="./41E-Historian.png" alt="History & Archaeology" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in History & Archaeology</span>
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
                                <div key={idx} className="bg-gradient-to-br from-amber-50 to-stone-50 p-6 rounded-xl border border-amber-100 hover:shadow-md transition-all duration-300">
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
                        <div className="mt-8 bg-gradient-to-r from-amber-50 to-stone-50 p-6 rounded-xl border border-amber-100">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                                <span className="text-amber-600">🌟</span>
                                <span>Key Benefits for J&K History & Archaeology Professionals</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Rich historical heritage spanning multiple civilizations and cultures</li>
                                <li>Government initiatives to preserve and promote historical sites</li>
                                <li>Growing tourism industry creating demand for heritage professionals</li>
                                <li>Unique opportunities to document and study underexplored historical periods</li>
                                <li>Increasing investment in museums and cultural institutions</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in History & Archaeology</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-stone-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Humanities preferred)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BA in History/Archaeology for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MA in History/Archaeology for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">MPhil/PhD in History/Archaeology or specialization</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Diploma/Certificate in Archaeology/Heritage Management for 1-2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Advanced Diploma or specialization courses</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Professional practice or further specialization</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Important Facts */}
                        <div className="mt-8 bg-gradient-to-r from-amber-50 to-stone-50 p-6 rounded-lg border border-amber-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-amber-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Some archaeology positions may require fieldwork experience and physical fitness</li>
                                <li>Knowledge of at least one classical language (Latin, Greek, Sanskrit) can be beneficial</li>
                                <li>Many institutions prefer candidates with research experience or publications</li>
                                <li>Internships at museums, archives, or archaeological sites can strengthen applications</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top History & Archaeology Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-stone-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesIndia.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-amber-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-amber-700 underline hover:text-amber-900 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-amber-600 to-stone-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                        <p className="mb-6 text-gray-700 text-lg">Top History & Archaeology Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-stone-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesWorld.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-amber-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-amber-700 underline hover:text-amber-900 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-amber-600 to-stone-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                            <span className="text-amber-600">🎓</span>
                            <span>Undergraduate</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-stone-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Important Elements</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entranceExams.map((exam, idx) => (
                                        <tr key={idx} className="hover:bg-amber-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{exam.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.date}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.elements}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={exam.website} target="_blank" rel="noreferrer" className="text-amber-700 underline hover:text-amber-900 transition-colors">
                                                    {exam.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(exam.website)}
                                                    className="text-xs bg-gradient-to-r from-amber-600 to-stone-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Research and analyze historical documents, artifacts, and archaeological sites</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Conduct fieldwork at archaeological sites, including excavation and survey</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Preserve, catalog, and interpret historical artifacts and documents</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Develop exhibitions, educational programs, and publications based on historical research</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Teach history and archaeology concepts to students in educational settings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Collaborate with other historians, archaeologists, and professionals in related fields</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Apply scientific techniques and methods to date and analyze artifacts</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Write research papers, books, articles, and reports on historical topics</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Advise on heritage conservation and management of historical sites</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-600 mr-2">•</span>
                                <span>Stay updated on current research, methodologies, and ethical standards in the field</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in History & Archaeology</span>
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
                                        <span>Opportunity to discover and preserve cultural heritage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Intellectual fulfillment from research and discovery</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Diverse career paths in academia, museums, and heritage management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Contribution to public understanding of history and culture</span>
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
                                        <span>Limited job opportunities in specialized areas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Fieldwork can be physically demanding and in remote locations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Often requires advanced degrees for research positions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Competitive funding for research projects</span>
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