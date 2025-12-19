import { Shield, Server, Cctv, Settings, Phone, MonitorPlay } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: Shield,
        title: 'Networking & Security',
        description: 'Secure and robust network infrastructure for your business.',
        link: '/services#networking'
    },
    {
        icon: Server,
        title: 'Server Solutions',
        description: 'High-performance server setup and maintenance.',
        link: '/services#servers'
    },
    {
        icon: Cctv,
        title: 'CCTV & Surveillance',
        description: 'Advanced monitoring systems for complete security.',
        link: '/services#cctv'
    },
    {
        icon: Settings,
        title: 'AMC Services',
        description: 'Annual maintenance contracts to keep your IT running smooth.',
        link: '/services'
    },
    {
        icon: Phone,
        title: 'Telephony Solutions',
        description: 'Modern communication systems for seamless connectivity.',
        link: '/services'
    },
    {
        icon: MonitorPlay,
        title: 'Smart Meeting Rooms',
        description: 'State-of-the-art audiovisual setups for conferences.',
        link: '/services'
    }
];

export default function Services() {
    return (
        <section className="py-24 relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden" id="services">
            <div className="container mx-auto px-6">
                <div className="p-12 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,212,255,0.4),0_0_25px_rgba(255,27,141,0.3)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.6),0_0_40px_rgba(255,27,141,0.5)]">
                                    <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{service.description}</p>

                                <Link
                                    href={service.link}
                                    className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-2"
                                >
                                    Learn more
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
