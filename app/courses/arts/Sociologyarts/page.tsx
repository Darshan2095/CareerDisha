"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SociologyArtsPage() {
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
        { college: "Delhi School of Economics", location: "Delhi", website: "https://www.econdse.org/" },
        { college: "Jawaharlal Nehru University", location: "Delhi", website: "https://www.jnu.ac.in/" },
        { college: "University of Delhi", location: "Delhi", website: "https://www.du.ac.in/" },
        { college: "Tata Institute of Social Sciences", location: "Mumbai", website: "https://www.tiss.edu/" },
        { college: "Banaras Hindu University", location: "Varanasi", website: "https://www.bhu.ac.in/" },
        { college: "University of Calcutta", location: "Kolkata", website: "https://www.caluniv.ac.in/" },
        { college: "Osmania University", location: "Hyderabad", website: "https://www.osmania.ac.in/" },
        { college: "Madras Institute of Development Studies", location: "Chennai", website: "https://mids.ac.in/" },
        { college: "Savitribai Phule Pune University", location: "Pune", website: "https://www.unipune.ac.in/" },
    ];

    const institutesWorld = [
        { college: "University of Oxford", location: "United Kingdom", website: "https://www.ox.ac.uk/" },
        { college: "Harvard University", location: "United States", website: "https://www.harvard.edu/" },
        { college: "University of Cambridge", location: "United Kingdom", website: "https://www.cam.ac.uk/" },
        { college: "London School of Economics", location: "United Kingdom", website: "https://www.lse.ac.uk/" },
        { college: "University of Chicago", location: "United States", website: "https://www.uchicago.edu/" },
        { college: "University of California, Berkeley", location: "United States", website: "https://www.berkeley.edu/" },
        { college: "Australian National University", location: "Australia", website: "https://www.anu.edu.au/" },
        { college: "University of Toronto", location: "Canada", website: "https://www.utoronto.ca/" },
        { college: "University of Amsterdam", location: "Netherlands", website: "https://www.uva.nl/en" },
    ];

    const entranceExams = [
        {
            college: "CUET (UG)",
            date: "Application - Feb-March, Examination - May-June",
            elements: "Language, Domain Specific Subjects (Sociology/Anthropology), General Awareness",
            website: "https://cuet.samarth.ac.in/",
        },
        {
            college: "Jawaharlal Nehru University Entrance Exam",
            date: "May",
            elements: "General Awareness, Reasoning, Sociology/Anthropology Specific",
            website: "https://www.jnu.ac.in/",
        },
        {
            college: "TISS NET",
            date: "February",
            elements: "General Awareness, English Proficiency, Logical Reasoning, Social Sensitivity",
            website: "https://www.tiss.edu/",
        },
        {
            college: "Delhi University Entrance Test",
            date: "June",
            elements: "Sociology/Anthropology, General Knowledge, Reasoning",
            website: "https://www.du.ac.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Sociologist",
            description: "Sociologists study human society and social behavior by examining groups, cultures, organizations, and social institutions. They conduct research, analyze data, and develop theories to explain social phenomena. Sociologists work in academia, government agencies, research organizations, and private sector firms."
        },
        {
            role: "Anthropologist",
            description: "Anthropologists study human beings and their ancestors through time and space. They examine biological, archaeological, linguistic, and cultural aspects of human life. Anthropologists conduct fieldwork, analyze cultural practices, and contribute to our understanding of human diversity and evolution."
        },
        {
            role: "Social Worker",
            description: "Social workers help individuals, families, and communities cope with challenges in their lives. They assess client needs, develop plans to improve well-being, and connect people with resources. Social workers may specialize in areas such as child welfare, healthcare, mental health, or community development."
        },
        {
            role: "Policy Analyst",
            description: "Policy analysts research, analyze, and evaluate policies and their impacts on society. They work for government agencies, think tanks, non-profits, and private organizations. Policy analysts use sociological and anthropological insights to develop evidence-based policy recommendations."
        },
        {
            role: "Market Research Analyst",
            description: "Market research analysts study market conditions to examine potential sales of products or services. They use sociological concepts to understand consumer behavior, preferences, and trends. Market researchers help companies make informed business decisions based on social data."
        },
        {
            role: "Human Resources Specialist",
            description: "Human resources specialists manage recruitment, employee relations, and organizational culture. They apply sociological principles to understand group dynamics, organizational behavior, and diversity issues. HR specialists help create inclusive and productive work environments."
        },
        {
            role: "Community Development Officer",
            description: "Community development officers work to improve the social, economic, and environmental well-being of communities. They assess community needs, develop programs, and mobilize resources. These professionals apply anthropological methods to understand local contexts and facilitate community engagement."
        },
        {
            role: "Cultural Resource Manager",
            description: "Cultural resource managers identify, preserve, and manage cultural heritage sites and artifacts. They work with government agencies, museums, and development projects. Cultural resource managers use anthropological expertise to balance preservation needs with development goals."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Conflict Resolution Research",
            description: "J&K's unique social and political context offers opportunities for sociologists and anthropologists to study conflict dynamics and peace-building processes. Researchers can work with academic institutions, NGOs, and international organizations to document experiences and develop conflict resolution frameworks.",
            icon: "🕊️"
        },
        {
            title: "Cultural Heritage Documentation",
            description: "J&K has rich cultural diversity with distinct traditions, languages, and customs. Anthropologists can work on projects to document and preserve intangible cultural heritage, including folk traditions, oral histories, and indigenous knowledge systems of various communities.",
            icon: "🏺"
        },
        {
            title: "Development Sector Work",
            description: "Numerous NGOs and development agencies operate in J&K, focusing on education, healthcare, livelihoods, and governance. Sociology and anthropology graduates can work as program officers, researchers, and community mobilizers to design and implement development initiatives.",
            icon: "🤝"
        },
        {
            title: "Tourism Impact Studies",
            description: "Tourism is a major industry in J&K with significant social and cultural impacts. Sociologists and anthropologists can conduct research on tourism's effects on local communities, cultural commodification, and sustainable tourism development for government and private sector clients.",
            icon: "🏞️"
        },
        {
            title: "Gender Studies Initiatives",
            description: "J&K has unique gender dynamics shaped by cultural traditions and conflict situations. Researchers can work on gender-focused projects addressing women's empowerment, gender-based violence, and changing gender roles in collaboration with women's organizations and research institutions.",
            icon: "♀️"
        },
        {
            title: "Policy Advisory Roles",
            description: "As J&K undergoes political and administrative changes, there's need for evidence-based policy development. Sociology and anthropology graduates can work with government agencies and think tanks to provide social analysis and policy recommendations on various social issues.",
            icon: "📋"
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

        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-section-id');
                    if (id) setActiveSection(id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.entries(sectionRefs).forEach(([id, ref]) => {
            if (ref.current) {
                ref.current.setAttribute('data-section-id', id);
                observer.observe(ref.current);
            }
        });

        return () => { observer.disconnect(); };
    }, []);

    return (
        <div className="font-sans bg-gradient-to-br from-rose-50 to-orange-50 min-h-screen">
            {/* Header - Sticky */}
           

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-20"></div>

            {/* Banner */}
            <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 to-orange-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            {/* Breadcrumb */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Arts & Humanities &gt; Sociology & Anthropology</div>
                {/* Dropdown */}
                <div className="relative">
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500" defaultValue="" onChange={handleCareerChange}>
                        <option value="" disabled>Choose another Career</option>
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
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(summaryRef, "summary")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-rose-600"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(opportunitiesRef, "opportunities")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-rose-600"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-rose-600"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(careerPathRef, "careerPath")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-rose-600"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-rose-600"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-rose-600"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-rose-600"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(workDescriptionRef, "workDescription")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-rose-600"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md" : "hover:bg-rose-50"}`} onClick={() => scrollToSection(prosConsRef, "prosCons")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-rose-600"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>
                        {/* Demo Form */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-rose-50 to-orange-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Sociology & Anthropology?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input type="email" placeholder="Your email address" className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all" />
                            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">Take Free Demo</button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-3/4">
                    {/* Summary Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={summaryRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-rose-500 to-orange-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Sociology & Anthropology</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">Sociology and Anthropology are complementary disciplines that study human societies and cultures. Sociology focuses on social behavior, social structures, and social change within contemporary societies, while Anthropology examines human societies across time and space, with particular attention to cultural diversity and human evolution.</p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">A degree in Sociology & Anthropology develops critical thinking, research skills, and cross-cultural understanding. Students learn qualitative and quantitative research methods, theoretical frameworks, and analytical skills to examine social issues. This field prepares graduates for careers in research, social services, policy development, and various roles that require understanding human behavior and social systems.</p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/41C-Sociology.png" alt="Sociology & Anthropology" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Sociology & Anthropology</span>
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
                                <div key={idx} className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-xl border border-rose-100 hover:shadow-md transition-all duration-300">
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
                                <span>Key Benefits for J&K Sociology & Anthropology Professionals</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Unique social and cultural context for meaningful research and fieldwork</li>
                                <li>High demand for social research to inform development and policy</li>
                                <li>Opportunities to work with diverse communities and cultural groups</li>
                                <li>Growing NGO sector focused on social development initiatives</li>
                                <li>Chance to contribute to peace-building and reconciliation efforts</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Sociology & Anthropology</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-rose-50 to-orange-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-rose-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Humanities preferred)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BA in Sociology/Anthropology for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MA in Sociology/Anthropology for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">MPhil/PhD in Sociology/Anthropology or specialization</td>
                                    </tr>
                                    <tr className="hover:bg-rose-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BSW/BA Social Work for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MSW/MA Social Work for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Specialized certification or advanced practice</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Important Facts */}
                        <div className="mt-8 bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-lg border border-rose-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-rose-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Strong analytical and research skills are essential for success in this field</li>
                                <li>Fieldwork experience is highly valued and often required for advanced positions</li>
                                <li>Knowledge of research methods (both qualitative and quantitative) is crucial</li>
                                <li>Cross-cultural understanding and sensitivity are important attributes</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Sociology & Anthropology Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-rose-50 to-orange-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesIndia.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-rose-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-rose-600 underline hover:text-rose-800 transition-colors">{inst.website}</a>
                                                <button onClick={() => handleCopy(inst.website)} className="text-xs bg-gradient-to-r from-rose-600 to-orange-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300">{copied === inst.website ? "Copied!" : "Copy"}</button>
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
                        <p className="mb-6 text-gray-700 text-lg">Top Sociology & Anthropology Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-rose-50 to-orange-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesWorld.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-rose-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-rose-600 underline hover:text-rose-800 transition-colors">{inst.website}</a>
                                                <button onClick={() => handleCopy(inst.website)} className="text-xs bg-gradient-to-r from-rose-600 to-orange-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300">{copied === inst.website ? "Copied!" : "Copy"}</button>
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
                            <span className="text-rose-600">🎓</span>
                            <span>Undergraduate</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-rose-50 to-orange-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Important Elements</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entranceExams.map((exam, idx) => (
                                        <tr key={idx} className="hover:bg-rose-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{exam.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.date}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.elements}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={exam.website} target="_blank" rel="noreferrer" className="text-rose-600 underline hover:text-rose-800 transition-colors">{exam.website}</a>
                                                <button onClick={() => handleCopy(exam.website)} className="text-xs bg-gradient-to-r from-rose-600 to-orange-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300">{copied === exam.website ? "Copied!" : "Copy"}</button>
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
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Conduct research on social phenomena, cultural practices, and human behavior</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Design and implement research projects using qualitative and quantitative methods</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Collect and analyze data through surveys, interviews, observations, and ethnographic fieldwork</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Develop theories and frameworks to explain social patterns and cultural phenomena</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Write research papers, reports, and articles to communicate findings</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Teach sociology and anthropology concepts to students in educational settings</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Apply sociological and anthropological insights to address social problems</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Collaborate with communities, organizations, and policymakers to develop social interventions</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Advocate for social justice, human rights, and cultural preservation</span></li>
                            <li className="flex items-start"><span className="text-rose-600 mr-2">•</span><span>Stay updated on current social issues, research methodologies, and theoretical developments</span></li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Sociology & Anthropology</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2"><span className="text-green-600">✓</span><span>Pros</span></h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Deep understanding of human societies and cultural diversity</span></li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Opportunities to make meaningful social impact</span></li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Diverse career paths across multiple sectors</span></li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Strong research and analytical skills applicable to many fields</span></li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2"><span className="text-rose-600">✗</span><span>Cons</span></h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>Research positions can be highly competitive</span></li>
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>Fieldwork can be emotionally demanding and challenging</span></li>
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>May require advanced degrees for specialized roles</span></li>
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>Balancing objectivity with advocacy can be challenging</span></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}