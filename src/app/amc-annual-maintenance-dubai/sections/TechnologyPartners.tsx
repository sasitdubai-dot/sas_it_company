'use client';

export default function TechnologyPartners() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Our Trusted Technology Partners
        </h2>
        <div className="flex justify-center gap-8">
          <div className="w-1/4 text-center">
            <img src="/images/fortinet-logo.png" alt="Fortinet" className="mx-auto mb-4" />
            <p>Fortinet</p>
          </div>
          <div className="w-1/4 text-center">
            <img src="/images/cisco-logo.png" alt="Cisco" className="mx-auto mb-4" />
            <p>Cisco</p>
          </div>
          <div className="w-1/4 text-center">
            <img src="/images/unifi-logo.png" alt="Unifi" className="mx-auto mb-4" />
            <p>Unifi</p>
          </div>
          <div className="w-1/4 text-center">
            <img src="/images/ruckus-logo.png" alt="Ruckus" className="mx-auto mb-4" />
            <p>Ruckus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
