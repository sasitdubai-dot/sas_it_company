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
  links?: ServiceLink[];
  currentService?: string;
};

const defaultLinks: ServiceLink[] = [
  { name: "IT Support Dubai", href: "/it-support-dubai", description: "24/7 on-site and remote IT support" },
  { name: "IT AMC Dubai", href: "/amc-annual-maintenance-dubai", description: "Annual maintenance contracts" },
  { name: "CCTV Installation Dubai", href: "/commercial-cctv-installation-dubai", description: "Commercial surveillance systems" },
  { name: "Networking & Security", href: "/networking-security-dubai", description: "Firewalls, WiFi, structured cabling" },
  { name: "Server Solutions Dubai", href: "/server-solutions-dubai", description: "On-premise and cloud servers" },
  { name: "Access Control Dubai", href: "/access-control-system-dubai", description: "Biometric and RFID systems" },
];

export default function RelatedServices({
  title = "Related IT Services in Dubai",
  links,
  currentService,
}: RelatedServicesProps) {
  const displayLinks = (links ?? defaultLinks).filter(
    (l) => !currentService || l.href !== `/${currentService}`
  );

  return (
    <section className="py-16 px-6 bg-gray-900 border-t border-gray-800">
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-900 px-4 text-sm text-gray-500 uppercase tracking-widest">
            {title}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayLinks.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="relative group bg-[#0f1b2d] border border-gray-700 hover:border-[#4a9eff]/60 rounded-xl p-5 transition-all duration-200"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4a9eff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {service.badge && (
              <span className="inline-block mb-2 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full">
                {service.badge}
              </span>
            )}

            <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#4a9eff] transition-colors">
              {service.name}
            </h3>

            {service.description && (
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {service.description}
              </p>
            )}

            <span className="inline-flex items-center gap-1 text-[#4a9eff] text-sm font-medium group-hover:gap-2 transition-all">
              Explore service
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
