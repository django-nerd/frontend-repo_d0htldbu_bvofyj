import { useMemo } from 'react';

const proposals = [
  { id: 1, client: 'Global Solutions', value: 38000, sent: '2025-10-24', status: 'Sent' },
  { id: 2, client: 'TechNova', value: 24000, sent: '2025-10-25', status: 'Viewed' },
  { id: 3, client: 'CloudBridge', value: 12000, sent: '2025-10-25', status: 'Accepted' },
  { id: 4, client: 'Horizon Labs', value: 18000, sent: '2025-10-26', status: 'Declined' },
];

const statusBadge = {
  Sent: 'bg-slate-500/20 text-slate-200 border border-slate-400/30',
  Viewed: 'bg-blue-500/20 text-blue-200 border border-blue-400/30',
  Accepted: 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30',
  Declined: 'bg-rose-500/20 text-rose-200 border border-rose-400/30'
};

export default function ProposalTable() {
  const total = useMemo(() => proposals.reduce((s, p) => s + p.value, 0), []);

  return (
    <section className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-sm border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <h3 className="text-sm font-medium text-slate-100">Proposal Status</h3>
        <div className="text-xs text-slate-300/80">Total pipeline value: ${total.toLocaleString()}</div>
      </div>
      <div className="divide-y divide-white/10">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs uppercase tracking-wide text-slate-300/80 bg-white/5">
          <div className="col-span-5">Client</div>
          <div className="col-span-3">Value</div>
          <div className="col-span-2">Sent</div>
          <div className="col-span-2 text-right">Status</div>
        </div>
        {proposals.map((p) => (
          <div key={p.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-white/5 transition-colors">
            <div className="col-span-5 text-sm text-slate-100">{p.client}</div>
            <div className="col-span-3 text-sm text-slate-100">${p.value.toLocaleString()}</div>
            <div className="col-span-2 text-sm text-slate-300/90">{p.sent}</div>
            <div className="col-span-2 text-right">
              <span className={`px-2 py-0.5 text-xs rounded-full ${statusBadge[p.status]}`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
