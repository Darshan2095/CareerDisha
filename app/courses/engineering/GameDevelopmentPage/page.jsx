"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GameDevelopmentPage() {
    const [copied, setCopied] = useState("");
    const [activeSection, setActiveSection] = useState("summary");

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
    // Game development institutes in India
    const institutesIndia = [
        { college: "National Institute of Design (NID)", location: "Ahmedabad", website: "https://www.nid.edu/" },
        { college: "Arena Animation", location: "Mumbai", website: "https://www.arenaanimation.com/" },
        { college: "Zee Institute of Creative Art (ZICA)", location: "Mumbai", website: "https://www.zica.org/" },
        { college: "Whistling Woods International", location: "Mumbai", website: "https://www.whistlingwoods.net/" },
        { college: "DSK Supinfocom", location: "Pune", website: "https://www.dskic.com/" },
        { college: "Backstage Pass Institute of Gaming", location: "Hyderabad", website: "https://backstagepass.co.in/" },
        { college: "Indian Institute of Digital Art & Animation", location: "Kolkata", website: "http://www.iidaa.in/" },
        { college: "Maya Academy of Advanced Cinematics", location: "Bangalore", website: "https://www.maacindia.com/" },
        { college: "Seamedu School of Pro-Expressionism", location: "Pune", website: "https://www.seamedu.com/" },
    ];

    // Game development institutes abroad
    const institutesWorld = [
        { college: "DigiPen Institute of Technology", location: "United States", website: "https://www.digipen.edu/" },
        { college: "Full Sail University", location: "United States", website: "https://www.fullsail.edu/" },
        { college: "The Guildhall at SMU", location: "United States", website: "https://www.smu.edu/guildhall" },
        { college: "Vancouver Film School", location: "Canada", website: "https://www.vfs.edu/" },
        { college: "Abertay University", location: "United Kingdom", website: "https://www.abertay.ac.uk/" },
        { college: "Breda University of Applied Sciences", location: "Netherlands", website: "https://www.buas.nl/" },
        { college: "Academy of Interactive Entertainment", location: "Australia", website: "https://www.aie.edu.au/" },
        { college: "Tokyo University of the Arts", location: "Japan", website: "https://www.geidai.ac.jp/english/" },
        { college: "ISART Digital", location: "France", website: "https://www.isart.com/en/" },
    ];

    // Entrance exams for game development
    const entranceExams = [
        {
            college: "NID Design Aptitude Test (DAT)",
            date: "January",
            elements: "Design Aptitude, Drawing, Creativity, Problem Solving",
            website: "https://www.nid.edu/admissions",
        },
        {
            college: "UCEED",
            date: "January",
            elements: "Visualization, Observation, Design Sensitivity, Problem Solving",
            website: "https://uceed.iitb.ac.in/",
        },
        {
            college: "NIFT Entrance Test",
            date: "February",
            elements: "Creative Ability Test, General Ability Test, Situation Test",
            website: "https://nift.ac.in/admissions",
        },
        {
            college: "Pearl Academy Entrance Exam",
            date: "January-April",
            elements: "General Proficiency Test, Design Aptitude Test, Personal Interview",
            website: "https://www.pearlacademy.com/",
        },
    ];

    // Professional opportunities in game development
    const professionalOpportunities = [
        {
            role: "Game Designer",
            description: "Game designers create the concept, storyline, characters, and gameplay mechanics of a game. They develop the core elements that define the player's experience and work closely with artists and programmers to bring their vision to life. Game designers also balance game mechanics to ensure engaging and fair gameplay."
        },
        {
            role: "Game Programmer",
            description: "Game programmers write the code that makes games function. They implement game mechanics, physics, artificial intelligence, graphics, and user interfaces. They work closely with designers to translate creative concepts into functional game systems and optimize performance across different platforms."
        },
        {
            role: "Game Artist",
            description: "Game artists create the visual elements of games, including characters, environments, objects, and special effects. They use software like Maya, Blender, Photoshop, and ZBrush to create 2D and 3D assets. Artists must balance aesthetic appeal with technical constraints to ensure their work integrates smoothly into the game engine."
        },
        {
            role: "Level Designer",
            description: "Level designers craft the specific environments, challenges, and puzzles that players experience in a game. They arrange game assets to create engaging spaces that guide players through the narrative while providing appropriate challenges. Level designers must balance gameplay difficulty and pacing to maintain player engagement."
        },
        {
            role: "Game Producer",
            description: "Game producers manage the development process from concept to release. They coordinate teams, set schedules, manage budgets, and ensure that the project meets its goals. Producers act as liaisons between different departments and stakeholders, making key decisions to keep the project on track."
        },
        {
            role: "Audio Engineer",
            description: "Audio engineers create and implement the sound elements of games, including music, sound effects, and voice acting. They work with composers and voice actors to produce audio assets and integrate them into the game engine. Audio engineers ensure that sound enhances the gameplay experience and supports the game's atmosphere."
        },
        {
            role: "Quality Assurance Tester",
            description: "QA testers identify bugs, glitches, and gameplay issues by systematically testing games. They document problems and provide detailed reports to help developers fix issues. Testers evaluate gameplay balance, user interface functionality, and overall player experience to ensure the game meets quality standards before release."
        },
        {
            role: "Technical Artist",
            description: "Technical artists bridge the gap between artists and programmers. They develop tools and workflows to improve the art pipeline, create shaders, optimize assets for performance, and solve technical art challenges. Technical artists ensure that visual assets integrate efficiently into the game engine while maintaining artistic vision."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Cultural Game Development",
            description: "Creating games based on Kashmiri folklore, history, and culture presents unique opportunities. Developers can create immersive experiences that preserve and promote local heritage through interactive storytelling and gameplay.",
            icon: "🎭"
        },
        {
            title: "Tourism-Based Gaming",
            description: "Developing virtual tours, AR experiences, and mobile games showcasing Kashmir's scenic beauty and tourist destinations. These projects can boost tourism while creating engaging digital experiences for global audiences.",
            icon: "🏔️"
        },
        {
            title: "Educational Game Development",
            description: "Creating educational games for local schools and institutions that address regional educational needs. These games can cover subjects like local history, environmental conservation, and cultural preservation.",
            icon: "🎓"
        },
        {
            title: "Mobile Game Startups",
            description: "Growing mobile game development scene in J&K with support from government initiatives. Local developers are creating casual and hyper-casual games for global markets, leveraging improved digital infrastructure.",
            icon: "📱"
        },
        {
            title: "Remote Work Opportunities",
            description: "Improved internet connectivity has enabled J&K-based game developers to work with national and international studios. Remote positions in game art, programming, and design offer competitive salaries without relocation.",
            icon: "💻"
        },
        {
            title: "Game Development Education",
            description: "Emerging game development courses and workshops at local universities and training centers. These programs are building local talent pipelines and creating teaching opportunities for experienced professionals.",
            icon: "🎮"
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            {/* Breadcrumb */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Game Development &gt; Game Development</div>
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

            <div className="flex px-8 py-8 gap-8 max-w-7xl mx.auto">
                {/* Sidebar */}
                <aside className="w-1/4 pr-6">
                    <div className="sticky top-24 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        <ul className="space-y-1 p-2">
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(summaryRef, "summary")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-purple-600"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(opportunitiesRef, "opportunities")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-purple-600"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-purple-600"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(careerPathRef, "careerPath")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-purple-600"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-purple-600"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-purple-600"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-purple-600"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(workDescriptionRef, "workDescription")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-purple-600"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md" : "hover:bg-purple-50"}`}
                                onClick={() => scrollToSection(prosConsRef, "prosCons")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-purple-600"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>

                        {/* Demo Form */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Game Development?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                            />
                            <button className="w-full bg-gradient.to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">Take Free Demo</button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-3/4">
                    {/* Summary Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={summaryRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Game Development</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Game Development is the art of creating games and describes the design, development and release of a game. It involves concept generation, design, build, test and release. A game developer could be a programmer, a sound designer, an artist, a designer or many other roles available in the industry.
                                    <br /><br />
                                    Game development is a challenging but rewarding field that combines creativity, technical skills, and storytelling. With the growth of the gaming industry, there are increasing opportunities for talented individuals to create immersive experiences for players worldwide.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/Game_Development.png" alt="Game Development" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Game Development</span>
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

                    {/* Jammu and Kashmir Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={jammuKashmirRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏔️</span>
                            <span>Opportunities in Jammu and Kashmir</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jammuKashmirOpportunities.map((opportunity, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300">
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
                                <li>Growing government support for digital and creative industries</li>
                                <li>Lower operational costs compared to major metropolitan cities</li>
                                <li>Unique cultural heritage that can be showcased through games</li>
                                <li>Improving digital infrastructure supporting remote work</li>
                                <li>Opportunity to be pioneers in the regional game development scene</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Game Development</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-purple-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Arts/Commerce/Science)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue B.Sc in Game Design or B.Des in Game Art for 3-4 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue M.Sc in Game Design or M.Des in Game Development for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Specialized certifications in game engines, VR/AR development</td>
                                    </tr>
                                    <tr className="hover:bg-purple-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII in Science Stream with Computer Science</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue B.Tech in Computer Science with Game Development specialization for 4 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue M.Tech in Game Technology or M.Sc in Game Programming for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Advanced certifications in game engines, AI in games</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Important Facts */}
                        <div className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-purple-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Strong portfolio showcasing game projects is often more important than formal education</li>
                                <li>Proficiency in game engines like Unity or Unreal Engine is essential for most roles</li>
                                <li>Many successful game developers are self-taught through online tutorials and communities</li>
                                <li>Participation in game jams and indie projects can provide valuable experience</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Game Development Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient.to-r from-purple-50 to-indigo-50">
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
                                                    className="text-xs bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                        <p className="mb-6 text-gray-700 text-lg">Top Game Development Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
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
                                                    className="text-xs bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
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
                                                    className="text-xs bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <span>Design game mechanics, storylines, characters, and levels</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Program game logic, physics, AI, and user interfaces</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Create 2D/3D art assets including characters, environments, and objects</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Implement audio elements including music, sound effects, and voice acting</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Test games for bugs, gameplay issues, and overall quality</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Optimize game performance for different platforms and devices</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Collaborate with multidisciplinary teams to bring games to life</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Stay updated with the latest game development tools and technologies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Balance gameplay elements to ensure engaging player experiences</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-2">•</span>
                                <span>Manage project timelines and resources to meet development goals</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Game Development</span>
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
                                        <span>Creative and dynamic work environment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Growing industry with increasing job opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunity to work on innovative projects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Potential for high earnings in successful projects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Strong community and networking opportunities</span>
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
                                        <span>Highly competitive industry</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Long working hours, especially near deadlines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Constant need to update skills with new technologies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Project instability in some companies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Pressure to meet tight deadlines</span>
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