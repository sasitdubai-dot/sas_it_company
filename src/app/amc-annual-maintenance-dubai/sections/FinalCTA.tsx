'use client';
import { useState } from "react";
import React from "react"

import { motion } from "framer-motion";
import { PhoneIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

type FormData = {
  name: string;
  company: string;
  phone: string;
  users: string;
  issues: string;
  preferredDate: string;
  honeypot: string;
};

export default function FinalCTA() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    users: "",
    issues: "",
    preferredDate: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): Partial<FormData> {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.users.trim()) e.users = "Number of users is required";
    if (form.phone && !/^[+\d\s()-]{6,}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (form.honeypot) return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");

    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm({
        name: "",
        company: "",
        phone: "",
        users: "",
        issues: "",
        preferredDate: "",
        honeypot: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/4 -translate-y-1/2"></div>
        <div className="absolute w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl top-1/2 right-1/4 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Ready to Upgrade Your Network?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Get a free network assessment and security audit today
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 md:mb-8">
                <motion.a
                  href="tel:+971526716178"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Call Now:</span>
                  <span className="hidden sm:inline">+971-526716178</span>
                  <span className="sm:hidden">Call Now</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/971526716178"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  WhatsApp Us
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>Fortinet NSE Certified</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>500+ Networks Deployed</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>99.8% Uptime</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>24/7 NOC Support</span>
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Name */}
                <label className="flex flex-col text-xs sm:text-sm text-gray-200">
                  <span className="mb-1 font-medium">Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`px-3 py-2 rounded-md bg-white/5 border ${
                      errors.name ? "border-red-400" : "border-white/10"
                    } text-white focus:outline-none text-sm`}
                  />
                  {errors.name && <span className="text-xs text-red-300 mt-1">{errors.name}</span>}
                </label>

                {/* Company */}
                <label className="flex flex-col text-xs sm:text-sm text-gray-200">
                  <span className="mb-1 font-medium">Company</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none text-sm"
                  />
                </label>

                {/* Phone */}
                <label className="flex flex-col text-xs sm:text-sm text-gray-200">
                  <span className="mb-1 font-medium">Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`px-3 py-2 rounded-md bg-white/5 border ${
                      errors.phone ? "border-red-400" : "border-white/10"
                    } text-white focus:outline-none text-sm`}
                  />
                  {errors.phone && <span className="text-xs text-red-300 mt-1">{errors.phone}</span>}
                </label>

                {/* Users */}
                <label className="flex flex-col text-xs sm:text-sm text-gray-200">
                  <span className="mb-1 font-medium">Number of Users</span>
                  <input
                    type="text"
                    value={form.users}
                    onChange={(e) => setForm({ ...form, users: e.target.value })}
                    className={`px-3 py-2 rounded-md bg-white/5 border ${
                      errors.users ? "border-red-400" : "border-white/10"
                    } text-white focus:outline-none text-sm`}
                  />
                  {errors.users && <span className="text-xs text-red-300 mt-1">{errors.users}</span>}
                </label>

                {/* Issues */}
                <label className="sm:col-span-2 flex flex-col text-xs sm:text-sm text-gray-200">
                  <span className="mb-1 font-medium">Current Issues</span>
                  <textarea
                    value={form.issues}
                    onChange={(e) => setForm({ ...form, issues: e.target.value })}
                    rows={3}
                    className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none text-sm"
                  />
                </label>

                {/* Preferred Date */}
                <label className="sm:col-span-2 flex flex-col text-xs sm:text-sm text-gray-200">
                  <span className="mb-1 font-medium">Preferred Date for Assessment</span>
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={(e) =>
                      setForm({ ...form, preferredDate: e.target.value })
                    }
                    className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none text-sm [color-scheme:dark]"
                  />
                </label>

                {/* Honeypot field for bots */}
                <input
                  type="text"
                  name="website"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base whitespace-nowrap"
                >
                  {status === "sending" ? "Sending..." : "Submit - Get Free Assessment"}
                </button>

                <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
                  We respond in <strong className="text-white">15 minutes</strong>
                </p>
              </div>

              {status === "success" && (
                <div className="mt-4 text-xs sm:text-sm text-green-300 flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span>Thanks! We received your request and will contact you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 text-xs sm:text-sm text-red-300">
                  Something went wrong. Please try again or call +971-526716178.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
