"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CMAPage() {
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
        { college: "The Institute of Cost Accountants of India (ICMAI)", location: "Kolkata", website: "https://www.icmai.in/" },
        { college: "St. Xavier's College", location: "Mumbai", website: "https://www.xaviers.edu/main/" },
        { college: "Narsee Monjee College of Commerce and Economics", location: "Mumbai", website: "https://nm.edu.in/" },
        { college: "Shri Ram College of Commerce (SRCC)", location: "Delhi", website: "https://www.srcc.edu/" },
        { college: "Loyola College", location: "Chennai", website: "http://www.loyolacollege.edu/" },
        { college: "Christ University", location: "Bangalore", website: "http://www.christuniversity.in/" },
        { college: "Hansraj College", location: "Delhi", website: "https://hansrajcollege.ac.in/" },
        { college: "Madras Christian College", location: "Chennai", website: "https://www.mcc.edu.in/" },
        { college: "Symbiosis College of Arts and Commerce", location: "Pune", website: "https://www.symbiosisarts.edu.in/" },
    ];

    const institutesWorld = [
        { college: "Institute of Management Accountants (IMA)", location: "United States", website: "https://www.imanet.org/" },
        { college: "Chartered Institute of Management Accountants (CIMA)", location: "United Kingdom", website: "https://www.cimaglobal.com/" },
        { college: "CPA Australia", location: "Australia", website: "https://www.cpaaustralia.com.au/" },
        { college: "Canadian Institute of Management Accountants", location: "Canada", website: "https://cma-canada.org/" },
        { college: "Institute of Certified Management Accountants (ICMA)", location: "Australia", website: "https://www.cmaworld.com/" },
        { college: "Association of International Certified Professional Accountants", location: "United States", website: "https://www.aicpa-cima.com/" },
        { college: "South African Institute of Professional Accountants", location: "South Africa", website: "https://www.saipa.co.za/" },
        { college: "Institute of Cost and Management Accountants of Pakistan (ICMAP)", location: "Pakistan", website: "https://www.icmap.com.pk/" },
        { college: "The Institute of Certified Management Accountants of Sri Lanka", location: "Sri Lanka", website: "https://www.cmasrilanka.com/" },
    ];

    const entranceExams = [
        {
            college: "CMA Foundation",
            date: "June/December",
            elements: "Fundamentals of Economics and Management, Fundamentals of Accounting, Fundamentals of Laws and Ethics, Fundamentals of Business Mathematics and Statistics",
            website: "https://www.icmai.in/",
        },
        {
            college: "CMA Intermediate",
            date: "June/December",
            elements: "Financial Accounting, Laws, Ethics and Governance, Direct Taxation, Cost Accounting, Operations Management, Strategic Management, Cost and Management Accounting, Financial Management, Corporate Accounting and Auditing",
            website: "https://www.icmai.in/",
        },
        {
            college: "CMA Final",
            date: "June/December",
            elements: "Corporate Laws and Compliance, Strategic Financial Management, Strategic Cost Management - Decision Making, Direct Tax Laws and International Taxation, Indirect Tax Laws, Strategic Performance Management, Corporate Financial Reporting, Elective Papers",
            website: "https://www.icmai.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Cost Accountant",
            description: "Cost Accountants analyze business costs to help improve financial efficiency. They collect and analyze financial data to determine the costs of production and processes. Cost Accountants play a crucial role in budgeting, cost control, and identifying opportunities for cost reduction and process improvement."
        },
        {
            role: "Management Accountant",
            description: "Management Accountants focus on providing financial information and analysis to support internal decision-making. They prepare financial reports, analyze business performance, and develop strategies to improve profitability. Management Accountants work closely with management teams to drive business growth and efficiency."
        },
        {
            role: "Financial Analyst",
            description: "Financial Analysts evaluate investment opportunities, analyze financial data, and provide recommendations to businesses and individuals. They assess financial statements, market trends, and economic conditions to help make informed investment decisions. Financial Analysts play a key role in financial planning and risk management."
        },
        {
            role: "Chief Financial Officer (CFO)",
            description: "CFOs are senior executives responsible for managing the financial actions of an organization. They oversee financial planning, budgeting, reporting, and investment strategies. CFOs provide strategic guidance to help organizations achieve their financial objectives and drive sustainable growth."
        },
        {
            role: "Financial Controller",
            description: "Financial Controllers oversee accounting operations within organizations. They manage financial reporting, ensure compliance with accounting standards, and supervise accounting staff. Financial Controllers play a critical role in maintaining the integrity of financial information and supporting strategic decision-making."
        },
        {
            role: "Risk Manager",
            description: "Risk Managers identify, assess, and mitigate financial risks that organizations face. They develop risk management strategies, implement internal controls, and monitor risk exposure. Risk Managers help organizations navigate uncertainties and protect their financial interests."
        },
        {
            role: "Budget Analyst",
            description: "Budget Analysts help organizations plan and manage their finances by developing, analyzing, and monitoring budgets. They review budget proposals, assess funding needs, and ensure efficient allocation of resources. Budget Analysts play a vital role in financial planning and fiscal responsibility."
        },
        {
            role: "Business Consultant",
            description: "Business Consultants provide expert advice to organizations on improving financial performance and operational efficiency. They analyze business processes, identify opportunities for improvement, and develop strategies to enhance profitability. Business Consultants with CMA qualifications bring valuable financial expertise to their advisory roles."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Government Financial Management",
            description: "The J&K government requires Cost Accountants for effective financial management of public funds. These roles involve budgeting, cost control, and financial analysis for various government departments and projects.",
            icon: "🏛️"
        },
        {
            title: "Tourism Industry Cost Management",
            description: "With tourism being a major industry in J&K, there's demand for cost management professionals in hotels, travel agencies, and tourism businesses. These roles involve cost optimization, budgeting, and financial planning for tourism enterprises.",
            icon: "🏔️"
        },
        {
            title: "Agriculture & Horticulture Cost Analysis",
            description: "Agriculture and horticulture are key sectors in J&K. Cost Accountants are needed to analyze production costs, optimize resource allocation, and improve profitability for farmers, cooperatives, and agribusinesses.",
            icon: "🌾"
        },
        {
            title: "Startup Financial Advisory",
            description: "J&K's growing startup ecosystem requires financial expertise for business planning, cost management, and fundraising. CMAs can provide valuable guidance to new ventures and help them establish sound financial practices.",
            icon: "🚀"
        },
        {
            title: "Educational Institutions",
            description: "Universities and colleges in J&K require financial management professionals for budgeting, cost control, and financial planning. There are also teaching opportunities in cost and management accounting.",
            icon: "🎓"
        },
        {
            title: "Handicraft Industry Cost Optimization",
            description: "J&K is known for its handicraft industry. Cost Accountants can help artisans and businesses optimize production costs, improve pricing strategies, and enhance profitability in this traditional sector.",
            icon: "🧶"
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
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Commerce &gt; Cost & Management Accountancy</div>
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
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Cost & Management Accountancy?</h3>
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
                            <h2 className="text-3xl font-bold text-gray-800">Cost & Management Accountancy (CMA)</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Cost & Management Accountancy is a professional qualification that focuses on cost accounting, management accounting, and financial management. In India, Cost Accountants are regulated by the Institute of Cost Accountants of India (ICMAI), which is a statutory body established under an Act of Parliament.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    The CMA qualification involves three levels: CMA Foundation, CMA Intermediate, and CMA Final, along with mandatory practical training. Cost Accountants play a crucial role in cost control, financial planning, budgeting, and decision-making processes within organizations. They help businesses optimize costs, improve efficiency, and enhance profitability.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/cma-profession.png" alt="Cost & Management Accountancy" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Cost & Management Accountancy</span>
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
                                <li>Growing demand for cost management expertise in government projects</li>
                                <li>Opportunities to contribute to the region's economic development</li>
                                <li>Special focus on traditional industries like handicrafts and agriculture</li>
                                <li>Government incentives for financial professionals in J&K</li>
                                <li>Potential for work-life balance in the scenic region</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Cost & Management Accountancy</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Foundation Course</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Intermediate Course</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Final Course</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />After Class XII</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Register for CMA Foundation (6 months course)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Clear CMA Foundation and register for CMA Intermediate (10 months course)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Complete practical training and clear CMA Final</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />After Graduation</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Exempt from Foundation (direct entry to Intermediate)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Register for CMA Intermediate (10 months course)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Complete practical training and clear CMA Final</td>
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
                                <li>Minimum eligibility for Foundation: Class 12th or equivalent</li>
                                <li>Minimum eligibility for direct entry to Intermediate: Graduation in any discipline except Fine Arts</li>
                                <li>Practical training is mandatory under a practicing CMA or company</li>
                                <li>ICMAI conducts exams twice a year (June and December)</li>
                                <li>Overall duration to complete CMA: 3-4 years after Class XII</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Cost & Management Accountancy Institutes in India</p>
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
                        <p className="mb-6 text-gray-700 text-lg">Top International Cost & Management Accountancy Bodies</p>
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
                            <span>CMA Course Levels</span>
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
                                <span>Analyze business costs and prepare cost reports</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Develop cost accounting systems and procedures</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Prepare budgets and monitor financial performance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Conduct variance analysis and explain deviations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Provide financial information for decision-making</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Design and implement internal control systems</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Advise on pricing strategies and cost optimization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Prepare financial statements and management reports</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Conduct financial audits and cost audits</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Assist in strategic planning and business valuation</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Cost & Management Accountancy</span>
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
                                        <span>Specialized expertise in cost management and financial planning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>High demand across industries for cost optimization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Diverse career opportunities in various sectors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunity for independent practice and consulting</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Strategic role in business decision-making</span>
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
                                        <span>Challenging qualification process with multiple levels</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High pressure during budgeting and reporting periods</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Need to continuously update knowledge with changing regulations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Limited awareness about the profession among general public</span>
                                    </li>
                            <li className="flex items-start">
                                <span className="text-rose-500 mr-2">•</span>
                                <span>Technical nature of the work requires strong analytical skills</span>
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