"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MedicalResearchPage() {
    const [copied, setCopied] = useState("");
    const [activeSection, setActiveSection] = useState("summary");

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

    const router = useRouter();

    const handleCareerChange = (e) => {
        const value = e.target.value;
        if (value) {
            router.push(value);
        }
    };

    // Top medical research institutes in India
    const institutesIndia = [
        { college: "Indian Council of Medical Research (ICMR)", location: "New Delhi", website: "https://www.icmr.gov.in" },
        { college: "National Institute of Immunology (NII)", location: "New Delhi", website: "https://www.nii.ac.in" },
        { college: "Centre for Cellular and Molecular Biology (CCMB)", location: "Hyderabad", website: "https://www.ccmb.res.in" },
        { college: "National Centre for Biological Sciences (NCBS)", location: "Bangalore", website: "https://www.ncbs.res.in" },
        { college: "National Institute of Virology (NIV)", location: "Pune", website: "https://www.niv.co.in" },
        { college: "Tata Institute of Fundamental Research (TIFR)", location: "Mumbai", website: "https://www.tifr.res.in" },
        { college: "Indian Institute of Science (IISc)", location: "Bangalore", website: "https://www.iisc.ac.in" },
        { college: "National Institute of Biomedical Genomics (NIBMG)", location: "Kalyani", website: "https://www.nibmg.ac.in" },
        { college: "Translational Health Science and Technology Institute (THSTI)", location: "Faridabad", website: "https://www.thsti.res.in" },
    ];

    // Top medical research institutions abroad
    const institutesWorld = [
        { college: "National Institutes of Health (NIH)", location: "United States", website: "https://www.nih.gov" },
        { college: "World Health Organization (WHO)", location: "Switzerland", website: "https://www.who.int" },
        { college: "Wellcome Sanger Institute", location: "United Kingdom", website: "https://www.sanger.ac.uk" },
        { college: "Max Planck Institute", location: "Germany", website: "https://www.mpg.de" },
        { college: "Karolinska Institute", location: "Sweden", website: "https://ki.se" },
        { college: "Broad Institute of MIT and Harvard", location: "United States", website: "https://www.broadinstitute.org" },
        { college: "Pasteur Institute", location: "France", website: "https://www.pasteur.fr" },
        { college: "University of Oxford Medical Sciences Division", location: "United Kingdom", website: "https://www.medsci.ox.ac.uk" },
        { college: "Johns Hopkins Bloomberg School of Public Health", location: "United States", website: "https://www.jhsph.edu" },
    ];

    // Medical research entrance exams in India
    const entranceExams = [
        {
            college: "CSIR-UGC NET (Life Sciences)",
            date: "June & December",
            elements: "Life Sciences, Chemical Sciences, Earth Sciences, Mathematical Sciences",
            website: "https://csirnet.nta.nic.in",
        },
        {
            college: "ICMR-JRF",
            date: "July",
            elements: "Life Sciences, Social Sciences",
            website: "https://www.icmr.gov.in",
        },
        {
            college: "DBT-BET",
            date: "April",
            elements: "Life Sciences, Biotechnology, Biochemistry, Genetics",
            website: "https://www.dbtindia.gov.in",
        },
        {
            college: "GATE (Life Sciences)",
            date: "February",
            elements: "Chemistry, Biochemistry, Botany, Zoology, Microbiology",
            website: "https://gate.iitb.ac.in",
        },
    ];

    // Professional opportunities in medical research
    const professionalOpportunities = [
        {
            role: "Research Scientist",
            description: "Research scientists conduct experiments, analyze data, and develop new theories in medical research. They work in laboratories, universities, and research institutions, investigating diseases, developing treatments, and advancing medical knowledge."
        },
        {
            role: "Clinical Research Coordinator",
            description: "Clinical research coordinators manage clinical trials, ensuring compliance with regulations and protocols. They coordinate with healthcare professionals, monitor patient safety, and collect data for research studies."
        },
        {
            role: "Biostatistician",
            description: "Biostatisticians apply statistical methods to medical research. They design studies, analyze data, and interpret results to help researchers draw meaningful conclusions about health and disease."
        },
        {
            role: "Epidemiologist",
            description: "Epidemiologists study patterns, causes, and effects of health and disease conditions in populations. They investigate outbreaks, track disease trends, and develop public health strategies."
        },
        {
            role: "Medical Writer",
            description: "Medical writers create scientific documents, research papers, and regulatory submissions. They translate complex medical information into clear, accurate content for various audiences."
        },
        {
            role: "Research Associate",
            description: "Research assistants support scientists by conducting experiments, collecting data, and maintaining laboratory equipment. They play a crucial role in the day-to-day operations of research projects."
        },
        {
            role: "Principal Investigator",
            description: "Principal investigators lead research teams, secure funding, and oversee all aspects of research projects. They are responsible for the scientific direction and integrity of studies."
        },
        {
            role: "Regulatory Affairs Specialist",
            description: "Regulatory affairs specialists ensure that medical research complies with regulations. They prepare documentation for regulatory submissions and liaise with health authorities."
        }
    ];

    // Medical research specializations
    const specializations = [
        {
            title: "Molecular Biology",
            description: "Focuses on the structure and function of the macromolecules essential to life. Researchers study DNA, RNA, and proteins to understand cellular processes and develop new therapies.",
            icon: "🧬"
        },
        {
            title: "Immunology",
            description: "Studies the immune system and its response to pathogens. Immunologists develop vaccines, study autoimmune diseases, and explore cancer immunotherapy approaches.",
            icon: "🛡️"
        },
        {
            title: "Genetics and Genomics",
            description: "Examines heredity and the variation of inherited characteristics. Researchers investigate genetic disorders, develop gene therapies, and study the human genome.",
            icon: "🧪"
        },
        {
            title: "Epidemiology",
            description: "Investigates the distribution and determinants of health-related states and events in populations. Epidemiologists study disease patterns and risk factors.",
            icon: "📊"
        },
        {
            title: "Neuroscience",
            description: "Focuses on the structure and function of the nervous system. Researchers study brain development, neurological disorders, and potential treatments for conditions like Alzheimer's and Parkinson's.",
            icon: "🧠"
        },
        {
            title: "Pharmacology",
            description: "Studies how drugs interact with biological systems. Pharmacologists develop new medications, study drug mechanisms, and assess drug safety and efficacy.",
            icon: "💊"
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
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Medical &gt; Medical Research</div>
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
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Medical Research?</h3>
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
                            <h2 className="text-3xl font-bold text-gray-800">Medical Research</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Medical research is a scientific field dedicated to advancing knowledge about health, disease, and human biology. Researchers conduct studies to understand disease mechanisms, develop new treatments, and improve healthcare outcomes. Medical research encompasses basic science, clinical research, translational research, and epidemiological studies. Professionals in this field work in universities, research institutes, pharmaceutical companies, and government agencies. They contribute to medical breakthroughs that save lives and improve public health worldwide.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="./13G-Medical_Laboratory_Technologist.png" alt="Medical Research Professionals" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Medical Research</span>
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
                            <span>Medical Research Specializations</span>
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
                                <li>Computational Biology and Bioinformatics</li>
                                <li>Precision Medicine</li>
                                <li>Regenerative Medicine</li>
                                <li>Medical Imaging and Diagnostics</li>
                                <li>Global Health Research</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Medical Research</span>
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Stream</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Undergraduate</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Postgraduate</th>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Doctoral</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 1<br />Clear Class XII with PCB (Physics, Chemistry, Biology)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue B.Sc in Life Sciences/Biotechnology for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue M.Sc in specialized field for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Ph.D for 3-5 years</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with PCB (Physics, Chemistry, Biology)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MBBS/BDS for 5.5 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue MD/MS in clinical research for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue DM/MCh or Ph.D for 3 years</td>
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
                                <li>Minimum aggregate of 60% in PCB (55% for reserved categories)</li>
                                <li>Research experience through internships and projects is highly valued</li>
                                <li>Strong analytical and critical thinking skills are essential</li>
                                <li>Publications in peer-reviewed journals enhance career prospects</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Medical Research Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Medical Research Institutions in India</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm rounded-lg overflow-hidden shadow-sm">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                                    <tr>
                                        <th className="border-b border-gray-200 px-4 py-3 text-left text-gray-700 font-semibold">Institute</th>
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
                            <span>Top Medical Research Institutions Abroad</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Leading Medical Research Universities Worldwide</p>
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
                            <span>Important Medical Research Entrance Exams</span>
                        </h3>
                        <h4 className="text-lg font-medium mb-5 text-gray-800 flex items-center gap-2">
                            <span className="text-blue-600">🎓</span>
                            <span>Undergraduate & Postgraduate</span>
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
                                <span>Design and conduct experiments to investigate medical hypotheses</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Collect, analyze, and interpret research data using statistical methods</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Write research papers, grants, and reports to communicate findings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Collaborate with multidisciplinary teams to advance research goals</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Stay updated with scientific literature and research methodologies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Present research findings at conferences and scientific meetings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Mentor junior researchers and supervise laboratory activities</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Ensure compliance with ethical guidelines and research protocols</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Apply for research funding from government agencies and foundations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Develop innovative techniques and technologies for medical research</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Medical Research</span>
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
                                        <span>Opportunity to make significant contributions to human health</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Intellectual stimulation and continuous learning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Global collaboration and networking opportunities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Autonomy in research direction and methodology</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Potential for groundbreaking discoveries and recognition</span>
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
                                        <span>Long and competitive education and training period</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High pressure to secure funding and publish results</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Potential for slow progress and experimental failures</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Work-life balance challenges with long hours</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Limited job security in some research positions</span>
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