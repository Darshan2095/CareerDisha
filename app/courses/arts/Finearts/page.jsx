"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FineArtsPage() {
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
        return text
            .replace(/###\s+(.+)/g, '<h3 class="font-bold text-lg mt-4 mb-2 text-purple-700">$1</h3>')
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
        { college: "Faculty of Fine Arts, MS University", location: "Baroda", website: "http://www.msubaroda.ac.in/" },
        { college: "College of Art, Delhi", location: "Delhi", website: "http://www.collegeofartdelhi.in/" },
        { college: "Sir J.J. Institute of Applied Art", location: "Mumbai", website: "http://www.jjia.org/" },
        { college: "Kala Bhavana, Visva-Bharati", location: "Santiniketan", website: "http://www.visvabharati.ac.in/" },
        { college: "Shantiniketan Fine Arts Academy", location: "Shantiniketan", website: "http://www.sfaa.ac.in/" },
        { college: "Department of Fine Arts, BHU", location: "Varanasi", website: "http://www.bhu.ac.in/" },
        { college: "Rabindra Bharati University", location: "Kolkata", website: "http://www.rbu.ac.in/" },
        { college: "Jawaharlal Nehru Architecture and Fine Arts University", location: "Hyderabad", website: "http://www.jnafau.ac.in/" },
        { college: "Chitra Kala Parishath", location: "Bangalore", website: "http://www.chitrakalaparishath.ac.in/" },
    ];

    const institutesWorld = [
        { college: "Royal College of Art", location: "United Kingdom", website: "https://www.rca.ac.uk/" },
        { college: "Parsons School of Design", location: "United States", website: "https://www.newschool.edu/parsons/" },
        { college: "Rhode Island School of Design", location: "United States", website: "https://www.risd.edu/" },
        { college: "School of the Art Institute of Chicago", location: "United States", website: "https://www.saic.edu/" },
        { college: "Central Saint Martins", location: "United Kingdom", website: "https://www.arts.ac.uk/colleges/central-saint-martins" },
        { college: "École Nationale Supérieure des Beaux-Arts", location: "France", website: "https://www.beauxartsparis.fr/" },
        { college: "Berlin University of the Arts", location: "Germany", website: "https://www.udk-berlin.de/" },
        { college: "Tokyo University of the Arts", location: "Japan", website: "https://www.geidai.ac.jp/english/" },
        { college: "National Art School", location: "Australia", website: "https://www.nas.edu.au/" },
    ];

    const entranceExams = [
        {
            college: "NIFT Entrance Exam",
            date: "January",
            elements: "Creative Ability Test, General Ability Test, Situation Test",
            website: "https://www.nift.ac.in/",
        },
        {
            college: "NID Entrance Exam",
            date: "January",
            elements: "Design Aptitude Test, Studio Test, Personal Interview",
            website: "https://www.nid.edu/",
        },
        {
            college: "UCEED",
            date: "January",
            elements: "Visualization and Spatial Ability, Observation and Design Sensitivity, Environmental and Social Awareness",
            website: "https://uceed.iitb.ac.in/",
        },
        {
            college: "College of Art Delhi Entrance",
            date: "June",
            elements: "Practical Test, Theory Test, Interview",
            website: "http://www.collegeofartdelhi.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Fine Artist",
            description: "Fine artists create original artwork using a variety of media such as painting, sculpture, photography, or digital art. They often work independently, developing their unique style and expressing their creative vision. Fine artists may sell their work through galleries, exhibitions, or directly to collectors."
        },
        {
            role: "Illustrator",
            description: "Illustrators create original images for a variety of products, including books, magazines, packaging, and digital media. They work in various styles and mediums to convey ideas, tell stories, or enhance written content. Illustrators may specialize in areas such as children's books, technical illustration, or fashion illustration."
        },
        {
            role: "Art Director",
            description: "Art directors are responsible for the visual style and images in magazines, newspapers, product packaging, and movie and television productions. They create the overall design and direct others who develop artwork or layouts. Art directors determine how best to represent a concept visually."
        },
        {
            role: "Art Teacher",
            description: "Art teachers educate students about art history, techniques, and various art forms. They develop lesson plans, demonstrate techniques, and provide guidance to students as they create their own artwork. Art teachers may work in schools, community centers, or give private lessons."
        },
        {
            role: "Gallery Curator",
            description: "Gallery curators are responsible for acquiring, caring for, and developing a collection of artworks. They organize exhibitions, write catalog essays, and may give talks about the collection. Curators also research artists and artworks to provide context and interpretation for visitors."
        },
        {
            role: "Art Therapist",
            description: "Art therapists use the creative process of making art to improve and enhance the physical, mental, and emotional well-being of individuals. They work with clients to explore their feelings, reconcile emotional conflicts, foster self-awareness, manage behavior, and develop social skills."
        },
        {
            role: "Set Designer",
            description: "Set designers create the physical surroundings in which the action of a film, television show, or theater production takes place. They research, design, and supervise the construction of sets that reflect the production's time period, location, and mood. Set designers work closely with directors and other production staff."
        },
        {
            role: "Art Restorer",
            description: "Art restorers and conservators preserve and restore artworks and cultural artifacts. They examine objects to determine their condition and the causes of deterioration, then carry out treatments to stabilize and restore them. This work requires extensive knowledge of art history, materials science, and conservation techniques."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Traditional Crafts Revival",
            description: "J&K has rich artistic traditions including Papier-mâché, wood carving, carpet weaving, and Pashmina embroidery. Artists can work with government initiatives and NGOs to preserve and modernize these traditional art forms, creating contemporary products while preserving cultural heritage.",
            icon: "🎨",
            growth: 85,
            jobs: 1200,
            salary: "₹4.8L"
        },
        {
            title: "Tourism Art Market",
            description: "With J&K being a major tourist destination, there's a thriving market for local art and handicrafts. Artists can create and sell artwork to tourists, work in art galleries, or develop art-based tourism experiences like workshops and cultural tours.",
            icon: "🏞️",
            growth: 78,
            jobs: 950,
            salary: "₹3.6L"
        },
        {
            title: "Cultural Institutions",
            description: "The J&K Academy of Art, Culture and Languages supports artists through exhibitions, workshops, and grants. Artists can find opportunities to showcase their work, receive funding, and collaborate with other artists through these cultural institutions.",
            icon: "🏛️",
            growth: 65,
            jobs: 400,
            salary: "₹5.2L"
        },
        {
            title: "Art Education",
            description: "There's growing demand for art educators in schools, colleges, and private institutions across J&K. Artists with teaching skills can find fulfilling careers nurturing the next generation of artists and promoting art education in the region.",
            icon: "🎓",
            growth: 72,
            jobs: 600,
            salary: "₹4.2L"
        },
        {
            title: "Digital Art Opportunities",
            description: "With improving digital infrastructure, J&K artists are exploring digital art forms, graphic design, and animation. This opens opportunities for remote work with national and international clients while living in the region.",
            icon: "💻",
            growth: 90,
            jobs: 750,
            salary: "₹6.5L"
        },
        {
            title: "Art Therapy Programs",
            description: "Given the unique social context of J&K, there's increasing recognition of art therapy's benefits. Artists trained in art therapy can work with communities, hospitals, and NGOs to provide therapeutic art programs that promote healing and well-being.",
            icon: "🖌️",
            growth: 68,
            jobs: 300,
            salary: "₹4.5L"
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
        <div className="font-sans bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
            {/* Header - Sticky */}
            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-20"></div>

            {/* Banner */}
            <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            {/* Breadcrumb */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Arts & Humanities &gt; Fine Arts</div>
                <div className="flex gap-4">
                    {/* Dropdown */}
                    <div className="relative">
                        <select
                            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    {/* Compare Button */}
                    <button
                        onClick={handleCompareClick}
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
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
                        <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-6 text-white">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Compare Fine Arts with</h3>
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
                                    "Fine Arts vs Performing Arts",
                                    "Fine Arts vs Literature & Languages",
                                    "Fine Arts vs History & Archaeology",
                                    "Fine Arts vs Philosophy",
                                    "Fine Arts vs Sociology & Anthropology"
                                ].map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleComparisonSelect(option)}
                                        className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gradient-to-r from-purple-50 to-pink-50 hover:border-purple-300 transition-all duration-300 flex items-center gap-3"
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
                        <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-6 text-white">
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
                                        className={`p-4 rounded-xl max-w-[80%] ${message.isUser ? 'bg-gradient-to-r from-purple-100 to-pink-100 ml-auto' : 'bg-white border border-gray-200'}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            {!message.isUser && (
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
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
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
                                                    You
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="p-4 rounded-xl max-w-[80%] bg-white border border-gray-200">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
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
                                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={isLoading || !userInput.trim()}
                                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50"
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
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(summaryRef, "summary")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-purple-600"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(opportunitiesRef, "opportunities")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-purple-600"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-purple-600"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(careerPathRef, "careerPath")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-purple-600"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-purple-600"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-purple-600"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-purple-600"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(workDescriptionRef, "workDescription")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-purple-600"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(prosConsRef, "prosCons")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-purple-600"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>
                        {/* Demo Form */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Fine Arts?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
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
                            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Fine Arts</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Fine Arts is a field of study that encompasses various visual art forms including painting, sculpture, photography, printmaking, and more. It focuses on developing artistic skills, creative expression, and aesthetic understanding. Students learn about art history, theory, and techniques while developing their unique artistic voice.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    A degree in Fine Arts provides a foundation for careers as professional artists, art educators, curators, art therapists, and various roles in creative industries. It cultivates critical thinking, visual literacy, and creative problem-solving skills that are valuable in many professional contexts beyond traditional art careers.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/20A-Fine_Arts.png" alt="Fine Arts" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Fine Arts</span>
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

                        <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Arts & Cultural Sector Growth in J&K</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                        The arts and cultural sector in Jammu and Kashmir is experiencing significant growth with increasing government support and tourism.
                                        The region offers unique opportunities for artists to preserve traditional art forms while embracing contemporary expressions.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                                    <div className="text-3xl font-bold text-purple-600">76%</div>
                                    <div className="text-sm text-gray-600">Growth Rate</div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Employment Growth</span>
                                    <span>76%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jammuKashmirOpportunities.map((opportunity, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300">
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
                                                    className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                                                    style={{ width: `${opportunity.growth}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-white p-3 rounded-lg border border-purple-100 text-center">
                                                <div className="text-xl font-bold text-purple-600">{opportunity.jobs}+</div>
                                                <div className="text-xs text-gray-600">Job Opportunities</div>
                                            </div>
                                            <div className="bg-white p-3 rounded-lg border border-purple-100 text-center">
                                                <div className="text-xl font-bold text-purple-600">{opportunity.salary}</div>
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
                                <span>Key Benefits for J&K Artists</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Special government incentives for artists preserving traditional art forms</li>
                                <li>Lower cost of living compared to major metropolitan cities</li>
                                <li>Growing cultural tourism creating market for local art</li>
                                <li>Improving infrastructure supporting creative industries</li>
                                <li>Unique opportunity to contribute to the region's cultural preservation</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Fine Arts</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-purple-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Art background preferred)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BFA (Bachelor of Fine Arts) for 4 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MFA (Master of Fine Arts) for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">PhD in Fine Arts or specialization in specific medium</td>
                                    </tr>
                                    <tr className="hover:bg-purple-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Diploma/Certificate in Fine Arts for 1-3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Advanced Diploma or specialization courses</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Professional practice or further specialization</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Important Facts */}
                        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-purple-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Some colleges require a portfolio submission as part of the admission process</li>
                                <li>Practical skills and artistic aptitude are often considered alongside academic qualifications</li>
                                <li>Many institutions conduct entrance exams that include practical tests and interviews</li>
                                <li>Previous art training or participation in art workshops can strengthen your application</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Fine Arts Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesIndia.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-purple-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-purple-600 underline hover:text-purple-800 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                        <p className="mb-6 text-gray-700 text-lg">Top Fine Arts Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesWorld.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-purple-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-purple-600 underline hover:text-purple-800 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                            <span className="text-purple-600">🎓</span>
                            <span>Undergraduate</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Important Elements</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entranceExams.map((exam, idx) => (
                                        <tr key={idx} className="hover:bg-purple-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{exam.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.date}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.elements}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={exam.website} target="_blank" rel="noreferrer" className="text-purple-600 underline hover:text-purple-800 transition-colors">
                                                    {exam.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(exam.website)}
                                                    className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Create original artwork using various media such as paint, clay, digital tools, or mixed media</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Develop concepts and themes for artistic projects based on personal vision or client requirements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Exhibit artwork in galleries, museums, art fairs, or other exhibition spaces</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Research subjects, materials, and techniques to inform artistic practice</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Collaborate with other artists, curators, or clients on artistic projects</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Teach art techniques and concepts to students in educational settings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Document artwork through photography or digital means for portfolios and promotion</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Market and sell artwork through galleries, online platforms, or direct sales</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Apply for grants, residencies, and other opportunities to support artistic practice</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Maintain a studio practice and develop a consistent body of work</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Fine Arts</span>
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
                                        <span>Creative freedom and self-expression</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunity to make a living doing what you love</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Diverse career paths in various creative industries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Flexibility in work environment and schedule</span>
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
                                        <span>Income can be inconsistent, especially early in career</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High competition for opportunities and recognition</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Need for self-promotion and business skills</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Pressure to constantly produce new work</span>
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