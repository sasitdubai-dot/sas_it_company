import { Wallet, Activity, Clock, Users, HeartPulse, FileText } from 'lucide-react';

const amcBenefits = [
  {
    icon: Wallet,
    title: 'Predictable IT Costs',
    description: 'Fixed monthly fee. No surprise repair bills. Budget friendly.',
  },
  {
    icon: Activity,
    title: 'Minimized Downtime',
    description: 'Proactive maintenance catches problems before they cause failures.',
  },
  {
    icon: Clock,
    title: 'Priority Response',
    description: 'AMC customers get priority over ad-hoc service requests.',
  },
  {
    icon: Users,
    title: 'Expert Team Available',
    description: 'Certified engineers familiar with your environment. No re-explaining issues.',
  },
  {
    icon: HeartPulse,
    title: 'Regular Health Checks',
    description: 'Scheduled visits ensure everything runs optimally. Not just break-fix.',
  },
  {
    icon: FileText,
    title: 'Comprehensive Reporting',
    description: 'Monthly reports show what we did, current status, recommendations.',
  },
];

export default function WhyAMC() {
  return (
    <section className="py-24 relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden" id="amc">
      <div className="container mx-auto px-6">
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY AMC WITH SAS IT?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amcBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
                  <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}