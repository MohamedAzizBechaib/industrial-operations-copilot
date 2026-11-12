const navigation = [
  { label: "Dashboard", icon: "▦", active: true },
  { label: "Incidents", icon: "⚠", active: false },
  { label: "Machines", icon: "⚙", active: false },
  { label: "Sites", icon: "⌖", active: false },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-800 bg-slate-900 p-6 md:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">
            IC
          </div>
          <div>
            <h1 className="font-semibold">Industrial Copilot</h1>
            <p className="text-xs text-slate-400">Operations platform</p>
          </div>
        </div>

        <nav className="mt-12 space-y-2">
          {navigation.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${item.active
                ? "bg-blue-600/15 text-blue-400"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 border-t border-slate-800 pt-5">
          <p className="text-xs text-slate-500">Industrial Operations Copilot</p>
          <p className="mt-1 text-xs text-slate-600">Development · v0.1.0</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="md:ml-64">
        <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6 md:px-10">
          <span className="text-sm text-slate-400">
            Manufacturing / Overview
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-400 sm:block">
              Development workspace
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-sm font-medium">
              A
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10">
          <div>
            <p className="text-sm text-blue-400">Operations overview</p>
            <h2 className="mt-2 text-3xl font-bold">Dashboard</h2>
            <p className="mt-2 text-sm text-slate-400">
              Monitor your manufacturing operations and incidents.
            </p>
          </div>

          {/* KPI cards */}
          <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { label: "Total machines", value: "0", detail: "Registered assets" },
              { label: "Active incidents", value: "0", detail: "Require attention" },
              { label: "Critical incidents", value: "0", detail: "Highest severity" },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold">{item.value}</p>
                <p className="mt-2 text-xs text-slate-500">{item.detail}</p>
              </article>
            ))}
          </section>

          {/* Empty state */}
          <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-lg font-semibold">Recent incidents</h3>
            <p className="mt-2 text-sm text-slate-400">
              No incidents available yet. Once machines start sending
              operational events, incidents will appear here.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
