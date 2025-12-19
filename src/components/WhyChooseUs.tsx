import Image from 'next/image';

const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '250+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support Available' },
    { value: '10+', label: 'Years of Experience' }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY CHOOSE US</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Left Stats */}
                    <div className="space-y-8 flex flex-col h-full justify-center">
                        {stats.slice(0, 2).map((stat, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors w-full flex-1 flex flex-col justify-center">
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className="relative h-[500px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-end justify-center">
                            {/* Person Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/person.jpg"
                                    alt="Dedicated Team Member"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 absolute inset-0 z-10" />

                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                                <p className="text-lg font-medium text-white">Dedicated Team</p>
                                <p className="text-sm text-gray-400">Ready to serve you</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Stats */}
                    <div className="space-y-8 flex flex-col h-full justify-center">
                        {stats.slice(2, 4).map((stat, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors w-full flex-1 flex flex-col justify-center">
                                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
