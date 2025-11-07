import DashboardTop from './components/DashboardTop';
import LiveFeed from './components/LiveFeed';
import LeadTable from './components/LeadTable';
import ProposalTable from './components/ProposalTable';

export default function App() {
  const stats = {
    leadsThisWeek: 58,
    callsCompleted: 34,
    meetingsBooked: 12,
    proposalsSent: 9,
    conversion: 21,
    qualified: 120,
    contacted: 96,
    interested: 48,
    meetingBooked: 22,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] via-[#121225] to-[#0b0b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="relative flex">
        <aside className="hidden md:flex md:w-64 bg-white/5 backdrop-blur-xl text-slate-100 min-h-screen flex-col border-r border-white/10">
          <div className="px-6 py-5 border-b border-white/10">
            <div className="text-lg font-semibold tracking-tight">AutomateFlow</div>
            <div className="text-xs text-slate-300/80">Sales Automation</div>
          </div>
          <nav className="p-4 space-y-2 text-sm">
            <a className="block rounded-lg px-3 py-2 bg-white/10 border border-white/10">Dashboard</a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5 border border-white/10">Leads</a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5 border border-white/10">Calls</a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5 border border-white/10">Proposals</a>
            <a className="block rounded-lg px-3 py-2 hover:bg-white/5 border border-white/10">Settings</a>
          </nav>
          <div className="mt-auto p-4 text-xs text-slate-400">© {new Date().getFullYear()} AutomateFlow</div>
        </aside>
        <main className="flex-1">
          <header className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-slate-50">Command Center</h1>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg bg-purple-600/80 border border-purple-400/30 text-white px-3 py-2 text-sm hover:bg-purple-600 transition-colors">New Lead</button>
                  <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition-colors">Export</button>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
            <DashboardTop stats={stats} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <LeadTable />
              </div>
              <div>
                <LiveFeed />
              </div>
            </div>
            <ProposalTable />
          </div>
        </main>
      </div>
    </div>
  );
}
