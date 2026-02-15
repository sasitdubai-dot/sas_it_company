import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type ServiceLink = {
  name: string;
  href: string;
  description?: string;
  badge?: string;
};

type RelatedServicesProps = {
  title?: string;
  links: ServiceLink[];
};

export default function RelatedServices({
  title = "Related IT Services in Dubai",
  links,
}: RelatedServicesProps) {
  return (
    <section className="mt-16">
      {/* divider glow */}
      <div className="relative mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="absolute inset-x-0 -top-6 h-16 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl" />
      </div>

      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
          >
            {/* background glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-purple-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <div>
                {service.badge && (
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 mb-3">
                    {service.badge}
                  </div>
                )}

                <h3 className="text-white text-lg font-semibold leading-snug">
                  {service.name}
                </h3>

                {service.description && (
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>

              <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:border-blue-400/30">
                <ArrowRightIcon className="h-5 w-5 text-blue-300" />
              </div>
            </div>

            <div className="mt-5 text-sm font-medium text-blue-300 group-hover:text-blue-200">
              Explore service →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
