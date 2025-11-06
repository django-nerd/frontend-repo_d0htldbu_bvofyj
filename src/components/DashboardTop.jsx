import { useMemo } from 'react';
import { Activity, Users, Phone, Calendar, FileText } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const kpiStyle =
  'rounded-xl bg-white shadow-sm ring-1 ring-black/5 p-4 flex items-center justify-between';

function KPI({ icon: Icon, label, value, trend }) {
  return (
    <div className={kpiStyle}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs text-slate-500">{label}</div>
          <div className="text-xl font-semibold text-slate-900">{value}</div>
        </div>
      </div>
      {trend && (
        <span className={`text-xs font-medium ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
  );
}

function FunnelBar({ label, count, total, color }) {
  const width = useMemo(() => {
    if (!total) return '0%';
    const pct = Math.max(4, Math.round((count / total) * 100));
    return pct + '%';
  }, [count, total]);

  return (
    <div className="flex items-center gap-3">
      <div className="w-32 text-xs text-slate-600">{label}</div>
      <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
        <div className="h-full rounded-full" style={{ width, background: color }} />
      </div>
      <div className="w-16 text-right text-sm font-medium text-slate-900">{count}</div>
    </div>
  );
}

export default function DashboardTop({ stats }) {
  const total = stats?.qualified ?? 0;
  return (
    <section className="relative">
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
        <div className="absolute inset-x-0 top-0 p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">AutomateFlow</h1>
            <p className="text-sm text-slate-600">AI-powered sales automation command center</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">Live</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
        <KPI icon={Users} label="Total Leads This Week" value={stats.leadsThisWeek} trend={12} />
        <KPI icon={Phone} label="Calls Completed" value={stats.callsCompleted} trend={6} />
        <KPI icon={Calendar} label="Meetings Booked" value={stats.meetingsBooked} trend={3} />
        <KPI icon={FileText} label="Proposals Sent" value={stats.proposalsSent} trend={-2} />
        <KPI icon={Activity} label="Overall Conversion" value={`${stats.conversion}%`} />
      </div>

      <div className="mt-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium text-slate-900">Pipeline Funnel</h3>
          <span className="text-xs text-slate-500">Qualified → Contacted → Interested → Meeting Booked</span>
        </div>
        <div className="space-y-3">
          <FunnelBar label="Qualified" count={stats.qualified} total={total} color="#7C3AED" />
          <FunnelBar label="Contacted" count={stats.contacted} total={total} color="#6366F1" />
          <FunnelBar label="Interested" count={stats.interested} total={total} color="#22C55E" />
          <FunnelBar label="Meeting Booked" count={stats.meetingBooked} total={total} color="#F59E0B" />
        </div>
      </div>
    </section>
  );
}
