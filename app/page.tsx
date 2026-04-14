'use client';

import { useState, useEffect } from 'react';

const services = [
  {
    title: 'Alarm Monitoring',
    desc: 'Round-the-clock intrusion detection with instant alerts to you and emergency responders. Our sensors cover every entry point — doors, windows, garages, and more.',
    icon: '🔔',
  },
  {
    title: 'Video Surveillance',
    desc: 'HD cameras with night vision, motion zones, and cloud storage. View live feeds or review recordings from anywhere on your phone, tablet, or desktop.',
    icon: '📹',
  },
  {
    title: 'Access Control',
    desc: 'Keyless entry with smart locks, PIN codes, and biometric readers. Manage who enters your property and when — remotely or on-site.',
    icon: '🔐',
  },
  {
    title: 'Fire Detection',
    desc: 'Smoke, heat, and carbon monoxide detectors linked to our monitoring center. We dispatch fire services the moment a threat is detected.',
    icon: '🔥',
  },
  {
    title: 'Smart Home Security',
    desc: 'Integrate lights, thermostats, garage doors, and locks into one unified system. Automate routines and control everything from a single app.',
    icon: '🏠',
  },
  {
    title: 'Commercial Systems',
    desc: 'Scalable security for offices, warehouses, retail, and industrial sites. Multi-zone alarms, CCTV, access logs, and compliance reporting built in.',
    icon: '🏢',
  },
  {
    title: 'Security Consultation',
    desc: 'A licensed security expert visits your property, identifies vulnerabilities, and designs a custom protection plan tailored to your exact needs.',
    icon: '📋',
  },
  {
    title: '24/7 Monitoring Center',
    desc: 'Our UL-listed, Five Diamond-certified monitoring center never sleeps. Trained operators verify alarms and dispatch help in an average of 15 seconds.',
    icon: '🛰️',
  },
];

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/mo',
    features: [
      '24/7 professional monitoring',
      'Door & window sensors (up to 6)',
      'Motion detector',
      'Yard sign & window stickers',
      'Mobile app with instant alerts',
      'Battery backup included',
    ],
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/mo',
    featured: true,
    features: [
      'Everything in Basic',
      'Indoor HD camera',
      'Video doorbell',
      'Smart lock integration',
      'Environmental sensors (flood, freeze)',
      'Professional installation',
      'Lifetime equipment warranty',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Professional',
      'Multi-site management',
      'Outdoor cameras (up to 8)',
      'Access control system',
      'Cellular & internet backup',
      'Dedicated account manager',
      'Priority emergency response',
      'On-site security consultation',
    ],
  },
];

const testimonials = [
  {
    quote: 'After a break-in attempt on our street, we called Sentinel the same day. The installer was professional, thorough, and explained every detail. We sleep better knowing they are watching.',
    name: 'Jessica M.',
    location: 'Austin, TX',
  },
  {
    quote: 'We run three retail locations and switched from a national provider to Sentinel. Response times dropped from minutes to seconds, and the app actually works reliably. Best decision we made.',
    name: 'David R.',
    location: 'Round Rock, TX',
  },
  {
    quote: 'The smart home integration sealed the deal. I can lock doors, view cameras, and arm the system all from one place. My elderly parents feel safe, and I can check in from across the country.',
    name: 'Priya K.',
    location: 'Cedar Park, TX',
  },
];

const whyUsItems = [
  {
    title: 'Lightning-Fast Response',
    desc: 'Our monitoring center averages 15 seconds from alarm to action. While national chains route you through call trees, our operators are already dispatching help.',
  },
  {
    title: 'No Contracts, Ever',
    desc: 'We earn your business every month. Cancel anytime with zero penalties. We include all equipment at no extra charge — no hidden fees, no gotchas.',
  },
  {
    title: 'Local Texas Team',
    desc: 'Every technician, operator, and support agent is based in Texas. When you call, you talk to someone who knows your neighborhood and cares about your community.',
  },
  {
    title: 'Five Diamond Certified',
    desc: 'Our monitoring center holds the UL Five Diamond certification — the highest industry standard. Fewer than 5% of monitoring centers in North America achieve this rating.',
  },
];

