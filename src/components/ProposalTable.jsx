import { useMemo } from 'react';

const proposals = [
  { id: 1, client: 'Global Solutions', value: 38000, sent: '2025-10-24', status: 'Sent' },
  { id: 2, client: 'TechNova', value: 24000, sent: '2025-10-25', status: 'Viewed' },
  { id: 3, client: 'CloudBridge', value: 12000, sent: '2025-10-25', status: 'Accepted' },
  { id: 4, client: 'Horizon Labs', value: 18000, sent: '2025-10-26', status: 'Declined' },
];

const statusBadge = {
  Sent: 'bg-slate-200 text-slate-700',
  Viewed: 'bg-blue-100 text-blue-700',
  Accepted: 'bg-emerald-100 text-emerald-700',
  Declined: 'bg-rose-100 text-rose-700'
};

export default function ProposalTable() {
  const total = useMemo(() => proposals.reduce((s, p) => s + p.value, 0), []);

  return (
    <section className="rounded-xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
        <h3 className="text-sm font-medium text-slate-900">Proposal Status</h3>
        <div className="text-xs text-slate-500">Total pipeline value: ${total.toLocaleString()}</div>
      </div>
      <div className="divide-y divide-slate-100">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs uppercase tracking-wide text-slate-500 bg-slate-50">
          <div className="col-span-5">Client</div>
          <div className="col-span-3">Value</div>
          <div className="col-span-2">Sent</div>
          <div className="col-span-2 text-right">Status</div>
        </div>
        {proposals.map((p) => (
          <div key={p.id} className="grid grid-cols-12 gap-2 px-4 py-3 items-center">
            <div className="col-span-5 text-sm text-slate-900">{p.client}</div>
            <div className="col-span-3 text-sm text-slate-900">${p.value.toLocaleString()}</div>
            <div className="col-span-2 text-sm text-slate-700">{p.sent}</div>
            <div className="col-span-2 text-right">
              <span className={`px-2 py-0.5 text-xs rounded-full ${statusBadge[p.status]}`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
