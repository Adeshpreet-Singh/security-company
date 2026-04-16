"use client";
import { useEffect, useRef, useState } from "react";

/* ──── SENTINEL SECURITY — Security Company Landing Page ──── */
/* Layout: Dashboard-inspired grid with monitoring panels, threat map concept */

const SECURITY_STATS = [
  { num: "500+", label: "Clients Protected" },
  { num: "99.9%", label: "Uptime Guarantee" },
  { num: "<2min", label: "Avg Response Time" },
  { num: "24/7", label: "SOC Monitoring" },
];

const SERVICES = [
  {
    title: "Physical Security",
    desc: "Uniformed guards, mobile patrols, and executive protection services tailored to your risk profile. Our officers are trained in de-escalation, emergency response, and customer service to maintain a safe and welcoming environment.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop",
    tags: ["Guards", "Patrol", "Executive Protection"],
  },
  {
    title: "Surveillance Systems",
    desc: "HD and 4K camera installations with AI-powered analytics that detect threats before they escalate. Our systems include facial recognition, license plate reading, and real-time alerts to your security team or our monitoring center.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    tags: ["CCTV", "AI Analytics", "Night Vision"],
  },
  {
    title: "Access Control",
    desc: "Biometric readers, key card systems, and smart locks integrated into a unified platform. Manage who enters your facility, when they enter, and track every access event with detailed audit trails and real-time reporting dashboards.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["Biometric", "Key Cards", "Audit Trails"],
  },
  {
    title: "Cybersecurity",
    desc: "Protect your digital assets with our managed detection and response services. We monitor network traffic, endpoints, and cloud environments 24/7 from our Security Operations Center, identifying and neutralizing threats before data is compromised.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    tags: ["SOC", "MDR", "Penetration Testing"],
  },
  {
    title: "Alarm & Intrusion",
    desc: "State-of-the-art intrusion detection with glass-break sensors, motion detectors, and door contacts that communicate directly with our monitoring center. Verified alarms trigger immediate dispatch of our rapid response team.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    tags: ["Sensors", "Monitoring", "Rapid Response"],
  },
  {
    title: "Risk Assessment",
    desc: "Our certified security consultants conduct thorough vulnerability assessments of your property, identifying weaknesses and designing a layered defense strategy. We deliver actionable reports with prioritized recommendations and budget estimates.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tags: ["Consulting", "Audit", "Compliance"],
  },
];

const THREAT_FEED = [
  { time: "14:23", type: "Access", msg: "Authorized entry - Main Gate - Badge #4521", level: "normal" },
  { time: "14:25", type: "Motion", msg: "Motion detected - Parking Level B2", level: "normal" },
  { time: "14:31", type: "Alert", msg: "Tailgating attempt detected - East Entrance", level: "warning" },
  { time: "14:38", type: "System", msg: "Camera #17 firmware update completed", level: "normal" },
  { time: "14:42", type: "Access", msg: "Failed badge attempt - Server Room", level: "critical" },
  { time: "14:45", type: "Patrol", msg: "Guard checkpoint completed - Building C", level: "normal" },
];

