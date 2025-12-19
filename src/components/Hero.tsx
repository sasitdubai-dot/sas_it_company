import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-primary text-sm font-medium">✨ We Make IT Happen!</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Your Trusted <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57ACFC] to-[#57ACFC]">IT Partner</span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                        Professional IT solutions for businesses in Dubai, UAE. From networking and security to CCTV surveillance and website development – transforming your digital infrastructure.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            href="tel:+971501234567"
                            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Call Now
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center items-center">
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                        {/* Glowing Rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border-2 border-secondary/30 shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Center Content - Logo */}
                        <div className="relative z-10 w-[200px] h-[200px] md:w-[350px] md:h-[350px] flex items-center justify-center p-6">
                            <img
                                src="/sas-logo.jpg"
                                alt="SAS IT Services Logo"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>

                        {/* Glow Effect behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-[100px] rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
