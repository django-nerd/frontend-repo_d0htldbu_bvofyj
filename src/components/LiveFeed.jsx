import { useEffect, useRef, useState } from 'react';
import { Bell, PhoneCall, CalendarCheck, FileText, Eye, UserPlus } from 'lucide-react';

const initialEvents = [
  { id: 1, type: 'lead', icon: UserPlus, message: 'New Lead: Sarah Miller from TechNova added.', time: 'Just now' },
  { id: 2, type: 'call', icon: PhoneCall, message: 'Call completed with David Chen. Summary ready.', time: '2m' },
  { id: 3, type: 'meeting', icon: CalendarCheck, message: "Meeting Booked: Demo with 'Global Solutions' on Fri, Oct 27.", time: '8m' },
  { id: 4, type: 'proposal', icon: FileText, message: "Proposal 'Q4 Marketing Plan' sent to Emily Jones.", time: '14m' },
  { id: 5, type: 'view', icon: Eye, message: "Proposal 'Website Redesign' was VIEWED by Alex Garcia.", time: '21m' },
];

export default function LiveFeed() {
  const [events, setEvents] = useState(initialEvents);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const add = Math.random() > 0.5;
      if (!add) return;
      const library = [
        { type: 'lead', icon: UserPlus, message: 'New Lead: Olivia Park from NovaCorp added.' },
        { type: 'call', icon: PhoneCall, message: 'Call completed with Priya Mehta. Summary ready.' },
        { type: 'meeting', icon: CalendarCheck, message: "Meeting Booked: Strategy call with 'Horizon Labs'." },
        { type: 'proposal', icon: FileText, message: "Proposal 'Growth Revamp' sent to Michael Lee." },
        { type: 'view', icon: Eye, message: "Proposal 'AI SDR Pilot' was VIEWED by Jordan Smith." },
      ];
      const next = library[Math.floor(Math.random() * library.length)];
      setEvents((prev) => [
        { id: Date.now(), ...next, time: 'Just now' },
        ...prev.map((e) => ({ ...e, time: e.time === 'Just now' ? '1m' : e.time }))
      ].slice(0, 12));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [events]);

  return (
    <section className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-sm border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
            <Bell className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-medium text-slate-100">Live Activity & Alerts</h3>
        </div>
        <span className="text-xs text-slate-300/80">Real-time updates</span>
      </div>
      <div ref={containerRef} className="max-h-72 overflow-auto divide-y divide-white/10">
        {events.map((e) => (
          <div key={e.id} className="px-4 py-3 flex items-start gap-3 hover:bg-white/5 transition-colors">
            <div className="mt-0.5 h-8 w-8 rounded-lg bg-white/10 text-slate-200 flex items-center justify-center">
              <e.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-100">
                {e.type === 'lead' && '🟢 '}
                {e.type === 'call' && '📞 '}
                {e.type === 'meeting' && '✅ '}
                {e.type === 'proposal' && '📄 '}
                {e.type === 'view' && '👀 '}
                {e.message}
              </p>
              <div className="text-xs text-slate-400 mt-0.5">{e.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
