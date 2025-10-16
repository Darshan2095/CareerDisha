"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CAPage() {
    const [copied, setCopied] = useState("");
    const [activeSection, setActiveSection] = useState("summary");
    // New states for comparison functionality
    const [showCompareModal, setShowCompareModal] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);
    const [selectedComparison, setSelectedComparison] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState("");

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

    // Comparison functionality
    const handleCompareClick = () => {
        setShowCompareModal(true);
    };

    const handleComparisonSelect = async (comparison) => {
        setSelectedComparison(comparison);
        setShowCompareModal(false);
        setShowChatModal(true);

        // Initialize chat with predefined prompt
        const initialPrompt = `Compare ${comparison} in terms of education requirements, career opportunities, salary potential, work-life balance, and job satisfaction. Please format your response with clear headings and bullet points for readability.`;
        setChatMessages([
            {
                text: initialPrompt,
                isUser: true
            }
        ]);

        // Make API call
        setIsLoading(true);
        try {
        const response = await fetch('/api/comparision', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: initialPrompt }),
            });

            let data;
            try {
                data = await response.json();
            } catch {
                data = null;
            }

            if (!response.ok) {
                const message = (data && (data.error || data.details)) || `Request failed (${response.status})`;
                throw new Error(message);
            }

            const aiText = (data && data.response) ? data.response : "Sorry, I couldn't generate a comparison right now.";

            setChatMessages(prev => [
                ...prev,
                {
                    text: aiText,
                    isUser: false
                }
            ]);
        } catch (error) {
            console.error('Error fetching comparison:', error);
            setChatMessages(prev => [
                ...prev,
                {
                    text: (error && error.message) ? `Error: ${error.message}` : "Sorry, I couldn't retrieve the comparison at this time. Please try again later.",
                    isUser: false
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        // Add user message
        setChatMessages(prev => [
            ...prev,
            {
                text: userInput,
                isUser: true
            }
        ]);

        const input = userInput;
        setUserInput("");
        setIsLoading(true);

        try {
        const response = await fetch('/api/comparision', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: input }),
            });

            let data;
            try {
                data = await response.json();
            } catch {
                data = null;
            }

            if (!response.ok) {
                const message = (data && (data.error || data.details)) || `Request failed (${response.status})`;
                throw new Error(message);
            }

            const aiText = (data && data.response) ? data.response : "Sorry, I couldn't generate a response right now.";

            setChatMessages(prev => [
                ...prev,
                {
                    text: aiText,
                    isUser: false
                }
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
            setChatMessages(prev => [
                ...prev,
                {
                    text: (error && error.message) ? `Error: ${error.message}` : "Sorry, I couldn't process your request. Please try again later.",
                    isUser: false
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseChat = () => {
        setShowChatModal(false);
        setChatMessages([]);
        setSelectedComparison("");
        setUserInput("");
    };

    // Function to format text for better readability
   const formatResponse = (text) => {
    if (!text || typeof text !== "string") return "";

    return text
        .replace(/###\s+(.+)/g, '<h3 class="font-bold text-lg mt-4 mb-2 text-blue-700">$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\*\s+(.+)$/gm, '<li class="ml-5 mb-1">• $1</li>')
        .replace(/\n\n/g, '</p><p class="mb-3">')
        .replace(/^(?!<[h|l])/gm, '<p class="mb-3">')
        .replace(/<p class="mb-3"><\/p>/g, '')
        .replace(/<p class="mb-3"><h3/g, '<h3')
        .replace(/<\/h3><\/p>/g, '</h3>')
        .replace(/<p class="mb-3"><li/g, '<li')
        .replace(/<\/li><\/p>/g, '</li>');
};


    const institutesIndia = [
        { college: "The Institute of Chartered Accountants of India (ICAI)", location: "New Delhi", website: "https://www.icai.org/" },
        { college: "Shri Ram College of Commerce (SRCC)", location: "Delhi", website: "https://www.srcc.edu/" },
        { college: "St. Xavier's College", location: "Mumbai", website: "https://www.xaviers.edu/main/" },
        { college: "Loyola College", location: "Chennai", website: "http://www.loyolacollege.edu/" },
        { college: "Christ University", location: "Bangalore", website: "http://www.christuniversity.in/" },
        { college: "Narsee Monjee College of Commerce and Economics", location: "Mumbai", website: "https://nm.edu.in/" },
        { college: "Hansraj College", location: "Delhi", website: "https://hansrajcollege.ac.in/" },
        { college: "Madras Christian College", location: "Chennai", website: "https://www.mcc.edu.in/" },
        { college: "Symbiosis College of Arts and Commerce", location: "Pune", website: "https://www.symbiosisarts.edu.in/" },
    ];

    const institutesWorld = [
        { college: "Association of Chartered Certified Accountants (ACCA)", location: "United Kingdom", website: "https://www.accaglobal.com/" },
        { college: "Chartered Accountants Australia and New Zealand (CA ANZ)", location: "Australia", website: "https://www.charteredaccountantsanz.com/" },
        { college: "Institute of Chartered Accountants in England and Wales (ICAEW)", location: "United Kingdom", website: "https://www.icaew.com/" },
        { college: "Canadian Institute of Chartered Accountants (CICA)", location: "Canada", website: "https://cpacanada.ca/" },
        { college: "South African Institute of Chartered Accountants (SAICA)", location: "South Africa", website: "https://www.saica.co.za/" },
        { college: "Institute of Chartered Accountants of Scotland (ICAS)", location: "Scotland", website: "https://www.icas.com/" },
        { college: "Chartered Accountants Ireland", location: "Ireland", website: "https://www.charteredaccountants.ie/" },
        { college: "Institute of Singapore Chartered Accountants (ISCA)", location: "Singapore", website: "https://www.isca.org.sg/" },
        { college: "Hong Kong Institute of Certified Public Accountants (HKICPA)", location: "Hong Kong", website: "https://www.hkicpa.org.hk/" },
    ];

    const entranceExams = [
        {
            college: "CA Foundation",
            date: "May/November",
            elements: "Principles and Practices of Accounting, Business Laws and Business Correspondence, Business Mathematics and Logical Reasoning, Business Economics",
            website: "https://www.icai.org/",
        },
        {
            college: "CA Intermediate",
            date: "May/November",
            elements: "Accounting, Corporate Laws and Other Laws, Cost and Management Accounting, Taxation, Advanced Accounting, Auditing and Assurance, Enterprise Information Systems and Strategic Management, Financial Management and Economics for Finance",
            website: "https://www.icai.org/",
        },
        {
            college: "CA Final",
            date: "May/November",
            elements: "Financial Reporting, Strategic Financial Management, Advanced Auditing and Professional Ethics, Corporate Laws and Securities Laws, Strategic Cost Management and Performance Evaluation, Elective Papers, Direct Tax Laws and International Taxation, Indirect Tax Laws",
            website: "https://www.icai.org/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Auditor",
            description: "Auditors examine financial records to ensure accuracy and compliance with laws and regulations. They review financial operations, prepare reports, and help organizations improve efficiency. Auditors can work internally within organizations or externally for auditing firms, providing independent verification of financial statements."
        },
        {
            role: "Tax Consultant",
            description: "Tax consultants advise individuals and organizations on tax-related matters. They help clients minimize tax liabilities, ensure compliance with tax laws, and represent clients during tax disputes. Tax consultants stay updated on changing tax regulations and provide strategic advice on tax planning and optimization."
        },
        {
            role: "Financial Advisor",
            description: "Financial advisors help individuals and organizations make informed financial decisions. They provide guidance on investments, retirement planning, estate planning, and risk management. Financial advisors analyze clients' financial situations and develop customized strategies to help them achieve their financial goals."
        },
        {
            role: "Management Accountant",
            description: "Management accountants focus on internal financial processes within organizations. They analyze financial data, prepare budgets, forecast financial performance, and assist in strategic decision-making. Management accountants help organizations improve efficiency, reduce costs, and maximize profitability."
        },
        {
            role: "Chief Financial Officer (CFO)",
            description: "CFOs are senior executives responsible for managing the financial actions of an organization. They oversee financial planning, budgeting, and reporting, and make strategic decisions to drive financial growth. CFOs play a key role in shaping the financial strategy and direction of the organization."
        },
        {
            role: "Forensic Accountant",
            description: "Forensic accountants investigate financial fraud and financial discrepancies. They analyze financial records, identify irregularities, and prepare reports for legal proceedings. Forensic accountants often work with law enforcement agencies, legal teams, and insurance companies to uncover financial crimes."
        },
        {
            role: "Investment Banker",
            description: "Investment bankers help organizations raise capital and provide advisory services for mergers, acquisitions, and other financial transactions. They analyze market trends, assess financial risks, and develop strategies to help clients achieve their financial objectives. Investment bankers typically work for financial institutions."
        },
        {
            role: "Corporate Controller",
            description: "Corporate controllers oversee accounting operations within organizations. They manage financial reporting, ensure compliance with accounting standards, and supervise accounting staff. Controllers play a critical role in maintaining the integrity of financial information and supporting strategic decision-making."
        }
    ];

    // Jammu and Kashmir opportunities
    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Government Accounting Positions",
            description: "The Jammu & Kashmir government offers numerous accounting positions in various departments. These roles involve managing public funds, ensuring financial compliance, and preparing financial reports for government agencies.",
            icon: "🏛️",
            growth: 75,
            jobs: 850,
            salary: "₹6.2L"
        },
        {
            title: "Tourism Industry Accounting",
            description: "With tourism being a major industry in J&K, there's high demand for accountants in hotels, travel agencies, and tourism-related businesses. These roles involve managing finances, budgeting, and ensuring regulatory compliance.",
            icon: "🏔️",
            growth: 82,
            jobs: 1200,
            salary: "₹5.8L"
        },
        {
            title: "Start-up Ecosystem",
            description: "J&K's growing start-up ecosystem requires financial expertise for business planning, fundraising, and financial management. CAs can provide valuable guidance to new ventures and help them navigate financial challenges.",
            icon: "🚀",
            growth: 90,
            jobs: 650,
            salary: "₹7.5L"
        },
        {
            title: "Educational Institutions",
            description: "Universities and colleges in J&K require accounting professionals for financial management, auditing, and compliance. There are also opportunities for CAs to teach accounting and finance courses.",
            icon: "🎓",
            growth: 65,
            jobs: 400,
            salary: "₹5.5L"
        },
        {
            title: "NGO and Development Sector",
            description: "Numerous NGOs and development organizations operate in J&K, requiring accounting professionals for fund management, financial reporting, and ensuring compliance with donor requirements.",
            icon: "🤝",
            growth: 70,
            jobs: 550,
            salary: "₹4.8L"
        },
        {
            title: "Agriculture and Horticulture Accounting",
            description: "Agriculture and horticulture are key sectors in J&K. Accountants are needed to manage finances for agricultural businesses, cooperatives, and government initiatives related to these sectors.",
            icon: "🌾",
            growth: 60,
            jobs: 750,
            salary: "₹5.2L"
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
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Commerce &gt; Chartered Accountancy</div>
                <div className="flex gap-4">
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
                    {/* Compare Button */}
                    <button
                        onClick={handleCompareClick}
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                        <span>⚖️</span>
                        <span>Compare</span>
                    </button>
                </div>
            </div>

            {/* Comparison Modal */}
            {showCompareModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-6 text-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Compare Chartered Accountancy with</h3>
                                <button
                                    onClick={() => setShowCompareModal(false)}
                                    className="text-white hover:text-gray-200 text-2xl"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[70vh]">
                            <div className="space-y-3">
                                {[
                                    "Chartered Accountancy vs Company Secretary",
                                    "Chartered Accountancy vs Cost & Management Accountancy",
                                    "Chartered Accountancy vs Banking & Insurance",
                                    "Chartered Accountancy vs Business Management",
                                    "Chartered Accountancy vs MBA Finance"
                                ].map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleComparisonSelect(option)}
                                        className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gradient-to-r from-purple-50 to-indigo-50 hover:border-purple-300 transition-all duration-300 flex items-center gap-3"
                                    >
                                        <span className="text-purple-600 text-lg">⚖️</span>
                                        <span className="font-medium text-gray-800">{option}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Modal */}
            {showChatModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Career Comparison: {selectedComparison}</h3>
                                <button
                                    onClick={handleCloseChat}
                                    className="text-white hover:text-gray-200 text-2xl"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                            <div className="space-y-4">
                                {chatMessages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl max-w-[80%] ${message.isUser ? 'bg-gradient-to-r from-blue-100 to-indigo-100 ml-auto' : 'bg-white border border-gray-200'}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            {!message.isUser && (
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                                                    AI
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                {message.isUser ? (
                                                    <p className="text-gray-800">{message.text}</p>
                                                ) : (
                                                    <div
                                                        className="text-gray-800 leading-relaxed"
                                                        dangerouslySetInnerHTML={{ __html: formatResponse(message.text) }}
                                                    />
                                                )}
                                            </div>
                                            {message.isUser && (
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                                                    You
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="p-4 rounded-xl max-w-[80%] bg-white border border-gray-200">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                                                AI
                                            </div>
                                            <div className="flex space-x-2">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Ask a follow-up question..."
                                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={isLoading || !userInput.trim()}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Chartered Accountancy?</h3>
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
                            <h2 className="text-3xl font-bold text-gray-800">Chartered Accountancy (CA)</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Chartered Accountancy is a prestigious professional qualification in the field of accounting, auditing, taxation, and financial management. In India, CAs are regulated by the Institute of Chartered Accountants of India (ICAI), which is one of the largest accounting bodies in the world.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    The CA qualification involves three levels: CA Foundation, CA Intermediate, and CA Final, along with a mandatory articleship training period. This rigorous training equips CAs with expertise in financial reporting, strategic financial management, taxation, auditing, and business advisory services.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/ca-profession.png" alt="Chartered Accountancy" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Chartered Accountancy</span>
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

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={jammuKashmirRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏔️</span>
                            <span>Opportunities in Jammu and Kashmir</span>
                        </h3>

                        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Accounting Sector Growth in J&K</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        The accounting sector in Jammu and Kashmir is experiencing significant growth with increasing government initiatives and private investments.
                                        The region offers unique opportunities for finance professionals to contribute to its economic development.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                                    <div className="text-3xl font-bold text-blue-600">68%</div>
                                    <div className="text-sm text-gray-600">Growth Rate</div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Employment Growth</span>
                                    <span>68%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jammuKashmirOpportunities.map((opportunity, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        <span className="text-3xl">{opportunity.icon}</span>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold mb-2 text-gray-800">{opportunity.title}</h4>
                                            <p className="text-gray-700 text-sm leading-relaxed">{opportunity.description}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                <span>Growth Potential</span>
                                                <span>{opportunity.growth}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                                                    style={{ width: `${opportunity.growth}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white p-3 rounded-lg border border-blue-100 text-center">
                                                <div className="text-xl font-bold text-blue-600">{opportunity.jobs}+</div>
                                                <div className="text-xs text-gray-600">Job Opportunities</div>
                                            </div>
                                            <div className="bg-white p-3 rounded-lg border border-blue-100 text-center">
                                                <div className="text-xl font-bold text-blue-600">{opportunity.salary}</div>
                                                <div className="text-xs text-gray-600">Average Salary</div>
                                            </div>
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
                                <li>Special government incentives for finance professionals working in J&K</li>
                                <li>Growing demand for CAs in government projects and initiatives</li>
                                <li>Opportunities to contribute to the region's economic development</li>
                                <li>Lower competition compared to metropolitan cities</li>
                                <li>Potential for work-life balance in the scenic region</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Chartered Accountancy</span>
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
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Register for CA Foundation (4 months course)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Clear CA Foundation and register for CA Intermediate (8 months course)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Complete 3 years articleship and clear CA Final</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />After Graduation</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Exempt from Foundation (direct entry to Intermediate)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Register for CA Intermediate (8 months course)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Complete 2 years articleship and clear CA Final</td>
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
                                <li>Minimum eligibility for direct entry to Intermediate: Graduation with specified marks</li>
                                <li>Articleship training is mandatory under a practicing CA</li>
                                <li>ICAI conducts exams twice a year (May and November)</li>
                                <li>Overall duration to complete CA: 4.5-5 years after Class XII</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Chartered Accountancy Institutes in India</p>
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
                        <p className="mb-6 text-gray-700 text-lg">Top International Accounting Bodies</p>
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
                            <span>CA Course Levels</span>
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
                                <span>Prepare and examine financial records, ensuring accuracy and compliance with laws and regulations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Compute taxes owed, prepare tax returns, and ensure timely payment of taxes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Inspect account books and accounting systems for efficiency and proper use of accounting procedures</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Organize and maintain financial records, including preparing financial reports</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Assess financial operations and make best-practices recommendations to management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Suggest ways to reduce costs, enhance revenues, and improve profits</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Conduct audits of financial operations to ensure compliance with standards and regulations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Provide advisory services to clients on matters such as financial planning, risk management, and business valuation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Represent clients before tax authorities and provide support during tax audits</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Stay updated on changes in tax laws, accounting standards, and financial regulations</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Chartered Accountancy</span>
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
                                        <span>Prestigious and globally recognized qualification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>High earning potential and financial stability</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Diverse career opportunities across industries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunity for entrepreneurship and consulting</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Continuous learning and professional development</span>
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
                                        <span>Long and rigorous qualification process</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High-stress levels, especially during tax season</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Stringent ethical and professional standards</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Need to continuously update knowledge with changing laws</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High competition in the field</span>
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