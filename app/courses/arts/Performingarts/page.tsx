"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PerformingArtsPage() {
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
        { college: "National School of Drama", location: "Delhi", website: "https://nsd.gov.in/" },
        { college: "Kalakshetra Foundation", location: "Chennai", website: "https://kalakshetra.in/" },
        { college: "Sangeet Natak Akademi", location: "Delhi", website: "https://sangeetnatak.gov.in/" },
        { college: "Whistling Woods International", location: "Mumbai", website: "https://whistlingwoods.net/" },
        { college: "Film and Television Institute of India", location: "Pune", website: "https://ftii.ac.in/" },
        { college: "Shiamak Davar Institute of Performing Arts", location: "Mumbai", website: "https://www.shiamak.com/" },
        { college: "Attakkalari Centre for Movement Arts", location: "Bangalore", website: "https://attakkalari.org/" },
        { college: "The Drama School, Mumbai", location: "Mumbai", website: "https://thedramaschoolmumbai.in/" },
        { college: "Kathak Kendra", location: "Delhi", website: "https://kathakkendra.gov.in/" },
    ];

    const institutesWorld = [
        { college: "Juilliard School", location: "United States", website: "https://www.juilliard.edu/" },
        { college: "Royal Academy of Dramatic Arts", location: "United Kingdom", website: "https://www.rada.ac.uk/" },
        { college: "Royal Conservatoire of Scotland", location: "United Kingdom", website: "https://www.rcs.ac.uk/" },
        { college: "Tisch School of the Arts", location: "United States", website: "https://tisch.nyu.edu/" },
        { college: "National Institute of Dramatic Art", location: "Australia", website: "https://www.nida.edu.au/" },
        { college: "Conservatoire de Paris", location: "France", website: "https://www.conservatoiredeparis.fr/" },
        { college: "Royal Central School of Speech and Drama", location: "United Kingdom", website: "https://www.cssd.ac.uk/" },
        { college: "Beijing Dance Academy", location: "China", website: "http://www.bda.edu.cn/" },
        { college: "Tisch School of the Arts, NYU", location: "United States", website: "https://tisch.nyu.edu/" },
    ];

    const entranceExams = [
        {
            college: "National School of Drama Admission",
            date: "April-May",
            elements: "Preliminary Test, Workshop, Interview",
            website: "https://nsd.gov.in/",
        },
        {
            college: "Kalakshetra Admission",
            date: "April",
            elements: "Practical Test, Theory Test, Interview",
            website: "https://kalakshetra.in/",
        },
        {
            college: "FTII Entrance Exam",
            date: "February-March",
            elements: "Written Test, Orientation, Interview",
            website: "https://ftii.ac.in/",
        },
        {
            college: "Sangeet Natak Akademi Scholarships",
            date: "October-November",
            elements: "Audition, Interview",
            website: "https://sangeetnatak.gov.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Actor/Performer",
            description: "Actors and performers bring characters and stories to life on stage, screen, or other performance venues. They interpret scripts, develop characters, and use their voice, body, and emotions to convey meaning. Performers may work in theater, film, television, dance, or other live performance settings."
        },
        {
            role: "Dancer",
            description: "Dancers express ideas and stories through movement. They may specialize in various styles such as ballet, contemporary, jazz, folk, or cultural dance forms. Dancers perform in productions, teach, choreograph, or work in entertainment venues. They often train extensively to maintain their physical condition and technical skills."
        },
        {
            role: "Musician/Singer",
            description: "Musicians and singers perform music in various styles and settings. They may play instruments, sing, or both. Musicians work in recording studios, perform live concerts, collaborate with other artists, compose music, or teach. They often specialize in specific genres or instruments."
        },
        {
            role: "Theater Director",
            description: "Theater directors oversee the artistic and creative elements of a theater production. They work with actors, designers, and technicians to bring a script to life on stage. Directors interpret scripts, guide performances, make casting decisions, and coordinate all aspects of a production."
        },
        {
            role: "Choreographer",
            description: "Choreographers create and arrange dance movements and sequences for performances. They work with dancers to teach and refine choreography, ensuring it matches the artistic vision and musical accompaniment. Choreographers may work in theater, film, television, music videos, or dance companies."
        },
        {
            role: "Stage Manager",
            description: "Stage managers coordinate all aspects of a theater production to ensure smooth performances. They organize rehearsals, create schedules, communicate between production departments, and oversee technical elements during performances. Stage managers are essential for maintaining the artistic vision and practical execution of a production."
        },
        {
            role: "Arts Administrator",
            description: "Arts administrators manage the business and operational aspects of arts organizations. They handle finances, marketing, fundraising, programming, and personnel management. Arts administrators work for theaters, dance companies, music ensembles, festivals, and other arts organizations."
        },
        {
            role: "Performing Arts Teacher",
            description: "Performing arts teachers instruct students in various disciplines such as music, dance, or theater. They develop lesson plans, demonstrate techniques, provide feedback, and prepare students for performances. Teachers may work in schools, conservatories, private studios, or community programs."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Traditional Performing Arts Revival",
            description: "J&K has rich traditions in performing arts including Bhand Pather, Rouf dance, Hafiza dance, and Sufiana music. Artists can work with cultural organizations to preserve and promote these art forms through performances, workshops, and documentation projects.",
            icon: "🎭"
        },
        {
            title: "Cultural Tourism Performances",
            description: "With J&K being a major tourist destination, there's growing demand for cultural performances showcasing local traditions. Performing artists can find opportunities in hotels, cultural centers, and tourist events to present the region's unique artistic heritage.",
            icon: "🏞️"
        },
        {
            title: "Government Cultural Programs",
            description: "The J&K Academy of Art, Culture and Languages regularly organizes cultural festivals, competitions, and performances. Artists can participate in these programs, receive grants, and contribute to the cultural development of the region.",
            icon: "🏛️"
        },
        {
            title: "Performing Arts Education",
            description: "There's increasing recognition of the importance of arts education in J&K. Artists with teaching skills can find opportunities in schools, colleges, and private institutions to teach various performing arts disciplines to the next generation.",
            icon: "🎓"
        },
        {
            title: "Film and Television Industry",
            description: "J&K is a popular filming location for Bollywood and regional cinema. Local performing artists can find opportunities as actors, dancers, and musicians in film productions. The growth of local television channels also creates opportunities for performers.",
            icon: "🎬"
        },
        {
            title: "Community Arts Projects",
            description: "Various NGOs and community organizations in J&K use performing arts for social change, therapy, and community building. Artists can lead workshops, direct performances, and develop projects that address social issues while preserving cultural heritage.",
            icon: "🤝"
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
        <div className="font-sans bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
            {/* Header - Sticky */}
            

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-20"></div>

            {/* Banner */}
            <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-orange-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            {/* Breadcrumb */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Arts & Humanities &gt; Performing Arts</div>
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
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(summaryRef, "summary")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-amber-600"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(opportunitiesRef, "opportunities")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-amber-600"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-amber-600"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(careerPathRef, "careerPath")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-amber-600"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-amber-600"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-amber-600"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-amber-600"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(workDescriptionRef, "workDescription")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-amber-600"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md" : "hover:bg-amber-50"}`}
                                onClick={() => scrollToSection(prosConsRef, "prosCons")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-amber-600"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>
                        {/* Demo Form */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Performing Arts?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
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
                            <div className="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Performing Arts</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Performing Arts is a field of study that encompasses various art forms performed before an audience, including dance, music, theater, and other live performances. It combines artistic expression with technical skills, requiring performers to master their craft while developing their unique artistic voice.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    A degree in Performing Arts prepares students for careers as performers, directors, choreographers, arts administrators, and educators. Students develop discipline, creativity, collaboration skills, and the ability to express ideas and emotions through performance. The field offers diverse opportunities across various performance contexts, from traditional stages to digital platforms.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/performing-arts.png" alt="Performing Arts" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Performing Arts</span>
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
                                <div key={idx} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 hover:shadow-md transition-all duration-300">
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
                                <span>Key Benefits for J&K Performing Artists</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Rich cultural heritage providing unique artistic traditions to draw from</li>
                                <li>Growing government support for preserving and promoting traditional performing arts</li>
                                <li>Increasing tourism creating demand for cultural performances</li>
                                <li>Opportunities to document and revive endangered art forms</li>
                                <li>Developing infrastructure for arts education and performance venues</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Performing Arts</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Arts background preferred)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Bachelor's in Performing Arts for 3-4 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Master's in Performing Arts for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">MPhil/PhD in Performing Arts or specialized training</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Diploma/Certificate in Performing Arts for 1-3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Advanced Diploma or specialization courses</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Professional practice or further specialization</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Important Facts */}
                        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-amber-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Many institutions require auditions or practical demonstrations as part of the admission process</li>
                                <li>Prior training or experience in the chosen performing art is often considered advantageous</li>
                                <li>Some programs may have specific physical requirements, especially for dance</li>
                                <li>Portfolio or performance videos may be required for applications to prestigious institutions</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Performing Arts Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
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
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-amber-600 underline hover:text-amber-800 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                        <p className="mb-6 text-gray-700 text-lg">Top Performing Arts Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
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
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-amber-600 underline hover:text-amber-800 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
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
                                                <a href={exam.website} target="_blank" rel="noreferrer" className="text-amber-600 underline hover:text-amber-800 transition-colors">
                                                    {exam.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(exam.website)}
                                                    className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Perform before live audiences in theaters, concert halls, or other venues</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Rehearse and refine performances through regular practice and training</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Collaborate with directors, choreographers, musicians, and other performers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Study scripts, scores, or choreography to prepare for performances</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Develop characters, interpretations, or artistic expressions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Attend auditions and casting calls for performance opportunities</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Maintain physical conditioning and technical skills through regular training</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Promote performances through interviews, social media, and public appearances</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Teach performing arts techniques to students in educational settings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>Create original works, compositions, or choreographies for performance</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Performing Arts</span>
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
                                        <span>Opportunity to express creativity and passion</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Connection with audiences and emotional fulfillment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Diverse career paths in various performance contexts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Continuous learning and skill development</span>
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
                                        <span>Highly competitive field with limited stable positions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Irregular income and job security, especially early in career</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Physical and emotional demands of performance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Need for continuous self-promotion and networking</span>
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