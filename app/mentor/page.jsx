export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="text-white h-64 flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: 'url("/cl-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70"></div>
                <div className="text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Online Admission Meetings & Webinars</h2>
                    <p className="text-lg md:text-xl opacity-90">Interactive Sessions to Guide You Through Admissions</p>
                </div>
            </section>
     

      {/* Highlights */}
      <section className="container-app py-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 bg-blue-200 rounded-lg">
            <div className="text-2xl">🗓️</div>
            <h3 className="mt-2 font-semibold text-slate-900">Easy Scheduling</h3>
            <p className="text-slate-600 text-sm mt-1">Create, edit, and manage sessions in seconds.</p>
          </div>
          <div className="card p-5 bg-blue-200 rounded-lg">
            <div className="text-2xl">🎯</div>
            <h3 className="mt-2 font-semibold text-slate-900">Interest Based</h3>
            <p className="text-slate-600 text-sm mt-1">Students find sessions that match their goals.</p>
          </div>
          <div className="card p-5 bg-blue-200 rounded-lg">
            <div className="text-2xl">🔔</div>
            <h3 className="mt-2 font-semibold text-slate-900">Reminders</h3>
            <p className="text-slate-600 text-sm mt-1">Never miss a session with timely reminders.</p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section id="get-started" className="container-app mx-auto px-5 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <a href="/mentor/mentor/ext" className="card card-accent  p-6 shadow-lg hover:shadow-lg transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition">👩‍🏫</div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Mentor</h2>
                <p className="text-slate-600 mt-1">Add sessions, share links and resources, track attendance.</p>
                <span className="btn-secondary mt-4 inline-block">Open Mentor Console →</span>
              </div>
            </div>
          </a>
          <a href="/mentor/student/ext" className="card card-accent p-6 shadow-lg hover:shadow-lg transition group">
            <div className="flex items-start gap-4">
              <div className="text-3xl group-hover:scale-110 transition">🎓</div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Student</h2>
                <p className="text-slate-600 mt-1">Discover upcoming sessions and join instantly.</p>
                <span className="btn-secondary mt-4 inline-block">Browse Sessions →</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}


