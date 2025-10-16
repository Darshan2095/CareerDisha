
"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MbbsPage() {
    const [copied, setCopied] = useState("");
    const [activeSection, setActiveSection] = useState("summary");
    const [showCompareModal, setShowCompareModal] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);
    const [selectedComparison, setSelectedComparison] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState("");
    const router = useRouter();

    // References for each section
    const summaryRef = useRef(null);
    const opportunitiesRef = useRef(null);
    const specializationsRef = useRef(null);
    const careerPathRef = useRef(null);
    const leadingInstitutesRef = useRef(null);
    const institutionsAbroadRef = useRef(null);
    const entranceExamsRef = useRef(null);
    const workDescriptionRef = useRef(null);
    const prosConsRef = useRef(null);
    const jammuKashmirRef = useRef(null); // New ref for J&K opportunities section

    // const navigate = useNavigate();

    const handleCareerChange = (e) => {
        const value = e.target.value;
        if (value) {
            router.push(value);
        }
    };

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

    // Top medical colleges in India
    const institutesIndia = [
        { college: "All India Institute of Medical Sciences (AIIMS)", location: "New Delhi", website: "https://www.aiims.edu" },
        { college: "Post Graduate Institute of Medical Education & Research (PGIMER)", location: "Chandigarh", website: "https://pgimer.edu.in" },
        { college: "Christian Medical College (CMC)", location: "Vellore", website: "https://www.cmch-vellore.edu" },
        { college: "National Institute of Mental Health and Neurosciences (NIMHANS)", location: "Bangalore", website: "https://www.nimhans.ac.in" },
        { college: "Banaras Hindu University (BHU)", location: "Varanasi", website: "https://www.bhu.ac.in" },
        { college: "King George's Medical University (KGMU)", location: "Lucknow", website: "https://www.kgmu.org" },
        { college: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)", location: "Puducherry", website: "https://jipmer.edu.in" },
        { college: "Armed Forces Medical College (AFMC)", location: "Pune", website: "https://afmc.nic.in" },
        { college: "Madras Medical College", location: "Chennai", website: "https://www.tnmgrmu.ac.in" },
    ];

    // Top medical institutions abroad
    const institutesWorld = [
        { college: "Harvard University", location: "United States", website: "https://www.harvard.edu" },
        { college: "Johns Hopkins University", location: "United States", website: "https://www.jhu.edu" },
        { college: "University of Oxford", location: "United Kingdom", website: "https://www.ox.ac.uk" },
        { college: "University of Cambridge", location: "United Kingdom", website: "https://www.cam.ac.uk" },
        { college: "Stanford University", location: "United States", website: "https://www.stanford.edu" },
        { college: "Karolinska Institute", location: "Sweden", website: "https://ki.se" },
        { college: "University of California, Los Angeles (UCLA)", location: "United States", website: "https://www.ucla.edu" },
        { college: "University of Toronto", location: "Canada", website: "https://www.utoronto.ca" },
        { college: "Yale University", location: "United States", website: "https://www.yale.edu" },
    ];

    // Medical entrance exams in India
    const entranceExams = [
        {
            college: "NEET UG",
            date: "May",
            elements: "Physics, Chemistry, Biology (Botany & Zoology)",
            website: "https://neet.nta.nic.in",
        },
        {
            college: "AIIMS MBBS",
            date: "May",
            elements: "Physics, Chemistry, Biology, General Knowledge, Aptitude & Logical Thinking",
            website: "https://www.aiimsexams.ac.in",
        },
        {
            college: "JIPMER MBBS",
            date: "June",
            elements: "Physics, Chemistry, Biology, English, Logical Reasoning",
            website: "https://jipmer.edu.in",
        },
        {
            college: "PGIMER",
            date: "June",
            elements: "Physics, Chemistry, Biology, English, Logical Reasoning",
            website: "https://pgimer.edu.in",
        },
    ];

    // Professional opportunities in medicine
    const professionalOpportunities = [
        {
            role: "General Practitioner/Family Physician",
            description: "General practitioners provide comprehensive health care to individuals and families. They diagnose and treat illnesses, provide preventive care, and refer patients to specialists when necessary. They often build long-term relationships with patients and manage overall health."
        },
        {
            role: "Surgeon",
            description: "Surgeons perform operations to treat injuries, diseases, and deformities. They specialize in specific areas such as orthopedic, cardiac, neuro, or general surgery. Surgeons work in hospitals and may also have private practices."
        },
        {
            role: "Pediatrician",
            description: "Pediatricians specialize in the medical care of infants, children, and adolescents. They manage physical, behavioral, and mental health issues in young patients. Pediatricians track growth and development, administer vaccinations, and treat childhood illnesses."
        },
        {
            role: "Obstetrician/Gynecologist",
            description: "Obstetricians and gynecologists provide care related to pregnancy, childbirth, and the female reproductive system. They manage prenatal care, deliver babies, and treat disorders of the reproductive system. They may also specialize in infertility or high-risk pregnancies."
        },
        {
            role: "Psychiatrist",
            description: "Psychiatrists diagnose, treat, and prevent mental, emotional, and behavioral disorders. They can prescribe medication and use psychotherapy to help patients. Psychiatrists may specialize in areas such as child psychiatry, addiction, or forensic psychiatry."
        },
        {
            role: "Cardiologist",
            description: "Cardiologists specialize in diagnosing and treating diseases of the cardiovascular system. They manage conditions like heart attacks, heart failure, and arrhythmias. Cardiologists perform procedures like angioplasty and implant pacemakers."
        },
        {
            role: "Oncologist",
            description: "Oncologists diagnose and treat cancer patients. They develop treatment plans that may include chemotherapy, radiation therapy, and immunotherapy. Oncologists work closely with other specialists to provide comprehensive cancer care."
        },
        {
            role: "Neurologist",
            description: "Neurologists diagnose and treat disorders of the nervous system, including the brain, spinal cord, and nerves. They manage conditions like epilepsy, stroke, multiple sclerosis, and Parkinson's disease. Neurologists may specialize in areas like pediatric neurology or neurocritical care."
        }
    ];

    // Medical specializations
    const specializations = [
        {
            title: "Internal Medicine",
            description: "Focuses on the diagnosis, treatment, and prevention of diseases in adults. Internists often serve as primary care physicians and may subspecialize in areas like cardiology, endocrinology, or gastroenterology.",
            icon: "🩺"
        },
        {
            title: "Surgery",
            description: "Involves operative procedures to treat injuries, diseases, and deformities. Surgeons specialize in specific areas such as general surgery, orthopedic surgery, neurosurgery, or plastic surgery.",
            icon: "🔪"
        },
        {
            title: "Pediatrics",
            description: "Deals with the medical care of infants, children, and adolescents. Pediatricians manage physical, behavioral, and developmental health from birth through young adulthood.",
            icon: "👶"
        },
        {
            title: "Obstetrics & Gynecology",
            description: "Covers pregnancy, childbirth, and disorders of the female reproductive system. Specialists provide prenatal care, deliver babies, and treat conditions like infertility and reproductive cancers.",
            icon: "🤱"
        },
        {
            title: "Psychiatry",
            description: "Focuses on the diagnosis, treatment, and prevention of mental, emotional, and behavioral disorders. Psychiatrists use medication, psychotherapy, and other treatments to help patients.",
            icon: "🧠"
        },
        {
            title: "Radiology",
            description: "Specializes in medical imaging to diagnose and treat diseases. Radiologists interpret X-rays, CT scans, MRIs, and ultrasounds, and may perform interventional procedures.",
            icon: "📡"
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Government Health Initiatives",
            description: "The J&K government has launched several health initiatives including 'Ayushman Bharat' and 'National Health Mission' to improve healthcare infrastructure and services in the region.",
            icon: "🏥",
            growth: 75,
            jobs: 2500,
            salary: "₹8-15 LPA"
        },
        {
            title: "Rural Healthcare Programs",
            description: "There's a significant focus on improving rural healthcare in J&K, with opportunities for doctors to work in primary health centers and community health programs.",
            icon: "🏘️",
            growth: 82,
            jobs: 1800,
            salary: "₹6-12 LPA"
        },
        {
            title: "Medical Tourism",
            description: "J&K's natural beauty and developing healthcare infrastructure is creating opportunities in medical tourism, particularly in wellness and alternative medicine sectors.",
            icon: "🏞️",
            growth: 68,
            jobs: 950,
            salary: "₹7-14 LPA"
        },
        {
            title: "High-Altitude Medicine Research",
            description: "The unique geography of J&K offers opportunities for research in high-altitude medicine, with several research institutes focusing on mountain medicine.",
            icon: "⛰️",
            growth: 70,
            jobs: 600,
            salary: "₹9-16 LPA"
        },
        {
            title: "Armed Forces Medical Services",
            description: "Given the strategic importance of J&K, there are opportunities for medical professionals in armed forces hospitals and services across the region.",
            icon: "⚕️",
            growth: 65,
            jobs: 1200,
            salary: "₹10-18 LPA"
        },
        {
            title: "Telemedicine Initiatives",
            description: "With challenging terrain, J&K is expanding telemedicine services, creating opportunities for doctors to provide remote consultations and healthcare access.",
            icon: "💻",
            growth: 90,
            jobs: 800,
            salary: "₹8-15 LPA"
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
            specializations: specializationsRef,
            careerPath: careerPathRef,
            leadingInstitutes: leadingInstitutesRef,
            institutionsAbroad: institutionsAbroadRef,
            entranceExams: entranceExamsRef,
            workDescription: workDescriptionRef,
            prosCons: prosConsRef,
            jammuKashmir: jammuKashmirRef // Add J&K section to observer
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

    // Simple function to format text for better readability
    const formatResponse = (text) => {
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
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Medical &gt; MBBS</div>
                <div className="flex gap-4">
                    {/* Dropdown */}
                    <div className="relative">
                        <select
                            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white shadow-sm"
                            defaultValue=""
                            onChange={handleCareerChange}
                        >
                            <option value="" disabled>
                                Choose another Career
                            </option>
                            <option value="/medical">Medical</option>
                            <option value="/mbbs">MBBS</option>
                            <option value="/dentistry">Dentistry</option>
                            <option value="/nursing">Nursing</option>
                            <option value="/pharmacy">Pharmacy</option>
                            <option value="/physiotherapy">Physiotherapy</option>
                            <option value="/medical-research">Medical Research</option>
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
                                <h3 className="text-xl font-bold">Compare MBBS with</h3>
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
                                    "MBBS vs Nursing",
                                    "MBBS vs Dentistry",
                                    "MBBS vs Pharmacy",
                                    "MBBS vs Physiotherapy",
                                    "MBBS vs Medical Research"
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
                                    <span>Career Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "specializations" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md" : "hover:bg-blue-50"}`}
                                onClick={() => scrollToSection(specializationsRef, "specializations")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "specializations" ? "text-white" : "text-blue-600"}`}>🔬</span>
                                    <span>Specializations</span>
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
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Medicine?</h3>
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
                            <h2 className="text-3xl font-bold text-gray-800">MBBS (Bachelor of Medicine, Bachelor of Surgery)</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    MBBS (Bachelor of Medicine, Bachelor of Surgery) is an undergraduate degree in medicine and surgery.
                                    As the primary medical qualification in many countries, it prepares students for careers as physicians.
                                    The program typically spans 5.5 years, including a one-year mandatory internship. MBBS graduates gain
                                    comprehensive knowledge of human anatomy, physiology, biochemistry, pharmacology, pathology, microbiology,
                                    and various clinical specialties. The curriculum combines theoretical learning with extensive practical training
                                    in hospitals and clinical settings, enabling students to develop diagnostic and therapeutic skills.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="./11A-MBBS.png" alt="MBBS Students" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Medicine</span>
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

                    {/* Specializations Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={specializationsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🔬</span>
                            <span>Medical Specializations</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {specializations.map((specialization, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <span className="text-3xl">{specialization.icon}</span>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3 text-gray-800">{specialization.title}</h4>
                                            <p className="text-gray-700 text-sm leading-relaxed">{specialization.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                                <span className="text-amber-600">🌟</span>
                                <span>Emerging Specializations</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Medical Genetics and Genomics</li>
                                <li>Regenerative Medicine</li>
                                <li>Telemedicine and Digital Health</li>
                                <li>Precision Medicine</li>
                                <li>Medical Informatics</li>
                            </ul>
                        </div>
                    </section>

                    {/* Jammu and Kashmir Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={jammuKashmirRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏔️</span>
                            <span>Opportunities in Jammu and Kashmir</span>
                        </h3>

                        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Healthcare Sector Growth in J&K</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        The healthcare sector in Jammu and Kashmir is experiencing significant growth with increasing government support and private investments.
                                        The region offers unique opportunities for medical professionals to contribute to its healthcare transformation while serving in diverse environments.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                                    <div className="text-3xl font-bold text-blue-600">78%</div>
                                    <div className="text-sm text-gray-600">Growth Rate</div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Employment Growth</span>
                                    <span>78%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
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
                                <span>Key Benefits for Medical Professionals in J&K</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Government incentives for medical professionals working in underserved areas</li>
                                <li>Opportunity to make significant impact in communities with limited healthcare access</li>
                                <li>Exposure to unique medical cases and high-altitude medicine practices</li>
                                <li>Professional growth through specialized training programs</li>
                                <li>Work-life balance in scenic environments with lower population density</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Medicine</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Undergraduate</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Postgraduate</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Super Specialization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with PCB (Physics, Chemistry, Biology)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MBBS for 5.5 years (including 1-year internship)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MD/MS for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue DM/MCh for 3 years</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with PCB (Physics, Chemistry, Biology)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BDS for 5 years (including 1-year internship)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MDS for 3 years</td>
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
                                <li>Must have studied Physics, Chemistry, and Biology in Class XII</li>
                                <li>Minimum aggregate of 50% in PCB (40% for reserved categories)</li>
                                <li>Must qualify NEET UG for admission to MBBS/BDS courses in India</li>
                                <li>Minimum age limit is 17 years as of December 31 of the year of admission</li>
                                <li>Foreign medical graduates must qualify the Foreign Medical Graduates Examination (FMGE) to practice in India</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Medical Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Medical Colleges in India</p>
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
                            <span>Top Medical Institutions Abroad</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Leading Medical Universities Worldwide</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">University</th>
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
                            <span>Important Medical Entrance Exams</span>
                        </h3>
                        <h4 className="text-lg font-medium mb-5 text-gray-800 flex items-center gap-2">
                            <span className="text-blue-600">🎓</span>
                            <span>Undergraduate</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Exam</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Subjects</th>
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
                                <span>Diagnose illnesses and injuries through physical examinations, diagnostic tests, and patient interviews</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Develop treatment plans including medications, therapies, surgeries, and lifestyle modifications</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Perform medical procedures and surgeries as required by patient conditions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Maintain detailed patient records, documenting medical history, examinations, diagnoses, and treatments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Collaborate with other healthcare professionals including nurses, specialists, and therapists</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Educate patients and families about health conditions, prevention strategies, and treatment options</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Participate in continuing education to stay current with medical advancements and research</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Conduct research to advance medical knowledge and improve patient care</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Adhere to medical ethics, confidentiality, and professional standards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Manage emergency situations and make critical decisions under pressure</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Medicine</span>
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
                                        <span>High respect and social status in society</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Lucrative career with good earning potential</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunity to make a significant impact on people's lives</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Continuous learning and intellectual stimulation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Job security and diverse career opportunities</span>
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
                                        <span>Long and demanding education and training period</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High stress levels and emotional challenges</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Long and irregular working hours, including nights and weekends</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High responsibility and risk of burnout</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Significant financial investment in education</span>
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