"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PhilosophyPage() {
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
        { college: "University of Delhi", location: "Delhi", website: "https://www.du.ac.in/" },
        { college: "Jawaharlal Nehru University", location: "Delhi", website: "https://www.jnu.ac.in/" },
        { college: "Banaras Hindu University", location: "Varanasi", website: "https://www.bhu.ac.in/" },
        { college: "University of Calcutta", location: "Kolkata", website: "https://www.caluniv.ac.in/" },
        { college: "University of Mumbai", location: "Mumbai", website: "https://www.mu.ac.in/" },
        { college: "University of Hyderabad", location: "Hyderabad", website: "https://www.uohyd.ac.in/" },
        { college: "Savitribai Phule Pune University", location: "Pune", website: "https://www.unipune.ac.in/" },
        { college: "Madras Christian College", location: "Chennai", website: "https://www.mcc.edu.in/" },
        { college: "St. Stephen's College", location: "Delhi", website: "https://www.ststephens.edu/" },
    ];

    const institutesWorld = [
        { college: "University of Oxford", location: "United Kingdom", website: "https://www.ox.ac.uk/" },
        { college: "Harvard University", location: "United States", website: "https://www.harvard.edu/" },
        { college: "University of Cambridge", location: "United Kingdom", website: "https://www.cam.ac.uk/" },
        { college: "Yale University", location: "United States", website: "https://www.yale.edu/" },
        { college: "Stanford University", location: "United States", website: "https://www.stanford.edu/" },
        { college: "University of Toronto", location: "Canada", website: "https://www.utoronto.ca/" },
        { college: "Sorbonne University", location: "France", website: "https://www.sorbonne-universite.fr/" },
        { college: "University of Melbourne", location: "Australia", website: "https://www.unimelb.edu.au/" },
        { college: "Heidelberg University", location: "Germany", website: "https://www.uni-heidelberg.de/" },
    ];

    const entranceExams = [
        {
            college: "CUET (UG)",
            date: "Application - Feb-March, Examination - May-June",
            elements: "Language, Domain Specific Subjects (Philosophy), General Awareness",
            website: "https://cuet.samarth.ac.in/",
        },
        {
            college: "Jawaharlal Nehru University Entrance Exam",
            date: "May",
            elements: "General Awareness, Reasoning, Philosophy Specific",
            website: "https://www.jnu.ac.in/",
        },
        {
            college: "Delhi University Entrance Test",
            date: "June",
            elements: "Philosophy, General Knowledge, Reasoning",
            website: "https://www.du.ac.in/",
        },
        {
            college: "Banaras Hindu University UET",
            date: "May-June",
            elements: "Philosophy, Mental Ability, General Knowledge",
            website: "https://www.bhu.ac.in/",
        },
    ];

    // Professional opportunities with descriptions
    const professionalOpportunities = [
        {
            role: "Philosophy Professor",
            description: "Philosophy professors teach courses in philosophy at colleges and universities. They develop curriculum, conduct research, publish scholarly articles and books, and mentor students. Professors often specialize in specific areas such as ethics, metaphysics, epistemology, or the history of philosophy."
        },
        {
            role: "Ethics Consultant",
            description: "Ethics consultants provide guidance on moral and ethical issues in various fields including business, healthcare, technology, and government. They help organizations develop ethical policies, address ethical dilemmas, and ensure compliance with ethical standards. This role requires strong analytical skills and knowledge of ethical frameworks."
        },
        {
            role: "Policy Analyst",
            description: "Policy analysts research, analyze, and evaluate policies and their impacts. They work for government agencies, think tanks, and non-profit organizations. Philosophy graduates bring critical thinking and ethical reasoning skills to this role, helping to develop well-reasoned and just policies."
        },
        {
            role: "Writer/Author",
            description: "Philosophy graduates often pursue careers as writers, creating books, articles, essays, and other content that explores philosophical ideas. They may write for academic publications, popular media, or create their own independent works. Philosophy provides a strong foundation for clear, logical, and persuasive writing."
        },
        {
            role: "Lawyer",
            description: "Many philosophy graduates go on to study law and become lawyers. The analytical reasoning, argumentation skills, and ethical understanding developed in philosophy are highly valuable in the legal profession. Philosophy graduates excel at constructing logical arguments and analyzing complex issues."
        },
        {
            role: "Counselor/Therapist",
            description: "Philosophy provides a strong foundation for careers in counseling and therapy. Philosophical counseling helps individuals examine their beliefs, values, and life choices. Some philosophy graduates pursue additional training in psychology or counseling to work as therapists who incorporate philosophical approaches."
        },
        {
            role: "Journalist",
            description: "Philosophy graduates bring critical thinking and analytical skills to journalism. They excel at examining complex issues, constructing logical arguments, and presenting ideas clearly. Philosophy journalists often focus on areas such as ethics, politics, culture, and ideas."
        },
        {
            role: "Corporate Ethics Officer",
            description: "Corporate ethics officers ensure that businesses operate ethically and in compliance with relevant laws and regulations. They develop codes of conduct, provide ethics training, investigate ethical violations, and advise on ethical decision-making. This role requires the ethical reasoning skills that philosophy education provides."
        }
    ];

    // Jammu and Kashmir opportunities
    const jammuKashmirOpportunities = [
        {
            title: "Kashmiri Shaivism Studies",
            description: "J&K has a rich tradition of philosophical thought, particularly Kashmiri Shaivism. Philosophy graduates can work with research institutions to study, document, and promote this unique philosophical tradition. Opportunities exist in research, teaching, and cultural preservation.",
            icon: "🧘"
        },
        {
            title: "Peace and Conflict Resolution",
            description: "Given the complex social and political context of J&K, there's growing need for philosophers to contribute to peace-building and conflict resolution initiatives. Philosophy graduates can work with NGOs, think tanks, and community organizations to facilitate dialogue and develop frameworks for peaceful coexistence.",
            icon: "☮️"
        },
        {
            title: "Ethics Education",
            description: "Educational institutions in J&K are increasingly recognizing the importance of ethics and philosophy education. Philosophy graduates can find opportunities teaching ethics, critical thinking, and philosophy in schools, colleges, and universities across the region.",
            icon: "🎓"
        },
        {
            title: "Cultural Heritage Documentation",
            description: "J&K has a rich cultural and intellectual heritage that needs documentation and preservation. Philosophy graduates can work on projects to record and analyze the philosophical traditions, beliefs, and intellectual history of the region's diverse communities.",
            icon: "📜"
        },
        {
            title: "Interfaith Dialogue",
            description: "J&K is home to diverse religious and philosophical traditions. Philosophy graduates with knowledge of comparative religion and philosophy can facilitate interfaith dialogues, promoting understanding and respect between different communities.",
            icon: "🤝"
        },
        {
            title: "Public Policy Development",
            description: "As J&K undergoes political and social changes, there's need for thoughtful policy development. Philosophy graduates can work with government agencies and NGOs to contribute their analytical and ethical reasoning skills to policy formulation and evaluation.",
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
        <div className="font-sans bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
            {/* Header - Sticky */}
            

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-20"></div>

            {/* Banner */}
            <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            {/* Breadcrumb */}
            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Arts & Humanities &gt; Philosophy</div>
                {/* Dropdown */}
                <div className="relative">
                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(summaryRef, "summary")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-indigo-700"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(opportunitiesRef, "opportunities")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-indigo-700"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-indigo-700"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(careerPathRef, "careerPath")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-indigo-700"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-indigo-700"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-indigo-700"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-indigo-700"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(workDescriptionRef, "workDescription")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-indigo-700"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li
                                className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md" : "hover:bg-indigo-50"}`}
                                onClick={() => scrollToSection(prosConsRef, "prosCons")}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-indigo-700"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>
                        {/* Demo Form */}
                        <div className="mt-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Philosophy?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
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
                            <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Philosophy</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Philosophy is the study of fundamental questions about existence, knowledge, values, reason, mind, and language. It involves critical examination of concepts, arguments, and beliefs to develop a deeper understanding of reality and human experience. Philosophy explores questions that have puzzled humanity for centuries, such as "What is the nature of reality?" "What is knowledge?" and "How should we live?"
                                </p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                                    A degree in Philosophy develops critical thinking, logical reasoning, and analytical skills that are highly valued in many professions. Philosophy students learn to analyze complex arguments, identify underlying assumptions, and construct coherent positions on difficult issues. These skills are transferable to careers in law, education, business, politics, and many other fields.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/Philosophy.png" alt="Philosophy" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Philosophy</span>
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
                                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 hover:shadow-md transition-all duration-300">
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
                                <span>Key Benefits for J&K Philosophy Professionals</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Rich philosophical traditions including Kashmiri Shaivism to explore and preserve</li>
                                <li>Opportunities to contribute to peace-building and conflict resolution in the region</li>
                                <li>Growing demand for ethics education in academic institutions</li>
                                <li>Unique cultural context for applied philosophical research</li>
                                <li>Increasing recognition of philosophy's role in public policy development</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Philosophy</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Humanities preferred)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BA in Philosophy for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MA in Philosophy for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">MPhil/PhD in Philosophy or specialization</td>
                                    </tr>
                                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Integrated BA-MA program in Philosophy for 5 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Specialized diploma/certification courses</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Professional practice or further specialization</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Important Facts */}
                        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-indigo-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Strong analytical and critical thinking skills are essential for success in philosophy</li>
                                <li>Some universities may require entrance exams or interviews for admission to philosophy programs</li>
                                <li>Participation in debates, essay competitions, or philosophy clubs can strengthen applications</li>
                                <li>Reading widely in philosophy and related fields is highly recommended before pursuing this degree</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Philosophy Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesIndia.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-indigo-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-indigo-700 underline hover:text-indigo-900 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                        <p className="mb-6 text-gray-700 text-lg">Top Philosophy Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesWorld.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-indigo-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-indigo-700 underline hover:text-indigo-900 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(inst.website)}
                                                    className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                            <span className="text-indigo-600">🎓</span>
                            <span>Undergraduate</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Important Elements</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entranceExams.map((exam, idx) => (
                                        <tr key={idx} className="hover:bg-indigo-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{exam.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.date}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.elements}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={exam.website} target="_blank" rel="noreferrer" className="text-indigo-700 underline hover:text-indigo-900 transition-colors">
                                                    {exam.website}
                                                </a>
                                                <button
                                                    onClick={() => handleCopy(exam.website)}
                                                    className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300"
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
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Analyze philosophical texts, arguments, and concepts to understand their meaning and implications</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Develop logical arguments to support or critique philosophical positions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Teach philosophical concepts and theories to students in educational settings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Conduct research on philosophical questions and publish findings in academic journals or books</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Apply philosophical principles to ethical dilemmas in various professional contexts</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Facilitate discussions and debates on philosophical topics in academic or public forums</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Develop ethical guidelines and policies for organizations and institutions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Write articles, books, or other content that explains philosophical ideas to broader audiences</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Collaborate with professionals from other disciplines to address complex interdisciplinary questions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Stay updated on current philosophical debates and developments in the field</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Philosophy</span>
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
                                        <span>Develops exceptional critical thinking and analytical skills</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Transferable skills valued across many professions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Intellectual fulfillment from exploring fundamental questions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Strong foundation for further studies in law, politics, and other fields</span>
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
                                        <span>Limited direct career paths without further education</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Academic positions are highly competitive</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>May require advanced degrees for many specialized roles</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Abstract nature of the field may not appeal to everyone</span>
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