const stats = [
  { val: '20+', label: 'Years of Service' },
  { val: '50,000+', label: 'Homes Protected' },
  { val: '15 sec', label: 'Avg. Response Time' },
  { val: '99.99%', label: 'Uptime Reliability' },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-[var(--text-primary)]">

      {/* ========== EMERGENCY BANNER ========== */}
      <div className="emergency-banner">
        <span className="emergency-icon">⚠️</span>
        <span className="emergency-text">
          24/7 Emergency Monitoring Active — Call Now: (512) 555-0199 — Austin&apos;s Most Trusted Security Team
        </span>
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav className="nav-glass sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="heading text-2xl font-bold neon-text">Sentinel</h1>
          <p className="text-xs tracking-[0.25em] uppercase opacity-80 font-body">Security Systems</p>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] tracking-widest uppercase font-body font-medium text-[var(--text-secondary)]">
          {['services', 'plans', 'why-us', 'testimonials', 'contact'].map((s) => (
            <button key={s} onClick={() => scrollTo(s)} className="nav-link">
              {s.replace('-', ' ')}
            </button>
          ))}
        </div>
        <button onClick={() => scrollTo('contact')} className="btn">
          Get Quote
        </button>
      </nav>

      <main>
        {/* ========== HERO SECTION ========== */}
        <section className="hero py-28 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal visible">
              <span className="badge">Protecting Austin Since 2003</span>
              <h2 className="heading text-5xl md:text-7xl font-extrabold mt-6 mb-8">
                Your safety.
                <br />
                <span className="neon-text">Our mission.</span>
              </h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-lg font-body">
                Professionally monitored security systems designed for homes and businesses.
                We respond to every alarm in an average of 15 seconds — because when seconds
                count, you need a team that is already moving. Sentinel Security has protected
                over 50,000 homes and businesses across the greater Austin metropolitan area
                for more than two decades. Our commitment to rapid response, cutting-edge
                technology, and genuine customer care has made us Central Texas&apos;s most
                trusted name in security.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => scrollTo('plans')} className="btn">
                  View Plans
                </button>
                <button onClick={() => scrollTo('contact')} className="btn-outline">
                  Free Assessment
                </button>
              </div>
            </div>
            <div className="img-hover reveal visible">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=700&q=80"
                alt="Modern smart home security system"
                className="w-full h-[28rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="card text-center py-8">
                <p className="heading text-3xl md:text-4xl font-bold neon-text">{s.val}</p>
                <p className="text-sm uppercase tracking-wider opacity-80 mt-2 font-body">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section id="services" className="py-28 px-8 section-alt reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge">What We Offer</span>
              <h2 className="heading text-4xl md:text-5xl font-bold mt-6">Comprehensive Security Services</h2>
              <p className="text-sm opacity-90 mt-4 max-w-2xl mx-auto leading-relaxed font-body">
                From a single-family home to a multi-building commercial campus, Sentinel delivers
                end-to-end protection with industry-leading technology and human expertise. Every
                service is backed by our Five Diamond-certified monitoring center, staffed by trained
                professionals who respond to alerts within seconds — not minutes. Whether you need
                basic alarm monitoring or a fully integrated smart security ecosystem, we build
                solutions around your property, your lifestyle, and your budget.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc) => (
                <div key={svc.title} className="card">
                  <span className="text-3xl mb-4 block">{svc.icon}</span>
                  <h3 className="heading text-lg font-bold mb-3">{svc.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed font-body">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PRICING ========== */}
        <section id="plans" className="py-28 px-8 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge">Pricing</span>
              <h2 className="heading text-4xl md:text-5xl font-bold mt-6">Security Plans</h2>
              <p className="text-sm opacity-90 mt-4 font-body">
                No contracts. Cancel anytime. Equipment included with every plan.
                All pricing is transparent — what you see is what you pay, with zero hidden fees
                or surprise charges. Every plan includes professional 24/7 monitoring, cellular
                backup, and access to our award-winning mobile app so you stay connected to your
                property from anywhere in the world.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className="card relative flex flex-col"
                  style={
                    p.featured
                      ? {
                          borderColor: 'var(--neon)',
                          boxShadow: '0 0 40px rgba(0, 212, 255, 0.15)',
                        }
                      : {}
                  }
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge" style={{ background: 'var(--neon)', color: '#000' }}>
                      Most Popular
                    </span>
                  )}
                  <h3 className="heading text-lg mb-1">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`heading font-bold ${p.price === 'Custom' ? 'text-3xl' : 'text-5xl'} neon-text`}>{p.price}</span>
                    <span className="text-sm opacity-90 font-body">{p.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm flex items-start gap-2 font-body">
                        <span className="neon-text mt-0.5">✓</span>
                        <span className="opacity-90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded font-bold text-sm ${p.featured ? 'btn' : 'btn-outline'}`}>
                    {p.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <section id="why-us" className="py-28 px-8 section-alt reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge">Why Sentinel</span>
              <h2 className="heading text-4xl md:text-5xl font-bold mt-6">Why Austin Trusts Us</h2>
              <p className="text-sm opacity-90 mt-4 max-w-2xl mx-auto leading-relaxed font-body">
                We are not a national call center. We are your neighbors — local operators,
                local technicians, and a monitoring center built right here in Texas. Our team
                lives in the communities we serve, and we treat every customer&apos;s safety as
                if it were our own. That personal commitment is what separates Sentinel from
                every other security company operating in Central Texas today.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {whyUsItems.map((item) => (
                <div key={item.title} className="card flex gap-5">
                  <div className="w-1.5 rounded-full flex-shrink-0 bg-[var(--neon)]" />
                  <div>
                    <h3 className="heading text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm opacity-80 leading-relaxed font-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section id="testimonials" className="py-28 px-8 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge">Testimonials</span>
              <h2 className="heading text-4xl md:text-5xl font-bold mt-6">What Our Clients Say</h2>
              <p className="text-sm opacity-90 mt-4 max-w-2xl mx-auto leading-relaxed font-body">
                Do not just take our word for it. Hear from real homeowners and business
                operators across the Austin area who trust Sentinel to keep their properties,
                families, and employees safe around the clock.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="card flex flex-col">
                  <p className="text-sm opacity-80 leading-relaxed flex-1 italic mb-6 font-body">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="heading font-bold text-sm">{t.name}</p>
                    <p className="text-sm opacity-90 font-body">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FREE ASSESSMENT FORM ========== */}
        <section id="contact" className="py-28 px-8 section-alt reveal">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <span className="badge">Get Started</span>
              <h2 className="heading text-4xl md:text-5xl font-bold mt-6 mb-8">
                Request a Free Security Assessment
              </h2>
              <p className="text-sm opacity-80 leading-relaxed mb-8 font-body">
                Tell us about your property and we will design a custom security plan — no
                obligation, no pressure. A licensed security consultant will review your
                submission, assess your vulnerabilities, and deliver a personalized protection
                proposal within 24 hours. Most assessments include a complimentary on-site
                visit to evaluate entry points, camera placement, and sensor coverage so you
                get a plan that actually fits your property.
              </p>
              <div className="space-y-4 text-sm font-body">
                <div className="flex items-center gap-3 opacity-80">
                  <span className="neon-text">📍</span>
                  Serving the Greater Austin Metro Area
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <span className="neon-text">📞</span>
                  <a href="tel:(512)555-0199" className="neon-text">(512) 555-0199</a>
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <span className="neon-text">📧</span>
                  <a href="mailto:info@sentinelsecurity.com" className="neon-text">info@sentinelsecurity.com</a>
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <span className="neon-text">🕐</span>
                  Mon–Fri 8 AM – 8 PM, Sat 9 AM – 5 PM
                </div>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="card h-full flex flex-col items-center justify-center text-center">
                  <span className="text-5xl mb-4">✅</span>
                  <h3 className="heading text-2xl font-bold mb-2">Assessment Request Sent!</h3>
                  <p className="text-sm opacity-80 font-body">
                    A security consultant will contact you within 24 hours to discuss your
                    custom protection plan and schedule a free on-site assessment.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <input type="text" placeholder="Full Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="text" placeholder="Property Address" />
                  <select defaultValue="">
                    <option value="" disabled>Property Type</option>
                    <option>Single-Family Home</option>
                    <option>Apartment / Condo</option>
                    <option>Commercial / Business</option>
                    <option>Industrial / Warehouse</option>
                  </select>
                  <select defaultValue="">
                    <option value="" disabled>Interested Plan</option>
                    <option>Basic — $29/mo</option>
                    <option>Professional — $49/mo</option>
                    <option>Enterprise — Custom</option>
                    <option>Not sure yet</option>
                  </select>
                  <textarea placeholder="Tell us about your security needs (optional)" rows={3} />
                  <button type="submit" className="w-full btn py-4 text-base">
                    Request Free Assessment
                  </button>
                  <p className="text-sm opacity-80 text-center font-body">
                    By submitting, you agree to be contacted by Sentinel Security. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="footer-glow py-12 px-8 text-center" style={{ borderTop: '1px solid rgba(0, 212, 255, 0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="heading text-xl font-bold mb-2 neon-text">Sentinel Security Systems</p>
          <p className="text-sm opacity-80 mb-1 font-body">Austin, Texas — Protecting Central Texas Since 2003</p>
          <p className="text-sm opacity-60 font-body">
            © {new Date().getFullYear()} Sentinel Security Systems. All rights reserved. TX License #B-12345.
          </p>
        </div>
      </footer>
    </div>
  );
}
