"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ManagementPage() {
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
        { college: "Indian Institute of Management (IIM) Ahmedabad", location: "Ahmedabad", website: "https://www.iima.ac.in/" },
        { college: "Indian Institute of Management (IIM) Bangalore", location: "Bangalore", website: "https://www.iimb.ac.in/" },
        { college: "Indian Institute of Management (IIM) Calcutta", location: "Kolkata", website: "https://www.iimcal.ac.in/" },
        { college: "Faculty of Management Studies, Delhi University", location: "Delhi", website: "https://fms.edu/" },
        { college: "Indian School of Business (ISB)", location: "Hyderabad", website: "https://www.isb.edu/" },
        { college: "XLRI - Xavier School of Management", location: "Jamshedpur", website: "https://www.xlri.ac.in/" },
        { college: "SP Jain Institute of Management and Research", location: "Mumbai", website: "https://www.spjimr.org/" },
        { college: "Management Development Institute (MDI)", location: "Gurgaon", website: "https://www.mdi.ac.in/" },
        { college: "National Institute of Industrial Engineering (NITIE)", location: "Mumbai", website: "https://www.nitie.edu/" },
    ];

    const institutesWorld = [
        { college: "Harvard Business School", location: "United States", website: "https://www.hbs.edu/" },
        { college: "Stanford Graduate School of Business", location: "United States", website: "https://www.gsb.stanford.edu/" },
        { college: "INSEAD", location: "France/Singapore", website: "https://www.insead.edu/" },
        { college: "London Business School", location: "United Kingdom", website: "https://www.london.edu/" },
        { college: "Wharton School of the University of Pennsylvania", location: "United States", website: "https://www.wharton.upenn.edu/" },
        { college: "MIT Sloan School of Management", location: "United States", website: "https://mitsloan.mit.edu/" },
        { college: "University of Chicago Booth School of Business", location: "United States", website: "https://www.chicagobooth.edu/" },
        { college: "IE Business School", location: "Spain", website: "https://www.ie.edu/business-school/" },
        { college: "CEIBS", location: "China", website: "https://www.ceibs.edu/" },
    ];

    const entranceExams = [
        {
            college: "CAT (Common Admission Test)",
            date: "November",
            elements: "Verbal Ability and Reading Comprehension, Data Interpretation and Logical Reasoning, Quantitative Ability",
            website: "https://iimcat.ac.in/",
        },
        {
            college: "XAT (Xavier Aptitude Test)",
            date: "January",
            elements: "Verbal and Logical Ability, Decision Making, Quantitative Ability and Data Interpretation, General Knowledge",
            website: "https://xatonline.in/",
        },
        {
            college: "MAT (Management Aptitude Test)",
            date: "February, May, September, December",
            elements: "Language Comprehension, Mathematical Skills, Data Analysis and Sufficiency, Intelligence and Critical Reasoning, Indian and Global Environment",
            website: "https://mat.aima.in/",
        },
        {
            college: "CMAT (Common Management Admission Test)",
            date: "January",
            elements: "Quantitative Techniques and Data Interpretation, Logical Reasoning, Language Comprehension, General Awareness, Innovation and Entrepreneurship",
            website: "https://cmat.nta.nic.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Business Manager",
            description: "Business Managers oversee operations and employees within a company or department. They develop business strategies, set goals, and ensure that teams meet objectives. Business Managers are responsible for budgeting, planning, and implementing policies to improve efficiency and productivity. They play a crucial role in driving business growth and profitability."
        },
        {
            role: "Marketing Manager",
            description: "Marketing Managers develop and implement marketing strategies to promote products or services. They conduct market research, identify target audiences, and plan advertising campaigns. Marketing Managers work to increase brand awareness, generate leads, and drive sales. They collaborate with sales teams and creative professionals to achieve marketing objectives."
        },
        {
            role: "Financial Manager",
            description: "Financial Managers oversee the financial health of an organization. They produce financial reports, direct investment activities, and develop strategies for long-term financial goals. Financial Managers analyze market trends, manage budgets, and make investment decisions to maximize profits and minimize risks."
        },
        {
            role: "Human Resources Manager",
            description: "Human Resources Managers oversee the recruiting, interviewing, and hiring of new staff. They serve as a link between management and employees, handling issues like staffing, training, compensation, benefits, and employee relations. HR Managers develop policies and procedures to ensure a positive work environment and compliance with labor laws."
        },
        {
            role: "Operations Manager",
            description: "Operations Managers are responsible for the production of goods and/or services within an organization. They manage the process of converting inputs into outputs efficiently. Operations Managers oversee supply chain management, quality control, and process improvement to ensure that products/services meet customer requirements and are delivered on time."
        },
        {
            role: "Management Consultant",
            description: "Management Consultants advise organizations on how to improve performance and grow their business. They analyze existing problems and develop plans for improvement. Management Consultants work across various industries, providing expertise in areas like strategy, operations, finance, and human resources to help clients overcome challenges and achieve goals."
        },
        {
            role: "Project Manager",
            description: "Project Managers are responsible for planning, executing, and closing projects. They define project scope, goals, and deliverables, and assemble project teams. Project Managers monitor progress, manage resources, and ensure that projects are completed on time, within budget, and meet quality standards."
        },
        {
            role: "Entrepreneur",
            description: "Entrepreneurs identify business opportunities and develop innovative products or services to meet market needs. They take on financial risks to create and grow new business ventures. Entrepreneurs are responsible for all aspects of their business, from planning and funding to marketing and operations, driving economic growth and job creation."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Tourism Business Management",
            description: "J&K's thriving tourism industry offers numerous opportunities for business managers in hotels, travel agencies, and tour operations. These roles involve managing operations, marketing tourism services, and developing strategies to enhance visitor experiences while promoting sustainable tourism practices.",
            icon: "🏔️"
        },
        {
            title: "Agricultural Business Management",
            description: "Agriculture is a key sector in J&K, creating demand for business managers who can optimize agricultural supply chains, improve marketing of agricultural products, and develop strategies for agribusiness growth. These roles help farmers increase profitability and access new markets.",
            icon: "🌾"
        },
        {
            title: "Handicraft Industry Management",
            description: "J&K is renowned for its handicrafts, providing opportunities for business managers to help artisans market their products, manage production, and develop sustainable business models. These roles preserve traditional crafts while ensuring economic viability for artisans.",
            icon: "🧶"
        },
        {
            title: "Startup Ecosystem Development",
            description: "J&K's growing startup ecosystem requires business managers to support new ventures, provide mentorship, and develop incubation centers. These roles help entrepreneurs navigate challenges, access funding, and scale their businesses in the region.",
            icon: "🚀"
        },
        {
            title: "Government Project Management",
            description: "The J&K government implements various development projects that require skilled project managers to oversee planning, execution, and monitoring. These roles ensure that projects are completed efficiently and deliver intended benefits to the community.",
            icon: "🏛️"
        },
        {
            title: "Educational Institution Administration",
            description: "Educational institutions in J&K require business managers for administrative roles, resource management, and strategic planning. These positions help educational institutions improve efficiency, quality of education, and student outcomes.",
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
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Commerce &gt; Business Management</div>
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
                        <option value="/commerce">Commerce</option>
                        <option value="/chartered-accountancy">Chartered Accountancy (CA)</option>
                        <option value="/company-secretary">Company Secretary (CS)</option>
                        <option value="/cost-management-accountancy">Cost & Management Accountancy (CMA)</option>
                        <option value="/banking-insurance">Banking & Insurance</option>
                        <option value="/business-management">Business Management</option>
                        <option value="/marketing-sales">Marketing & Sales</option>
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
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Business Management?</h3>
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
                            <h2 className="text-3xl font-bold text-gray-800">Business Management</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Business Management is a versatile field that focuses on planning, organizing, leading, and controlling resources within an organization to achieve specific goals. It encompasses various aspects of running a business, including operations, marketing, finance, human resources, and strategic planning. Business Management professionals are equipped with the skills to make informed decisions, solve complex problems, and drive organizational success.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    A career in Business Management offers diverse opportunities across industries, from startups to multinational corporations. With the rapidly changing business landscape, there is growing demand for skilled managers who can navigate challenges, innovate, and lead teams effectively. Business Management education provides a strong foundation in leadership, critical thinking, and strategic planning, making it one of the most sought-after career paths in the modern economy.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/business-management.png" alt="Business Management" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Business Management</span>
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
                                <li>Government initiatives promoting entrepreneurship and business development</li>
                                <li>Special funding schemes and incentives for local businesses</li>
                                <li>Opportunities to contribute to the region's economic transformation</li>
                                <li>Emerging sectors requiring business management expertise</li>
                                <li>Lower competition compared to metropolitan areas</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Business Management</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Undergraduate</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Postgraduate</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Career Progression</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Commerce Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BBA/B.Com for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MBA/PGDM for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Entry-level Manager → Middle Management → Senior Management → Leadership Roles</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Bachelor's degree in any discipline for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MBA/PGDM for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Entry-level Manager → Middle Management → Senior Management → Leadership Roles</td>
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
                                <li>Work experience of 2-3 years is often preferred for top MBA programs</li>
                                <li>Specializations available in Marketing, Finance, HR, Operations, IT, and more</li>
                                <li>Internships during studies provide valuable industry exposure</li>
                                <li>Leadership skills, communication abilities, and analytical thinking are essential</li>
                                <li>Networking plays a crucial role in career advancement in management</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Business Management Institutes in India</p>
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
                        <p className="mb-6 text-gray-700 text-lg">Top International Business Schools</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Institution</th>
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
                            <span>Management Entrance Exams</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Exam</th>
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
                                <span>Develop and implement business strategies and plans</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Lead and motivate teams to achieve organizational goals</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Analyze market trends and competition to identify business opportunities</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Manage budgets, resources, and operational processes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Make data-driven decisions to improve business performance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Negotiate contracts and agreements with stakeholders</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Monitor industry trends and adapt business strategies accordingly</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Ensure compliance with regulations and ethical standards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Develop and maintain relationships with clients, partners, and investors</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Identify and resolve business challenges and problems</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Business Management</span>
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
                                        <span>Diverse career opportunities across industries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>High earning potential and growth prospects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Leadership opportunities and decision-making authority</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunities for innovation and creativity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Transferable skills applicable to various roles</span>
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
                                        <span>High stress levels and responsibility</span>
                                    </li>
                            <li className="flex items-start">
                                <span className="text-rose-500 mr-2">•</span>
                                <span>Long working hours, especially in senior positions</span>
                            </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High competition for top positions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Pressure to meet targets and deadlines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Need to continuously update skills and knowledge</span>
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