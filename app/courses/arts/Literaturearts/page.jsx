"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LiteratureArtsPage() {
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

    const institutesIndia = [
        { college: "Jawaharlal Nehru University", location: "Delhi", website: "https://www.jnu.ac.in/" },
        { college: "University of Delhi", location: "Delhi", website: "https://www.du.ac.in/" },
        { college: "English and Foreign Languages University", location: "Hyderabad", website: "https://efluniversity.ac.in/" },
        { college: "Banaras Hindu University", location: "Varanasi", website: "https://www.bhu.ac.in/" },
        { college: "University of Calcutta", location: "Kolkata", website: "https://www.caluniv.ac.in/" },
        { college: "Jamia Millia Islamia", location: "Delhi", website: "https://www.jmi.ac.in/" },
        { college: "University of Mumbai", location: "Mumbai", website: "https://www.mu.ac.in/" },
        { college: "University of Madras", location: "Chennai", website: "https://www.unom.ac.in/" },
        { college: "Osmania University", location: "Hyderabad", website: "https://www.osmania.ac.in/" },
    ];

    const institutesWorld = [
        { college: "University of Oxford", location: "United Kingdom", website: "https://www.ox.ac.uk/" },
        { college: "Harvard University", location: "United States", website: "https://www.harvard.edu/" },
        { college: "University of Cambridge", location: "United Kingdom", website: "https://www.cam.ac.uk/" },
        { college: "Yale University", location: "United States", website: "https://www.yale.edu/" },
        { college: "Stanford University", location: "United States", website: "https://www.stanford.edu/" },
        { college: "University of Toronto", location: "Canada", website: "https://www.utoronto.ca/" },
        { college: "University of Melbourne", location: "Australia", website: "https://www.unimelb.edu.au/" },
        { college: "Sorbonne University", location: "France", website: "https://www.sorbonne-universite.fr/" },
        { college: "University of Edinburgh", location: "United Kingdom", website: "https://www.ed.ac.uk/" },
    ];

    const entranceExams = [
        {
            college: "CUET (UG)",
            date: "Application - Feb-March, Examination - May-June",
            elements: "Language, Domain Specific Subjects (Literature), General Awareness",
            website: "https://cuet.samarth.ac.in/",
        },
        {
            college: "Jawaharlal Nehru University Entrance Exam",
            date: "May",
            elements: "General Awareness, Reasoning, Language Comprehension, Literature Specific",
            website: "https://www.jnu.ac.in/",
        },
        {
            college: "Delhi University Entrance Test",
            date: "June",
            elements: "Language Comprehension, Literature, General Knowledge",
            website: "https://www.du.ac.in/",
        },
        {
            college: "EFLU Entrance Test",
            date: "April-May",
            elements: "Language Proficiency, Literature, Reasoning",
            website: "https://efluniversity.ac.in/",
        },
    ];

    const professionalOpportunities = [
        { role: "Writer/Author", description: "Writers and authors create written works such as books, articles, scripts, and other content. They may write fiction or non-fiction, and their work can be published in various formats including print and digital media. Authors often research topics, develop ideas, and revise their work based on feedback." },
        { role: "Editor", description: "Editors review and revise content for publication, ensuring clarity, accuracy, and consistency. They work with writers to improve their work, check for grammatical errors, and verify facts. Editors may specialize in specific types of content such as books, magazines, websites, or academic journals." },
        { role: "Journalist", description: "Journalists research, write, and report news stories for various media outlets. They investigate events, interview sources, and present information in an objective manner. Journalists may work for newspapers, magazines, television, radio, or online news platforms." },
        { role: "Translator/Interpreter", description: "Translators convert written text from one language to another while preserving meaning and tone. Interpreters translate spoken language in real-time during conferences, meetings, or legal proceedings. Both require deep knowledge of multiple languages and cultures." },
        { role: "Content Writer", description: "Content writers create engaging written material for websites, blogs, social media, and marketing materials. They research topics, understand target audiences, and produce content that informs, entertains, or persuades readers. Content writers often work in digital marketing or media companies." },
        { role: "Literary Critic", description: "Literary critics analyze and evaluate literary works, providing insights into their meaning, style, and significance. They write reviews, essays, and scholarly articles that help readers understand and appreciate literature. Critics may work for publications, academic institutions, or as independent writers." },
        { role: "Academic Researcher", description: "Academic researchers in literature and languages conduct scholarly research on literary works, linguistic phenomena, or cultural studies. They publish their findings in academic journals, present at conferences, and often teach at universities. Researchers contribute to the advancement of knowledge in their field." },
        { role: "Technical Writer", description: "Technical writers create documentation that explains complex information clearly and concisely. They produce instruction manuals, user guides, and other technical materials. Technical writers work in various industries including software, engineering, and healthcare." }
    ];

    const jammuKashmirOpportunities = [
        { title: "Kashmiri Literature Revival", description: "J&K has a rich literary heritage with Kashmiri, Dogri, and other regional languages. There's growing demand for writers, translators, and researchers to preserve and promote these languages through literature, translation projects, and academic research.", icon: "📚" },
        { title: "Cultural Documentation", description: "The region's unique cultural traditions and oral histories need documentation. Literature graduates can work with cultural institutions, NGOs, and government bodies to document folk tales, poetry, and historical narratives through written publications.", icon: "📝" },
        { title: "Tourism Content Creation", description: "With J&K being a major tourist destination, there's demand for content creators who can write about the region's history, culture, and attractions. Opportunities exist in travel writing, tourism websites, and creating promotional content for the tourism industry.", icon: "🏞️" },
        { title: "Media and Publishing", description: "The growing media landscape in J&K offers opportunities for journalists, editors, and content writers. Local newspapers, magazines, and online platforms need skilled writers to report on regional issues and create engaging content.", icon: "📰" },
        { title: "Academic Institutions", description: "Universities and colleges in J&K are expanding their literature and language departments. There are opportunities for teaching, research, and curriculum development in regional languages, English literature, and comparative literature.", icon: "🎓" },
        { title: "Government Communication", description: "Government initiatives in J&K require skilled writers for creating public awareness materials, policy documents, and official communications. Literature graduates can find roles in public relations, content creation, and communication departments.", icon: "🏛️" }
    ];

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(""), 2000);
    };

    const scrollToSection = (sectionRef, sectionId) => {
        setActiveSection(sectionId);
        if (sectionRef.current) {
            const headerHeight = 80;
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
        <div className="font-sans bg-gradient-to-br from-teal-50 to-cyan-50 min-h-screen">
            <div className="h-20"></div>

            <section className="text-white h-48 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-cyan-900/70"></div>
                <h2 className="text-4xl font-bold relative z-10 tracking-wide">Career Library</h2>
            </section>

            <div className="px-8 py-4 flex items-center justify-between text-sm text-gray-600">
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Arts & Humanities &gt; Literature & Languages</div>
                <div className="relative">
                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                <aside className="w-1/4 pr-6">
                    <div className="sticky top-24 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                        <ul className="space-y-1 p-2">
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "summary" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(summaryRef, "summary")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "summary" ? "text-white" : "text-teal-600"}`}>📄</span>
                                    <span>Summary</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "opportunities" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(opportunitiesRef, "opportunities")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "opportunities" ? "text-white" : "text-teal-600"}`}>🎯</span>
                                    <span>Professional Opportunities</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "jammuKashmir" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(jammuKashmirRef, "jammuKashmir")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "jammuKashmir" ? "text-white" : "text-teal-600"}`}>🏔️</span>
                                    <span>J&K Opportunities</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "careerPath" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(careerPathRef, "careerPath")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "careerPath" ? "text-white" : "text-teal-600"}`}>🛤️</span>
                                    <span>Career Path</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "leadingInstitutes" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(leadingInstitutesRef, "leadingInstitutes")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "leadingInstitutes" ? "text-white" : "text-teal-600"}`}>🏫</span>
                                    <span>Leading Institutes</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "institutionsAbroad" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(institutionsAbroadRef, "institutionsAbroad")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "institutionsAbroad" ? "text-white" : "text-teal-600"}`}>🌍</span>
                                    <span>Institutions Abroad</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "entranceExams" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(entranceExamsRef, "entranceExams")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "entranceExams" ? "text-white" : "text-teal-600"}`}>📝</span>
                                    <span>Entrance Exams</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "workDescription" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(workDescriptionRef, "workDescription")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "workDescription" ? "text-white" : "text-teal-600"}`}>💼</span>
                                    <span>Work Description</span>
                                </div>
                            </li>
                            <li className={`p-3 cursor-pointer rounded-lg transition-all duration-300 ${activeSection === "prosCons" ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md" : "hover:bg-teal-50"}`} onClick={() => scrollToSection(prosConsRef, "prosCons")}>
                                <div className="flex items-center gap-3">
                                    <span className={`text-lg ${activeSection === "prosCons" ? "text-white" : "text-teal-600"}`}>⚖️</span>
                                    <span>Pros & Cons</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-t border-gray-100">
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Literature & Languages?</h3>
                            <p className="text-sm text-gray-600 mb-4">Take the world's most-advanced assessment!</p>
                            <input type="email" placeholder="Your email address" className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all" />
                            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">Take Free Demo</button>
                        </div>
                    </div>
                </aside>

                <main className="w-3/4">
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={summaryRef}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-gray-800">Literature & Languages</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">Literature & Languages is a field of study that explores written works, linguistic structures, and cultural expressions through language. It encompasses the analysis of literary texts, the study of language systems, and the examination of how language shapes and reflects human experience.</p>
                                <p className="text-gray-700 leading-relaxed text-lg mt-4">A degree in Literature & Languages develops critical thinking, analytical skills, and effective communication abilities. Students engage with diverse literary traditions, explore linguistic theories, and develop strong writing skills. This field prepares graduates for careers in writing, education, publishing, translation, and various communication-focused roles.</p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="/literature.png" alt="Literature & Languages" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Literature & Languages</span>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {jammuKashmirOpportunities.map((opportunity, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100 hover:shadow-md transition-all duration-300">
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
                                <span>Key Benefits for J&K Literature & Language Professionals</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Rich linguistic heritage with multiple regional languages to study and preserve</li>
                                <li>Growing government support for literature in regional languages</li>
                                <li>Unique cultural narratives that offer distinctive research and writing opportunities</li>
                                <li>Increasing demand for content creation in the tourism and media sectors</li>
                                <li>Opportunities to contribute to cultural preservation and documentation efforts</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Literature & Languages</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Graduation</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">After Post Graduation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-teal-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with Any Stream (Humanities preferred)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue BA in Literature/Languages for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MA in Literature/Languages for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">MPhil/PhD in Literature/Languages or specialization</td>
                                    </tr>
                                    <tr className="hover:bg-teal-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with Any Stream</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Integrated BA-MA program for 5 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Specialized diploma/certification courses</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Professional practice or further specialization</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <span className="text-teal-600">✔️</span>
                                <span>Important Facts</span>
                            </h4>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Strong command over language and good reading habits are essential</li>
                                <li>Some universities may have specific language proficiency requirements</li>
                                <li>Writing samples or portfolios may be required for admission to prestigious programs</li>
                                <li>Participation in literary activities, debates, or writing competitions can strengthen applications</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Literature & Languages Institutes in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesIndia.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-teal-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button onClick={() => handleCopy(inst.website)} className="text-xs bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300">
                                                    {copied === inst.website ? "Copied!" : "Copy"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={institutionsAbroadRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🌍</span>
                            <span>Institutions Abroad</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Literature & Languages Institutes in the World</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Location</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {institutesWorld.map((inst, idx) => (
                                        <tr key={idx} className="hover:bg-teal-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text.gray-800">{inst.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{inst.location}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={inst.website} target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800 transition-colors">
                                                    {inst.website}
                                                </a>
                                                <button onClick={() => handleCopy(inst.website)} className="text-xs bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300">
                                                    {copied === inst.website ? "Copied!" : "Copy"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={entranceExamsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📝</span>
                            <span>Important Entrance Exams</span>
                        </h3>
                        <h4 className="text-lg font-medium mb-5 text-gray-800 flex items-center gap-2">
                            <span className="text-teal-600">🎓</span>
                            <span>Undergraduate</span>
                        </h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-teal-50 to-cyan-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">College</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Tentative Date</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Important Elements</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {entranceExams.map((exam, idx) => (
                                        <tr key={idx} className="hover:bg-teal-50 transition-colors duration-200">
                                            <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">{exam.college}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.date}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{exam.elements}</td>
                                            <td className="border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                                <a href={exam.website} target="_blank" rel="noreferrer" className="text-teal-600 underline hover:text-teal-800 transition-colors">{exam.website}</a>
                                                <button onClick={() => handleCopy(exam.website)} className="text-xs bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full hover:shadow-md transition-all duration-300">{copied === exam.website ? "Copied!" : "Copy"}</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={workDescriptionRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">💼</span>
                            <span>Work Description</span>
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-3">
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Analyze literary texts, identifying themes, structures, and cultural contexts</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Write original content including articles, stories, essays, and research papers</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Edit and revise written material for clarity, accuracy, and style</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Conduct research on literary topics, linguistic phenomena, or cultural studies</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Translate written or spoken content between languages</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Teach language and literature concepts to students in educational settings</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Develop curriculum and educational materials for language learning</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Create content for various media including websites, publications, and marketing materials</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Collaborate with other writers, editors, and creative professionals</span></li>
                            <li className="flex items-start"><span className="text-teal-500 mr-2">•</span><span>Stay updated on literary trends, linguistic research, and cultural developments</span></li>
                        </ul>
                    </section>

                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Literature & Languages</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2"><span className="text-green-600">✓</span><span>Pros</span></h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Strong foundation in critical thinking and communication</span></li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Diverse career paths across multiple industries</span></li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Opportunities for creative expression and intellectual growth</span></li>
                                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>Transferable skills valuable in many professional contexts</span></li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items.center gap-2"><span className="text-rose-600">✗</span><span>Cons</span></h4>
                                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>Highly competitive field, especially in creative writing</span></li>
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>Income can be inconsistent for freelance writers</span></li>
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>May require advanced degrees for academic positions</span></li>
                                    <li className="flex items-start"><span className="text-rose-500 mr-2">•</span><span>Continuous learning required to stay relevant</span></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

