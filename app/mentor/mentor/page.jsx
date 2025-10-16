"use client";

import { useEffect, useMemo, useState } from "react";
import { addSession, deleteSession, getSessions } from "@/app/mentor/(lib)/sessionStore";
import { Calendar, Clock, Link as LinkIcon, FileText, Trash2, PlusCircle } from "lucide-react";

export default function MentorPage() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState(60);
  const [link, setLink] = useState("");
  const [sessions, setSessions] = useState([]);
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [document, setDocument] = useState("");

  useEffect(() => {
    setSessions(getSessions());
  }, []);

  const isValid = useMemo(() => {
    return (
      title.trim().length > 2 &&
      /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      /^\d{2}:\d{2}$/.test(time) &&
      Number(duration) > 0 &&
      /^https?:\/\//i.test(link) &&
      interest.trim().length > 0
    );
  }, [title, date, time, duration, link, interest]);

  function resetForm() {
    setTitle("");
    setDate("");
    setTime("");
    setDuration(60);
    setLink("");
    setInterest("");
    setDescription("");
    setDocument("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    const created = addSession({
      title,
      date,
      time,
      duration: Number(duration),
      link,
      interest,
      description,
      document,
    });
    setSessions((prev) => [...prev, created]);
    resetForm();
  }

  function handleDelete(id) {
    deleteSession(id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }

  const sessionsComputed = sessions
    .map((s) => ({ ...s, start: new Date(`${s.date}T${s.time}:00`) }))
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow">
        <div className="container-app py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Mentor Dashboard</h1>
          <p className="mt-3 text-lg opacity-90">
            Plan, create, and manage your mentee sessions with ease 🚀
          </p>
        </div>
      </div>

      <main className="container-app px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Add Session Form */}
          <section className="card bg-white shadow-lg rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-800 flex items-center gap-2 mb-2">
              <PlusCircle className="h-6 w-6 text-indigo-600" />
              Add New Session
            </h2>
            <p className="text-slate-500 mb-6 p-2">
              Share upcoming career guidance or seminar details with students.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="label">Session Title : </label>
                <input
                  className="input bg-gray-200 p-2 rounded-md border-gray-300"
                  placeholder="Resume Review / Mock Interview"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="label">Interest Area : </label>
                <input
                  className="input text-sm bg-gray-200 p-2 rounded-md border-gray-300"
                  placeholder="Resume Review, Mock Interview, Career Guidance"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
                
              </div>

              <div>
                <label className="label">Description : </label><br />
                <textarea
                  className="input p-2 bg-gray-200 p-2 rounded-md border-gray-300"
                  rows={3}
                  placeholder="Brief details about what this session will cover"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="label">Resource Link (Optional) : </label>
                <input
                  className="input bg-gray-200 p-2 rounded-md border-gray-300"
                  placeholder="https://drive.google.com/..."
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="label">Date : </label>
                  <input
                    type="date"
                    className="input bg-gray-200 p-2 rounded-md border-gray-300"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label">Time : </label>
                  <input
                    type="time"
                    className="input bg-gray-200 p-2 rounded-md border-gray-300"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <br />
                <div>
                  <label className="label">Duration (mins) : </label>
                  <input
                    type="number"
                    min={1}
                    className="input bg-gray-200 p-2 rounded-md border-gray-300"
                    value={duration}
                    onChange={(e) =>
                      setDuration(parseInt(e.target.value || "0", 10))
                    }
                  />
                </div>
              </div>

              <div>
                <label className="label">Join Link : </label>
                <input
                  className="input bg-gray-200 p-2 rounded-md border-gray-300"
                  placeholder="https://meet.google.com/..."
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="submit"
                  className="btn-primary bg-blue-600 text-white p-2 rounded-md border-blue-300"
                  disabled={!isValid}
                >
                  Save Session
                </button>
                <button
                  type="button"
                  className="btn-ghost bg-gray-200 p-2 rounded-md border-gray-300"
                  onClick={resetForm}
                >
                  Clear
                </button>
              </div>
            </form>
          </section>

          {/* Session List */}
          <section>
            <div className="card bg-white shadow-lg rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Your Sessions
                </h2>
                <span className="text-sm text-slate-500">
                  Total:{" "}
                  <span className="font-medium text-slate-900">
                    {sessions.length}
                  </span>
                </span>
              </div>

              {sessions.length === 0 ? (
                <div className="border border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50">
                  <p className="text-slate-600 font-medium">
                    No sessions yet 📅
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    Use the form to add your first session.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {sessionsComputed.map((s) => (
                    <li
                      key={s.id}
                      className="p-5 border border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            🎓
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 text-lg">
                              {s.title}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600 mt-1">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" /> {s.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" /> {s.time} •{" "}
                                {s.duration} mins
                              </span>
                            </div>
                            {s.interest && (
                              <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                                {s.interest}
                              </span>
                            )}
                            {s.description && (
                              <p className="text-sm text-slate-700 mt-2">
                                {s.description}
                              </p>
                            )}
                            {s.document && (
                              <a
                                href={s.document}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-indigo-600 hover:underline flex items-center gap-1 mt-1"
                              >
                                <FileText className="h-4 w-4" /> View resource
                              </a>
                            )}
                            <a
                              href={s.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-indigo-600 hover:underline flex items-center gap-1 mt-1"
                            >
                              <LinkIcon className="h-4 w-4" /> Join session
                            </a>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDelete(s.id)}
                          className="btn-ghost flex items-center gap-1 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" /> Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
