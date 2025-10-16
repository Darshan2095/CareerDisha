"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function QuizFlow() {
  const [branches, setBranches] = useState([]);
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState("interest");
  const [interestAnswers, setInterestAnswers] = useState({});
  const [aptAnswers, setAptAnswers] = useState({});
  const [questions, setQuestions] = useState({ interest: [], aptitude: [] });
  const [qPointer, setQPointer] = useState(0);

  const router = useRouter();

  useEffect(() => {
    axios.get("/api/branches")
      .then(r => setBranches(r.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (branches.length && index < branches.length) {
      const { branch } = branches[index];
      axios.get("/api/questions", { params: { branch } })
        .then(r => {
          setQuestions(r.data);
          setInterestAnswers({});
          setAptAnswers({});
          setStage("interest");
          setQPointer(0);
        })
        .catch(console.error);
    }
  }, [branches, index]);

  useEffect(() => {
    if (branches.length && index >= branches.length) {
      router.push("/quiz/results");
    }
  }, [index, branches, router]);

  if (!branches.length) return <div className="p-8 text-center">Loading...</div>;
  const cur = branches[index];
  if (!cur) return null;

  const interestChoices = [
    { key: "good", label: "I Like It" },
    { key: "maybe", label: "Maybe" },
    { key: "bad", label: "Not for me" },
  ];

  const handleInterestChoose = (qIdx, value) => {
    setInterestAnswers(prev => ({ ...prev, [qIdx]: value }));
    if (qIdx + 1 < questions.interest.length) {
      setTimeout(() => setQPointer(qIdx + 1), 400);
    }
  };

  const handleAptChoose = (qIdx, value) => {
    setAptAnswers(prev => ({ ...prev, [qIdx]: value }));
    if (qIdx + 1 < questions.aptitude.length) {
      setTimeout(() => setQPointer(qIdx + 1), 400);
    }
  };

  const backQuestion = () => {
    if (qPointer > 0) setQPointer(qPointer - 1);
  };

  const nextSection = () => {
    if (stage === "interest") {
      setStage("aptitude");
      setQPointer(0);
    } else {
      submitBranchResult();
    }
  };

  const submitBranchResult = async () => {
    const interestScore = Object.values(interestAnswers).reduce(
      (sum, v) => sum + (v === "good" ? 8 : v === "maybe" ? 4 : 0),
      0
    );

    let aptCorrect = 0;
    questions.aptitude.forEach((q, i) => {
      if (aptAnswers[i] === q.answer) aptCorrect++;
    });

    const aptitudeScore = aptCorrect * 10;
    const totalScore = interestScore + aptitudeScore;

    try {
      await axios.post("/api/save-result", {
        session: cur.session,
        stream: cur.stream,
        branch: cur.branch,
        interestAnswers,
        aptAnswers,
        interestScore,
        aptitudeScore,
        totalScore,
      });
      setIndex(idx => idx + 1);
    } catch (err) {
      console.error(err);
      alert("Failed to save result.");
    }
  };

  const branchProgress = Math.round((index / branches.length) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 p-6 font-inter">
     

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-200 rounded-full mb-5 sticky top-0">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-violet-600 transition-all duration-500"
          style={{ width: `${Math.min(100, branchProgress)}%` }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-900">{cur.session} — {cur.stream}</h2>
        <h3 className="text-lg text-gray-700 mt-1">{cur.branch}</h3>
        <p className="text-sm text-gray-500 mt-1">Branch {index + 1} / {branches.length}</p>
      </div>

      {/* Question Area */}
      {stage === "interest" && (
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-lg font-semibold mb-6 text-gray-900">
            {qPointer + 1}. {questions.interest[qPointer]}
          </div>

          <div className="flex flex-col gap-4">
            {interestChoices.map((c, ci) => (
              <button
                key={ci}
                onClick={() => handleInterestChoose(qPointer, c.key)}
                className={`px-5 py-4 rounded-xl border-2 text-base font-medium transition ${
                  interestAnswers[qPointer] === c.key
                    ? "bg-gradient-to-r from-violet-600 to-sky-500 text-white border-none scale-105"
                    : "bg-white border-slate-200 hover:border-violet-600 hover:bg-violet-50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            {qPointer > 0 && (
              <button
                onClick={backQuestion}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
              >
                ← Back
              </button>
            )}
            {qPointer === questions.interest.length - 1 && (
              <button
                onClick={nextSection}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-sky-500 text-white font-semibold hover:opacity-90"
              >
                Continue →
              </button>
            )}
          </div>
        </div>
      )}

      {stage === "aptitude" && (
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-lg font-semibold mb-6 text-gray-900">
            {qPointer + 1}. {questions.aptitude[qPointer].text}
          </div>

          {questions.aptitude[qPointer].image && (
            <img
              src={questions.aptitude[qPointer].image}
              alt="puzzle"
              className="max-w-full mx-auto my-5 rounded-xl shadow-lg"
            />
          )}

          <div className="flex flex-col gap-4">
            {questions.aptitude[qPointer].options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => handleAptChoose(qPointer, opt)}
                className={`px-5 py-4 rounded-xl border-2 text-base font-medium transition ${
                  aptAnswers[qPointer] === opt
                    ? "bg-gradient-to-r from-violet-600 to-sky-500 text-white border-none scale-105"
                    : "bg-white border-slate-200 hover:border-violet-600 hover:bg-violet-50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            {qPointer > 0 && (
              <button
                onClick={backQuestion}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300"
              >
                ← Back
              </button>
            )}
            {qPointer === questions.aptitude.length - 1 && (
              <button
                onClick={nextSection}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-sky-500 text-white font-semibold hover:opacity-90"
              >
                Submit & Next Branch →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
