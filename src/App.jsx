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
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        <aside className="hidden md:flex md:w-64 bg-slate-900 text-slate-100 min-h-screen flex-col">
          <div className="px-6 py-5 border-b border-white/10">
            <div className="text-lg font-semibold tracking-tight">AutomateFlow</div>
            <div className="text-xs text-slate-400">Sales Automation</div>
          </div>
          <nav className="p-4 space-y-2 text-sm">
            <a className="block rounded-md px-3 py-2 bg-white/10">Dashboard</a>
            <a className="block rounded-md px-3 py-2 hover:bg-white/5">Leads</a>
            <a className="block rounded-md px-3 py-2 hover:bg-white/5">Calls</a>
            <a className="block rounded-md px-3 py-2 hover:bg-white/5">Proposals</a>
            <a className="block rounded-md px-3 py-2 hover:bg-white/5">Settings</a>
          </nav>
          <div className="mt-auto p-4 text-xs text-slate-400">© {new Date().getFullYear()} AutomateFlow</div>
        </aside>
        <main className="flex-1">
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-slate-900">Command Center</h1>
                <div className="flex items-center gap-2">
                  <button className="rounded-md bg-purple-600 text-white px-3 py-2 text-sm hover:bg-purple-700">New Lead</button>
                  <button className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">Export</button>
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
