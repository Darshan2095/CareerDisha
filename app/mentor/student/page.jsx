"use client";

import { useEffect, useState } from "react";
import { getSessions, subscribeToSessionChanges } from "@/app/mentor/(lib)/sessionStore";
import { Calendar, Clock, FileText, Search, Tag } from "lucide-react";

export default function StudentPage() {
  const [upcoming, setUpcoming] = useState([]);
  const [query, setQuery] = useState("");
  const [showPast, setShowPast] = useState(false);
  const [sortOrder, setSortOrder] = useState("soonest");

  useEffect(() => {
    const refresh = () => setUpcoming(getSessions());
    refresh();
    const unsubscribe = subscribeToSessionChanges(refresh);
    return unsubscribe;
  }, []);

  const quickInterests = [
    "Frontend",
    "Backend",
    "Data Science",
    "AI/ML",
    "Cloud",
    "Career Guidance",
  ];

  const sessionsComputed = upcoming
    .map((s) => ({ ...s, start: new Date(`${s.date}T${s.time}:00`) }))
    .filter((s) =>
      showPast
        ? true
        : new Date(`${s.date}T${s.time}:00`).getTime() >= Date.now()
    )
    .filter((s) =>
      query.trim().length === 0
        ? true
        : (s.interest || "")
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          (s.title || "").toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "soonest"
        ? a.start.getTime() - b.start.getTime()
        : b.start.getTime() - a.start.getTime()
    );

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow">
        <div className="container-app py-12 text-center">
          <h1 className="text-4xl font-bold">Upcoming Mentor Sessions</h1>
          <p className="mt-3 text-lg opacity-90">
            Discover and join live sessions for career guidance & growth 🚀
          </p>
        </div>
      </div>

      <main className="container-app py-10">
        <section className="card bg-white shadow-lg rounded-2xl p-8 border border-slate-200">
          {/* Filters */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="label" htmlFor="search">
                Search Sessions
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  id="search"
                  className="input pl-9"
                  placeholder="Try: Frontend, Resume, Mock Interview"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                  <button
                    className="absolute right-3 top-2 text-sm text-slate-500 hover:text-slate-700"
                    onClick={() => setQuery("")}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Quick interest tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {quickInterests.map((i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(i)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition ${
                      query === i
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="label" htmlFor="sort">
                Sort by
              </label>
              <select
                id="sort"
                className="input"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="soonest">Soonest first</option>
                <option value="latest">Latest first</option>
              </select>
            </div>

            {/* Past Toggle */}
            <div className="flex items-end">
              <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={showPast}
                  onChange={(e) => setShowPast(e.target.checked)}
                />
                Show past sessions
              </label>
            </div>
          </div>

          {/* Session Count */}
          <p className="text-sm text-slate-600 mb-4">
            Showing{" "}
            <span className="font-medium text-slate-900">
              {sessionsComputed.length}
            </span>{" "}
            session{sessionsComputed.length === 1 ? "" : "s"}
          </p>

          {/* Empty states */}
          {upcoming.length === 0 ? (
            <div className="border border-dashed border-slate-300 rounded-xl p-10 text-center bg-slate-50">
              <div className="text-4xl mb-2">📭</div>
              <p className="text-slate-700 font-medium">No sessions yet</p>
              <p className="text-slate-500 text-sm mt-1">
                Ask your mentor to add one, then check back here.
              </p>
            </div>
          ) : sessionsComputed.length === 0 ? (
            <div className="border border-dashed border-slate-300 rounded-xl p-10 text-center bg-slate-50">
              <div className="text-4xl mb-2">🔍</div>
              <p className="text-slate-700 font-medium">No matches found</p>
              <p className="text-slate-500 text-sm mt-1">
                Try clearing search or showing past sessions.
              </p>
            </div>
          ) : (
            /* Session List */
            <ul className="space-y-4 max-h-[28rem] overflow-auto  pr-1">
              {sessionsComputed.map((s) => {
                const isPast =
                  new Date(`${s.date}T${s.time}:00`).getTime() < Date.now();
                return (
                  <li
                    key={s.id}
                    className={`p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                      isPast ? "opacity-80" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg flex items-center gap-2 flex-wrap">
                          {s.title}
                          {isPast && (
                            <span className="badge bg-slate-200 text-slate-700">
                              Past
                            </span>
                          )}
                          {s.interest && (
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                              <Tag className="h-3 w-3" /> {s.interest}
                            </span>
                          )}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-slate-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {s.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {s.time} •{" "}
                            {s.duration} mins
                          </span>
                        </div>
                        {s.description && (
                          <p className="text-sm text-slate-700 mt-2">
                            {s.description}
                          </p>
                        )}
                        {s.document && (
                          <a
                            className="text-sm text-indigo-600 hover:underline flex items-center gap-1 mt-1"
                            href={s.document}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FileText className="h-4 w-4" /> View resource
                          </a>
                        )}
                      </div>
                    </div>
                    <a
                      className={`btn-primary bg-blue-600 text-white p-2 rounded-md border-blue-300 self-start sm:self-auto ${
                        isPast ? "bg-slate-500 hover:bg-slate-600" : ""
                      }`}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {isPast ? "View Link" : "Join Session"}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}
