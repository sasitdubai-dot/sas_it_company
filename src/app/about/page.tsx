import Link from 'next/link';
import Image from 'next/image';
import {
  UserGroupIcon,
  ShieldCheckIcon,
  TrophyIcon,
  GlobeAltIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '250+' },
    { label: 'Team Members', value: '15+' },
  ];

  const team = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Chief Executive Officer',
      experience: '15+ years in IT solutions',
      image: '/images/team/ceo.jpg',
      bio: 'Visionary leader with extensive experience in enterprise IT solutions and business strategy.',
    },
    {
      name: 'Sarah Wilson',
      position: 'Technical Director',
      experience: '12+ years in networking',
      image: '/images/team/technical-director.jpg',
      bio: 'Expert in network infrastructure, cybersecurity, and system integration solutions.',
    },
    {
      name: 'Mohammed Hassan',
      position: 'Operations Manager',
      experience: '10+ years in project management',
      image: '/images/team/operations.jpg',
      bio: 'Specialized in project delivery, quality assurance, and client relationship management.',
    },
    {
      name: 'Lisa Kumar',
      position: 'Lead Developer',
      experience: '8+ years in web development',
      image: '/images/team/developer.jpg',
      bio: 'Full-stack developer with expertise in modern web technologies and e-commerce solutions.',
    },
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Dependable solutions with 99.9% uptime guarantee and 24/7 support.',
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Focus',
      description: 'Your success is our priority. We build long-term partnerships.',
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'Delivering superior quality in every project we undertake.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Innovation',
      description: 'Staying ahead with the latest technology trends and solutions.',
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-gradient page-section">
        <div className="page-content">
          <div className="text-center mb-16">
            <h1 className="page-title">
              About <span className="text-gradient">SAS IT Services</span>
            </h1>
            <p className="page-subtitle">
              Your trusted IT partner in Dubai, UAE. We combine expertise, innovation, 
              and dedication to deliver exceptional technology solutions for businesses of all sizes.
            </p>
          </div>

          {/* Stats */}
          <div className="page-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="page-section" style={{backgroundColor: '#16213e'}}>
        <div className="page-content">
          <div className="page-grid" style={{gridTemplateColumns: '1fr', gap: '3rem'}}>
            <div>
              <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem'}}>
                Our Story
              </h2>
              <p style={{color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.125rem', lineHeight: '1.6'}}>
                Founded in 2014, SAS IT Services emerged from a vision to bridge the technology 
                gap for businesses in Dubai and across the UAE. What started as a small team of 
                passionate IT professionals has grown into a comprehensive technology solutions provider.
              </p>
              <p style={{color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.125rem', lineHeight: '1.6'}}>
                Over the years, we&apos;ve helped hundreds of businesses streamline their operations, 
                enhance security, and embrace digital transformation. Our commitment to excellence 
                and customer satisfaction has made us a trusted partner for companies ranging from 
                startups to large enterprises.
              </p>
              <p style={{color: '#e2e8f0', fontSize: '1.125rem', lineHeight: '1.6'}}>
                Today, we continue to evolve with the rapidly changing technology landscape, 
                ensuring our clients always have access to the most innovative and reliable IT solutions.
              </p>
            </div>
            <div style={{textAlign: 'center'}}>
              <Image
                src="/images/logo.jpeg"
                alt="SAS IT Services Office"
                width={600}
                height={400}
                style={{borderRadius: '0.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', maxWidth: '100%'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="page-section">
        <div className="page-content">
          <div className="page-grid" style={{gridTemplateColumns: '1fr 1fr', gap: '3rem'}}>
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{width: '4rem', height: '4rem', backgroundColor: '#4a9eff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'}}>
                <GlobeAltIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}}>Our Vision</h3>
              <p style={{color: '#e2e8f0', fontSize: '1.125rem', lineHeight: '1.6'}}>
                To be the leading IT solutions provider in the UAE, empowering businesses 
                with cutting-edge technology that drives growth, efficiency, and innovation 
                in the digital age.
              </p>
            </div>
            
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{width: '4rem', height: '4rem', backgroundColor: '#4a9eff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto'}}>
                <HeartIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}}>Our Mission</h3>
              <p style={{color: '#e2e8f0', fontSize: '1.125rem', lineHeight: '1.6'}}>
                To deliver exceptional IT services that exceed client expectations through 
                innovative solutions, superior support, and lasting partnerships that 
                contribute to our clients&apos; success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="page-section" style={{backgroundColor: '#16213e'}}>
        <div className="page-content">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="page-title">
              Our Core Values
            </h2>
            <p className="page-subtitle" style={{marginBottom: 0}}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="why-choose-grid">
            {values.map((value, index) => (
              <div key={index} className="card why-choose-item">
                <value.icon className="why-choose-icon" />
                <h3 className="why-choose-title">
                  {value.title}
                </h3>
                <p className="why-choose-description">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="page-section">
        <div className="page-content">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="page-title">
              Meet Our Team
            </h2>
            <p className="page-subtitle" style={{marginBottom: 0}}>
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="why-choose-grid">
            {team.map((member, index) => (
              <div key={index} className="card why-choose-item">
                <div style={{width: '6rem', height: '6rem', backgroundColor: '#0f3460', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <UserGroupIcon style={{height: '3rem', width: '3rem', color: '#4a9eff'}} />
                </div>
                <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem'}}>
                  {member.name}
                </h3>
                <p style={{color: '#4a9eff', marginBottom: '0.5rem', fontWeight: '500'}}>
                  {member.position}
                </p>
                <p style={{color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.75rem'}}>
                  {member.experience}
                </p>
                <p style={{color: '#e2e8f0', fontSize: '0.875rem'}}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Work with Our Expert Team?
          </h2>
          <p className="cta-description">
            Let&apos;s discuss how we can help transform your IT infrastructure
          </p>
          
          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn-primary">
              Contact Our Team
            </Link>
            <Link href="/services" className="cta-btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
