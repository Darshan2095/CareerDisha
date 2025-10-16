// app/admission-steps-jk/page.jsx
import React from "react"; // adjust path if needed
import Link from "next/link";

export default function AdmissionStepsJK() {
  return (
    <div className="max-w-4xl mx-auto bg-white/90  rounded-2xl shadow-lg p-6 md:p-10 font-sans text-gray-800 animate-fadeIn">
     
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        Admission Steps - Jammu &amp; Kashmir
      </h2>

      {/* Step 1 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        1. Check Eligibility
      </h3>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>
          Must have passed <b>10+2 (Higher Secondary Part-II)</b> from
          JKBOSE/CBSE/recognized board.
        </li>
        <li>
          Minimum <b>45% aggregate marks</b> (40% for reserved categories).
        </li>
      </ul>

      <div className="overflow-x-auto mt-4">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden bg-grey-200 shadow-sm text-sm md:text-base">
          <thead>
            <tr className="bg-sky-500 text-white uppercase tracking-wide">
              <th className="p-3 text-left">Stream</th>
              <th className="p-3 text-left">Mandatory Subjects</th>
              <th className="p-3 text-left">Eligible Programs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-sky-50">
              <td className="p-3 border">Science (Medical)</td>
              <td className="p-3 border">Physics + Chemistry + Biology</td>
              <td className="p-3 border">
                MBBS, BDS, BAMS, Nursing, Paramedical, Biotechnology
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-sky-50">
              <td className="p-3 border">Science (Non-Medical)</td>
              <td className="p-3 border">Physics + Chemistry + Maths</td>
              <td className="p-3 border">
                B.Tech (Civil, Mechanical, Electrical, Computer, IT,
                Electronics), BCA, B.Sc (Physical Sciences)
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-sky-50">
              <td className="p-3 border">Commerce</td>
              <td className="p-3 border">
                Accountancy + Business Studies + Economics
              </td>
              <td className="p-3 border">
                B.Com, BBA, BCA (some colleges require Maths/IT at 10+2 level)
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 hover:bg-sky-50">
              <td className="p-3 border">Arts/Humanities</td>
              <td className="p-3 border">Any recognized subjects in 10+2</td>
              <td className="p-3 border">
                BA, Law (BA-LLB), Social Sciences, Fine Arts, Languages,
                Education
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Step 2 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        2. Prepare Documents
      </h3>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>10th &amp; 12th Mark sheets / Certificates</li>
        <li>Domicile / State Subject Certificate</li>
        <li>Category Certificate (if applicable)</li>
        <li>Passport size photographs &amp; ID Proof</li>
      </ul>

      {/* Step 3 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        3. Register Online
      </h3>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>
          Register at{" "}
          <Link
            href="https://jkadmission.samarth.ac.in"
            target="_blank"
            className="text-sky-600 font-semibold hover:underline"
          >
            jkadmission.samarth.ac.in
          </Link>
        </li>
        <li>Fill personal &amp; academic details, upload scanned documents</li>
        <li>
          📄 Official Guidelines (PDFs):
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>
              <Link
                href="https://scdn.samarth.ac.in/jk/JK-Admission-Portal-User-Guide-for-Non-CUET-Applicants.pdf"
                target="_blank"
                className="text-sky-600 font-semibold hover:underline"
              >
                User Guide for Non-CUET Applicants (UG Admissions)
              </Link>
            </li>
            <li>
              <Link
                href="https://www.jkbopee.gov.in/Pdf/Downloader.ashx?nid=16824&type=n"
                target="_blank"
                className="text-sky-600 font-semibold hover:underline"
              >
                BOPEE B.Tech / Engineering Counselling Guidelines 2025-26
              </Link>
            </li>
            <li>
              <Link
                href="https://directorcollegesjk.in/Notices/39fec27f-a33f-4944-9913-d331cb42df6d.pdf"
                target="_blank"
                className="text-sky-600 font-semibold hover:underline"
              >
                FYUGP / Integrated PG Admission Notification (J&amp;K Directorate of Colleges)
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Step 4 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        4. Finalize College &amp; Course
      </h3>
      <ul className="list-disc pl-6 mt-2">
        <li>Select preferred colleges and courses through the online portal</li>
      </ul>

      {/* Step 5 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        5. Choice Filling
      </h3>
      <ul className="list-disc pl-6 mt-2">
        <li>Fill choices within the given time frame</li>
        <li>Download &amp; print your filled choices</li>
      </ul>

      {/* Step 6 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        6. Confirm Admission
      </h3>
      <ul className="list-disc pl-6 mt-2">
        <li>Check seat allotment list</li>
        <li>Verify documents &amp; pay admission fee online</li>
      </ul>

      {/* Step 7 */}
      <h3 className="mt-6 text-lg md:text-xl font-semibold border-l-4 border-sky-500 pl-3 text-sky-600">
        7. Participate in Further Rounds
      </h3>
      <ul className="list-disc pl-6 mt-2">
        <li>
          If unsatisfied with your allotment, take part in subsequent
          counselling/reshuffling rounds
        </li>
      </ul>
    </div>
  );
}
