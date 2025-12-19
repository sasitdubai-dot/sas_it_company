import { Phone, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 relative bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden" id="contact">

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400">Have questions or need assistance? Reach out to us!</p>
                </div>

                <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-white/5 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Form */}
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                                Send Message
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <a href="tel:+971501234567" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Phone size={20} className="text-primary" />
                                        </div>
                                        <span>+971-526716178</span>
                                    </a>

                                    <a href="mailto:Info@sasitdubai.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Mail size={20} className="text-secondary" />
                                        </div>
                                        <span>Info@sasitdubai.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
