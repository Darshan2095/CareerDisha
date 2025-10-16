"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PharmacyPage() {
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

    // Top pharmacy colleges in India
    const institutesIndia = [
        { college: "National Institute of Pharmaceutical Education and Research (NIPER)", location: "Mohali", website: "https://www.niper.ac.in" },
        { college: "Jamia Hamdard", location: "New Delhi", website: "https://jamiahamdard.edu" },
        { college: "Bombay College of Pharmacy", location: "Mumbai", website: "https://bcp.edu.in" },
        { college: "University Institute of Pharmaceutical Sciences (UIPS)", location: "Chandigarh", website: "https://uips.puchd.ac.in" },
        { college: "Manipal College of Pharmaceutical Sciences", location: "Manipal", website: "https://manipal.edu/mcops.html" },
        { college: "JSS College of Pharmacy", location: "Mysore", website: "https://jssuni.edu.in" },
        { college: "Birla Institute of Technology and Science (BITS)", location: "Pilani", website: "https://bits-pilani.ac.in" },
        { college: "Institute of Chemical Technology (ICT)", location: "Mumbai", website: "https://ictmumbai.edu.in" },
        { college: "Delhi Institute of Pharmaceutical Sciences and Research (DIPSAR)", location: "New Delhi", website: "https://dipsar.ac.in" },
    ];

    // Top pharmacy institutions abroad
    const institutesWorld = [
        { college: "Harvard University", location: "United States", website: "https://www.harvard.edu" },
        { college: "University of Cambridge", location: "United Kingdom", website: "https://www.cam.ac.uk" },
        { college: "University of Oxford", location: "United Kingdom", website: "https://www.ox.ac.uk" },
        { college: "University of Toronto", location: "Canada", website: "https://www.utoronto.ca" },
        { college: "Monash University", location: "Australia", website: "https://www.monash.edu" },
        { college: "University of Nottingham", location: "United Kingdom", website: "https://www.nottingham.ac.uk" },
        { college: "University of California, San Francisco (UCSF)", location: "United States", website: "https://www.ucsf.edu" },
        { college: "Karolinska Institute", location: "Sweden", website: "https://ki.se" },
        { college: "University of Copenhagen", location: "Denmark", website: "https://www.ku.dk" },
    ];

    // Pharmacy entrance exams in India
    const entranceExams = [
        {
            college: "GPAT (Graduate Pharmacy Aptitude Test)",
            date: "May",
            elements: "Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy",
            website: "https://gpat.nta.nic.in",
        },
        {
            college: "NIPER JEE",
            date: "June",
            elements: "Pharmaceutical Sciences, Chemistry, Biology, Mathematics",
            website: "https://www.niper.ac.in",
        },
        {
            college: "BHU PET",
            date: "May",
            elements: "Pharmaceutical Sciences, Chemistry, Biology, Mathematics",
            website: "https://bhu.ac.in",
        },
        {
            college: "BITS HD",
            date: "May",
            elements: "Physics, Chemistry, Mathematics, English Proficiency",
            website: "https://bitsadmission.com",
        },
    ];

    // Professional opportunities in pharmacy
    const professionalOpportunities = [
        {
            role: "Retail Pharmacist",
            description: "Retail pharmacists work in community pharmacies, dispensing medications, advising patients on proper drug use, and providing health screenings. They ensure prescriptions are accurate, counsel patients on side effects, and recommend over-the-counter medications."
        },
        {
            role: "Hospital Pharmacist",
            description: "Hospital pharmacists work in healthcare facilities, preparing and dispensing medications, monitoring patient drug therapy, and advising healthcare professionals on pharmaceutical care. They often specialize in areas like oncology or pediatrics."
        },
        {
            role: "Industrial Pharmacist",
            description: "Industrial pharmacists work in pharmaceutical companies, involved in drug development, quality control, manufacturing, and regulatory affairs. They ensure medications are produced safely and meet quality standards."
        },
        {
            role: "Clinical Pharmacist",
            description: "Clinical pharmacists work directly with healthcare teams, optimizing medication therapy, monitoring patient outcomes, and providing drug information. They often specialize in areas like cardiology or infectious diseases."
        },
        {
            role: "Research Pharmacist",
            description: "Research pharmacists work in laboratories and research institutions, developing new drugs, conducting clinical trials, and studying drug interactions. They contribute to pharmaceutical innovation and evidence-based practice."
        },
        {
            role: "Regulatory Affairs Pharmacist",
            description: "Regulatory affairs pharmacists ensure pharmaceutical products comply with government regulations. They prepare documentation for drug approvals, monitor regulatory changes, and liaise with health authorities."
        },
        {
            role: "Academic Pharmacist",
            description: "Academic pharmacists teach in pharmacy colleges and universities, conduct research, and mentor students. They contribute to pharmaceutical education and advance the profession through scholarly work."
        },
        {
            role: "Pharmacovigilance Pharmacist",
            description: "Pharmacovigilance pharmacists monitor drug safety, detect adverse reactions, and implement risk management strategies. They work in pharmaceutical companies, regulatory agencies, and healthcare organizations."
        }
    ];

    // Pharmacy specializations
    const specializations = [
        {
            title: "Pharmaceutics",
            description: "Focuses on drug formulation, delivery systems, and manufacturing processes. Pharmaceutics specialists develop various dosage forms like tablets, capsules, and injectables to ensure optimal drug delivery.",
            icon: "💊"
        },
        {
            title: "Pharmaceutical Chemistry",
            description: "Involves the study of drug compounds, their synthesis, and chemical properties. Specialists in this field design and develop new drug molecules and improve existing ones.",
            icon: "🧪"
        },
        {
            title: "Pharmacology",
            description: "Studies how drugs interact with biological systems. Pharmacologists investigate drug mechanisms, effects, and safety profiles to develop effective and safe medications.",
            icon: "🔬"
        },
        {
            title: "Pharmacognosy",
            description: "Focuses on medicines derived from natural sources like plants, animals, and microorganisms. Specialists identify, isolate, and study natural compounds for therapeutic use.",
            icon: "🌿"
        },
        {
            title: "Clinical Pharmacy",
            description: "Applies pharmaceutical knowledge to patient care. Clinical pharmacists optimize medication therapy, monitor patient outcomes, and provide drug information to healthcare teams.",
            icon: "🏥"
        },
        {
            title: "Pharmaceutical Analysis",
            description: "Involves testing and analyzing drugs to ensure quality, safety, and efficacy. Specialists use analytical techniques to verify drug composition and detect impurities.",
            icon: "📊"
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
                <div className="max-w-7xl mx-auto">Home &gt; Career Library &gt; Medical &gt; Pharmacy</div>
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
                            <h3 className="font-bold text-lg mb-3 text-gray-800">Are you fit for a career in Pharmacy?</h3>
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
                            <h2 className="text-3xl font-bold text-gray-800">Pharmacy</h2>
                        </div>
                        <h3 className="text-xl font-semibold mb-5 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">📄</span>
                            <span>Summary</span>
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Pharmacy is a healthcare profession that focuses on the safe and effective use of medications. Pharmacists are medication experts who ensure patients receive the right drug, in the right dose, at the right time. They play a crucial role in healthcare by dispensing medications, advising on drug therapy, monitoring patient outcomes, and promoting health and wellness. Pharmacy education combines pharmaceutical sciences with clinical practice, preparing graduates for diverse roles in community pharmacies, hospitals, industry, research, and regulatory affairs.
                                </p>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl transform rotate-3 opacity-20"></div>
                                    <img src="./Pharmacy.png" alt="Pharmacy Professionals" className="rounded-xl shadow-lg max-h-64 object-cover relative z-10" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Professional Opportunities Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={opportunitiesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🎯</span>
                            <span>Career Opportunities in Pharmacy</span>
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
                            <span>Pharmacy Specializations</span>
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
                                <li>Pharmacogenomics</li>
                                <li>Nanotechnology in Drug Delivery</li>
                                <li>Biopharmaceuticals</li>
                                <li>Digital Health Pharmacy</li>
                                <li>Personalized Medicine</li>
                            </ul>
                        </div>
                    </section>

                    {/* Career Path Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={careerPathRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🛤️</span>
                            <span>How to Pursue a Career in Pharmacy</span>
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
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue B.Pharm for 4 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue M.Pharm for 2 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Ph.D in Pharmaceutical Sciences</td>
                                    </tr>
                                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                                        <td className="border-b border-gray-200 px-4 py-3 font-medium text-gray-800">Path 2<br />Clear Class XII with PCB (Physics, Chemistry, Biology)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Pharm.D for 6 years (including internship)</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Pharm.D (Post Baccalaureate) for 3 years</td>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-700">Pursue Ph.D in Pharmacy Practice</td>
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
                                <li>Must have studied Physics, Chemistry, and Biology/Mathematics in Class XII</li>
                                <li>Minimum aggregate of 50% in PCB/PCM (45% for reserved categories)</li>
                                <li>Must qualify pharmacy entrance exams for admission to top colleges</li>
                                <li>Registration with State Pharmacy Council is mandatory to practice</li>
                                <li>Pharmacists must complete continuing education to maintain licensure</li>
                            </ul>
                        </div>
                    </section>

                    {/* Leading Institutes Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={leadingInstitutesRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">🏫</span>
                            <span>Leading Pharmacy Institutes (India)</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Top Pharmacy Colleges in India</p>
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
                            <span>Top Pharmacy Institutions Abroad</span>
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg">Leading Pharmacy Universities Worldwide</p>
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
                            <span>Important Pharmacy Entrance Exams</span>
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
                                <span>Dispense prescription medications accurately and safely</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Advise patients on proper medication use, side effects, and interactions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Monitor patient health and medication therapy outcomes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Collaborate with healthcare professionals to optimize patient care</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Conduct health screenings and immunization services</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Ensure compliance with drug laws and regulations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Maintain accurate patient medication records</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Participate in drug research and clinical trials</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Provide health and wellness education to patients</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-2">•</span>
                                <span>Stay updated with pharmaceutical advancements and regulations</span>
                            </li>
                        </ul>
                    </section>

                    {/* Pros & Cons Section */}
                    <section className="mb-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100" ref={prosConsRef}>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
                            <span className="text-2xl">⚖️</span>
                            <span>Pros & Cons of a Career in Pharmacy</span>
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
                                        <span>Strong job security and growing demand for pharmacists</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Competitive salary and good benefits</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Diverse career opportunities in various settings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Opportunity to directly impact patient health outcomes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span>Flexible work schedules in some pharmacy settings</span>
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
                                        <span>High responsibility with potential for medication errors</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Long hours and weekend work in some settings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>High stress environment with tight deadlines</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Extensive education and licensing requirements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-rose-500 mr-2">•</span>
                                        <span>Limited patient interaction in some pharmacy roles</span>
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