const TEAM = [
  { name: "Commander Vance", role: "Head of Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", exp: "22 years" },
  { name: "Agent Torres", role: "Cybersecurity Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", exp: "14 years" },
  { name: "Officer Chen", role: "Physical Security Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", exp: "18 years" },
  { name: "Analyst Rivera", role: "SOC Manager", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", exp: "11 years" },
];

const CERTIFICATIONS = ["ASIS Certified", "FIPS 140-2", "SOC 2 Type II", "ISO 27001", "UL Listed"];

export default function SentinelSecurityPage() {
  const [activeFeed, setActiveFeed] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-scale, .stagger-children").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveFeed((p) => (p + 1) % THREAT_FEED.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Emergency Banner */}
      <div className="emergency-banner">
        <span className="emergency-icon">⚠️</span>
        <span className="emergency-text">THREAT LEVEL ELEVATED — SECURITY CONSULTATIONS AVAILABLE 24/7</span>
        <span className="emergency-icon">⚠️</span>
      </div>

      {/* Navigation */}
      <nav className="nav-glass" style={{ position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 26 }}>🛡️</span>
            <span className="heading" style={{ fontSize: "1.1rem" }}>
              SENTINEL <span className="neon-text">SECURITY</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Services", "Operations", "Team", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: "var(--text-secondary)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.3s" }}>
                {item}
              </a>
            ))}
            <a href="#contact" className="btn" style={{ fontSize: "0.7rem", padding: "10px 22px" }}>Get Protected</a>
          </div>
        </div>
      </nav>

      {/* HERO — Command Center Layout */}
      <section className="hero" style={{ minHeight: "85vh", padding: "80px 24px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 40%, rgba(0,212,255,0.06) 0%, transparent 60%)", pointerEvents: "none" }}></div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
            {/* Left: Main message */}
            <div style={{ paddingTop: 40 }}>
              <div className="badge" style={{ marginBottom: 20 }}>Certified Security Provider</div>
              <h1 className="heading" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: 20, lineHeight: 1.05 }}>
                PROTECTING<br />
                WHAT <span className="gradient-text">MATTERS MOST</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32, maxWidth: 500 }}>
                Sentinel Security provides integrated physical and digital security solutions for businesses, government facilities, and high-net-worth individuals. Our 24/7 Security Operations Center monitors your assets with military-grade precision.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href="#contact" className="btn cta-pulse">Schedule Assessment</a>
                <a href="#services" className="btn-outline">View Solutions</a>
              </div>
            </div>

            {/* Right: Live feed simulation */}
            <div className="card" style={{ padding: "1.5rem", fontFamily: "monospace", fontSize: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span className="heading neon-text" style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}>LIVE THREAT FEED</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#00ff88", fontSize: "0.7rem" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff88", animation: "dot-pulse 1.5s infinite" }}></span>
                  ONLINE
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 260, overflow: "hidden" }}>
                {THREAT_FEED.map((feed, i) => (
                  <div key={i} style={{
                    padding: "8px 12px",
                    borderRadius: 4,
                    background: feed.level === "critical" ? "rgba(255,23,68,0.1)" : feed.level === "warning" ? "rgba(255,193,7,0.08)" : "rgba(255,255,255,0.03)",
                    borderLeft: `3px solid ${feed.level === "critical" ? "#ff1744" : feed.level === "warning" ? "#ffc107" : "var(--neon)"}`,
                    opacity: i <= activeFeed ? 1 : 0.3,
                    transition: "opacity 0.5s"
                  }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>{feed.time}</span>
                      <span style={{
                        padding: "1px 8px",
                        borderRadius: 2,
                        fontSize: "0.65rem",
                        background: feed.level === "critical" ? "rgba(255,23,68,0.2)" : feed.level === "warning" ? "rgba(255,193,7,0.15)" : "rgba(0,212,255,0.1)",
                        color: feed.level === "critical" ? "#ff1744" : feed.level === "warning" ? "#ffc107" : "var(--neon)"
                      }}>{feed.type}</span>
                      <span style={{ color: "var(--text-secondary)" }}>{feed.msg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: "var(--dark-surface)", borderTop: "1px solid var(--dark-border)", borderBottom: "1px solid var(--dark-border)", padding: "32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
          {SECURITY_STATS.map((s, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-number">{s.num}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services — Stacked Card Layout */}
      <section id="services" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Solutions</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Comprehensive <span className="neon-text">Security</span> Ecosystem
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 650, margin: "16px auto 0" }}>
            Physical and digital security converge in our integrated platform. Every layer of defense works together to create an impenetrable shield around your assets.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {SERVICES.map((svc, i) => (
            <div key={i} className="card reveal" style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "340px 1fr" : "1fr 340px",
              gap: 32,
              alignItems: "center",
              padding: "2rem",
              transitionDelay: `${i * 0.08}s`
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div className="img-hover" style={{ height: 240 }}>
                  <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <h3 className="heading" style={{ fontSize: "1.5rem", marginBottom: 12 }}>{svc.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: 16 }}>{svc.desc}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} style={{ padding: "4px 12px", borderRadius: 3, background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "var(--neon)", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Command Center Visual — Dashboard Grid */}
      <section id="operations" className="section-alt" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge" style={{ marginBottom: 16 }}>Operations Center</div>
            <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              24/7 Security <span className="neon-text">Command Center</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "12px auto 0" }}>
              Our state-of-the-art SOC monitors thousands of endpoints, cameras, and access points simultaneously with AI-assisted threat detection.
            </p>
          </div>
          <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "200px 200px", gap: 16 }}>
            <div className="card" style={{ gridRow: "1 / 3", padding: "1.5rem", display: "flex", flexDirection: "column" }}>
              <div className="heading neon-text" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", marginBottom: 12 }}>MONITORING GRID</div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: 6 }}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} style={{ background: "rgba(0,212,255,0.04)", borderRadius: 4, border: "1px solid rgba(0,212,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <img src={`https://images.unsplash.com/photo-1557599000000?w=200&h=150&fit=crop`} alt={`Camera ${n}`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 4, opacity: 0.9 }} />
                    <span style={{ position: "absolute", top: 4, left: 6, fontSize: "0.55rem", color: "#00ff88", fontFamily: "monospace" }}>CAM-{String(n).padStart(2, "0")}</span>
                    <span style={{ position: "absolute", top: 4, right: 6, width: 6, height: 6, borderRadius: "50%", background: "#00ff88" }}></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--text-muted)" }}>INCIDENTS TODAY</div>
              <div className="stat-number" style={{ fontSize: "3rem" }}>3</div>
              <div style={{ color: "#00ff88", fontSize: "0.8rem" }}>All resolved &lt; 5 min</div>
            </div>
            <div className="card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--text-muted)" }}>GUARDS ON DUTY</div>
              <div className="stat-number" style={{ fontSize: "3rem" }}>47</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Across 12 facilities</div>
            </div>
            <div className="card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--text-muted)" }}>SYSTEM STATUS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
                {["Cameras", "Alarms", "Access Ctrl", "Network"].map((sys) => (
                  <div key={sys} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>{sys}</span>
                    <span style={{ fontSize: "0.7rem", color: "#00ff88", fontFamily: "monospace" }}>ONLINE</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="heading" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--text-muted)" }}>THREATS BLOCKED</div>
              <div className="stat-number" style={{ fontSize: "3rem" }}>1.2K</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>This month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Leadership</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
            Meet Our <span className="neon-text">Command Team</span>
          </h2>
        </div>
        <div className="stagger-children" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {TEAM.map((member, i) => (
            <div key={i} className="card" style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
              <div className="img-hover" style={{ width: 120, height: 120, borderRadius: "50%", margin: "0 auto 16px", overflow: "hidden" }}>
                <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="heading" style={{ fontSize: "1rem", marginBottom: 4 }}>{member.name}</h3>
              <div style={{ color: "var(--neon)", fontSize: "0.75rem", marginBottom: 4 }}>{member.role}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{member.exp} experience</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Bar */}
      <div className="section-alt" style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>Certified & Compliant</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {CERTIFICATIONS.map((cert) => (
              <span key={cert} className="badge" style={{ fontSize: "0.65rem" }}>{cert}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Contact</div>
          <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Request A <span className="neon-text">Security Assessment</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 12 }}>
            Our consultants will evaluate your current security posture and deliver a comprehensive report within 48 hours.
          </p>
        </div>
        <div className="card reveal" style={{ padding: "2.5rem" }}>
          <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Company</label>
              <input type="text" placeholder="Acme Corporation" />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Email</label>
              <input type="text" placeholder="john@acme.com" />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Phone</label>
              <input type="text" placeholder="(555) 123-4567" />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Facility Type</label>
              <select defaultValue="">
                <option value="" disabled>Select type</option>
                <option>Office Building</option>
                <option>Industrial / Warehouse</option>
                <option>Retail / Commercial</option>
                <option>Government / Municipal</option>
                <option>Residential Estate</option>
                <option>Healthcare</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Current Security Level</label>
              <select defaultValue="">
                <option value="" disabled>Select level</option>
                <option>None / Minimal</option>
                <option>Basic (Locks & Alarms)</option>
                <option>Moderate (Cameras & Guards)</option>
                <option>Advanced (Integrated System)</option>
              </select>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={{ display: "block", marginBottom: 6, fontSize: "0.78rem", color: "var(--text-muted)" }}>Security Concerns</label>
              <textarea rows={4} placeholder="Describe your security challenges, recent incidents, or specific areas of concern..." />
            </div>
            <div style={{ gridColumn: "1 / -1", textAlign: "center" }}>
              <button type="submit" className="btn cta-pulse">Request Free Assessment</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-glow" style={{ padding: "60px 24px 32px", background: "var(--dark-surface)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 24 }}>🛡️</span>
                <span className="heading" style={{ fontSize: "0.9rem" }}>SENTINEL SECURITY</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                Integrated security solutions combining physical protection, surveillance technology, and cybersecurity expertise.
              </p>
            </div>
            <div>
              <h4 className="heading" style={{ fontSize: "0.75rem", marginBottom: 16 }}>Solutions</h4>
              {["Physical Security", "Surveillance", "Access Control", "Cybersecurity"].map((s) => (
                <a key={s} href="#services" style={{ display: "block", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 8, textDecoration: "none" }}>{s}</a>
              ))}
            </div>
            <div>
              <h4 className="heading" style={{ fontSize: "0.75rem", marginBottom: 16 }}>Company</h4>
              {["About Us", "Careers", "Case Studies", "Partners"].map((s) => (
                <a key={s} href="#" style={{ display: "block", color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: 8, textDecoration: "none" }}>{s}</a>
              ))}
            </div>
            <div>
              <h4 className="heading" style={{ fontSize: "0.75rem", marginBottom: 16 }}>Emergency Line</h4>
              <a href="tel:+18005554321" className="neon-text" style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", textDecoration: "none" }}>(800) 555-4321</a>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 8 }}>24/7 Monitoring Center</p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>ops@sentinelsecurity.com</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--dark-border)", paddingTop: 24, textAlign: "center", color: "var(--text-muted)", fontSize: "0.75rem" }}>
            © 2026 Sentinel Security Group. All rights reserved. Licensed in all 50 states.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: '0.9'; }
        }
      `}</style>
    </div>
  );
}
