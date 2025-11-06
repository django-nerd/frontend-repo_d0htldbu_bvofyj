import { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Search, Filter, PhoneCall, Mail, FileText, CheckCircle2, CircleDollarSign } from 'lucide-react';

const sampleLeads = [
  {
    id: 'L-001',
    name: 'Sarah Miller',
    company: 'TechNova',
    stage: 'Interested',
    score: 86,
    value: 24000,
    lastTouch: '2h',
    background: {
      company: 'AI-driven analytics platform serving retail brands.',
      person: 'Head of Marketing, 8y experience. Interests: growth ops, automation.'
    },
    call: {
      summary: {
        pain: 'Manual campaign reporting taking 10+ hours weekly. Need faster insights.',
        budget: '$20-30k/yr allocated for revops tools.',
        objections: 'Concerned about integration with legacy CRM.',
        next: 'Book a 45-min deep-dive with solutions engineer next week.'
      }
    },
    timeline: [
      { type: 'call', label: 'Discovery call', when: 'Today 10:10' },
      { type: 'email', label: 'Follow-up email', when: 'Today 10:40' },
      { type: 'email', label: 'Case study sent', when: 'Today 11:15' }
    ]
  },
  {
    id: 'L-002',
    name: 'David Chen',
    company: 'CloudBridge',
    stage: 'Contacted',
    score: 72,
    value: 12000,
    lastTouch: '1d',
    background: {
      company: 'Cloud migration consultancy for fintech.',
      person: 'CTO, ex-AWS. Looking to streamline outbound.'
    },
    call: {
      summary: {
        pain: 'Outbound SDR ramp time and quality vary widely.',
        budget: 'Open to pilot, up to $10k for first quarter.',
        objections: 'Wants clear attribution on meetings booked.',
        next: 'Share proposal and 2 references.'
      }
    },
    timeline: [
      { type: 'call', label: 'Intro call', when: 'Yesterday 16:00' },
      { type: 'email', label: 'Proposal sent', when: 'Yesterday 18:30' }
    ]
  }
];

const statusColors = {
  Qualified: 'bg-indigo-100 text-indigo-700',
  Contacted: 'bg-blue-100 text-blue-700',
  Interested: 'bg-emerald-100 text-emerald-700',
  'Meeting Booked': 'bg-amber-100 text-amber-700'
};

function Badge({ children, color }) {
  return <span className={`px-2 py-0.5 text-xs rounded-full ${color}`}>{children}</span>;
}

function RowDetails({ lead }) {
  const s = lead.call.summary;
  return (
    <div className="px-4 pb-6 pt-2 bg-slate-50/50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <h4 className="text-sm font-semibold text-slate-900">Researched Background</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <p><span className="font-medium">Company:</span> {lead.background.company}</p>
            <p><span className="font-medium">Person:</span> {lead.background.person}</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <h4 className="text-sm font-semibold text-slate-900">Call Intelligence</h4>
          <div className="mt-3 grid grid-cols-1 gap-3 text-sm">
            <div>
              <div className="font-semibold">Key Pain Points</div>
              <p className="text-slate-700">{s.pain}</p>
            </div>
            <div>
              <div className="font-semibold">Budget Discussed</div>
              <p className="text-slate-700">{s.budget}</p>
            </div>
            <div>
              <div className="font-semibold">Noted Objections</div>
              <p className="text-slate-700">{s.objections}</p>
            </div>
            <div>
              <div className="font-semibold">Agreed Next Step</div>
              <p className="text-slate-700">{s.next}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <h4 className="text-sm font-semibold text-slate-900">Communication Timeline</h4>
          <ol className="mt-3 space-y-3">
            {lead.timeline.map((t, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                {t.type === 'call' && <PhoneCall className="h-4 w-4 text-indigo-600" />}
                {t.type === 'email' && <Mail className="h-4 w-4 text-blue-600" />}
                <span className="font-medium">{t.label}</span>
                <span className="ml-auto text-xs text-slate-500">{t.when}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function LeadTable() {
  const [query, setQuery] = useState('');
  const [stage, setStage] = useState('All');
  const [open, setOpen] = useState({});

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return sampleLeads.filter((l) =>
      (stage === 'All' || l.stage === stage) &&
      (l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q))
    );
  }, [query, stage]);

  return (
    <section className="rounded-xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-b border-slate-100">
        <h3 className="text-sm font-medium text-slate-900">Lead Intelligence</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or company"
              className="pl-8 pr-3 py-2 w-56 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="appearance-none pl-8 pr-8 py-2 w-48 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {['All','Qualified','Contacted','Interested','Meeting Booked'].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 text-xs uppercase tracking-wide text-slate-500 bg-slate-50">
          <div className="col-span-4">Lead</div>
          <div className="col-span-2">Stage</div>
          <div className="col-span-2">Score</div>
          <div className="col-span-2">Value</div>
          <div className="col-span-2 text-right">Last Touch</div>
        </div>
        {filtered.map((lead) => {
          const isOpen = !!open[lead.id];
          return (
            <div key={lead.id} className="">
              <button
                onClick={() => setOpen((o) => ({ ...o, [lead.id]: !isOpen }))}
                className="w-full grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-slate-50"
              >
                <div className="col-span-4 flex items-center gap-3 text-left">
                  {isOpen ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronRight className="h-4 w-4 text-slate-400" />}
                  <div>
                    <div className="text-sm font-medium text-slate-900">{lead.name}</div>
                    <div className="text-xs text-slate-500">{lead.company}</div>
                  </div>
                </div>
                <div className="col-span-2">
                  <Badge color={statusColors[lead.stage]}>{lead.stage}</Badge>
                </div>
                <div className="col-span-2 text-slate-900 text-sm flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {lead.score}
                </div>
                <div className="col-span-2 text-slate-900 text-sm flex items-center gap-1">
                  <CircleDollarSign className="h-4 w-4 text-amber-500" /> ${lead.value.toLocaleString()}
                </div>
                <div className="col-span-2 text-right text-sm text-slate-600">{lead.lastTouch}</div>
              </button>
              {isOpen && <RowDetails lead={lead} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
