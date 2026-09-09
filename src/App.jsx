import { useState } from "react";
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">

  <div className="logo">
    Tech<span>Trios</span>
  </div>

  <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#process" onClick={() => setMenuOpen(false)}>
      Process
    </a>

    <a href="#portfolio" onClick={() => setMenuOpen(false)}>
      Portfolio
    </a>

    <a href="#faq" onClick={() => setMenuOpen(false)}>
      FAQ
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
  </div>

  <a href="#quote" className="nav-btn">
    Get a Quote
  </a>

  <button
    className={`menu-btn ${menuOpen ? "active" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

</nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            🚀 We Build Digital Solutions
          </div>

          <h1>
            Transform Your
            <span> Idea </span>
            Into Reality
          </h1>

          <p>
            We build powerful Android apps, websites and custom
            software solutions that help businesses grow faster.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start Your Project →
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>50+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>30+</strong>
              <span>Happy Clients</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Commitment</span>
            </div>
          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="glow"></div>

          <div className="app-card">

            <div className="card-top">
              <div className="dot"></div>
              <span>TechTrios App</span>
              <div className="menu">•••</div>
            </div>

            <div className="phone-content">

              <div className="mini-icon">⚡</div>

              <h3>Your Idea</h3>

              <p>
                We turn your ideas into
                powerful digital products.
              </p>

              <div className="progress">
                <div></div>
              </div>

              <div className="features">
                <span>✓ Modern UI</span>
                <span>✓ Fast Performance</span>
                <span>✓ Scalable</span>
              </div>

            </div>

          </div>

          <div className="floating-card card-one">
            📱 Android Apps
          </div>

          <div className="floating-card card-two">
            💻 Web Solutions
          </div>

          <div className="floating-card card-three">
            ⚙️ Custom Software
          </div>

        </div>

      </section>

     {/* SERVICES */}
<section className="services" id="services">

  <div className="section-heading">
    <span>WHAT WE DO</span>

    <h2>
      Digital Solutions Built
      <strong> For Your Business</strong>
    </h2>

    <p>
      From simple business apps to complete digital platforms,
      we build technology around the way your business works.
    </p>
  </div>

  <div className="service-grid">

    <div className="service-card">
      <div className="service-number">01</div>
      <div className="service-icon">📱</div>
      <h3>Android App Development</h3>
      <p>
        Custom Android apps with modern UI, smooth performance,
        secure architecture and scalable technology.
      </p>
      <a href="#contact">Build Your App <span>→</span></a>
    </div>

    <div className="service-card">
      <div className="service-number">02</div>
      <div className="service-icon">🌐</div>
      <h3>Website Development</h3>
      <p>
        Fast, responsive and professional websites designed
        to represent your brand and generate business.
      </p>
      <a href="#contact">Build Your Website <span>→</span></a>
    </div>

    <div className="service-card">
      <div className="service-number">03</div>
      <div className="service-icon">⚙️</div>
      <h3>Custom Software</h3>
      <p>
        Powerful software solutions created around your
        specific workflow, operations and business requirements.
      </p>
      <a href="#contact">Discuss Your Idea <span>→</span></a>
    </div>

    <div className="service-card">
      <div className="service-number">04</div>
      <div className="service-icon">🛒</div>
      <h3>E-Commerce Solutions</h3>
      <p>
        Complete online stores with products, orders,
        payments, customers and business management.
      </p>
      <a href="#contact">Start Selling <span>→</span></a>
    </div>

    <div className="service-card">
      <div className="service-number">05</div>
      <div className="service-icon">📊</div>
      <h3>Business Management</h3>
      <p>
        Billing, inventory, employee management and custom
        tools that simplify your everyday business operations.
      </p>
      <a href="#contact">Improve Your Business <span>→</span></a>
    </div>

    <div className="service-card">
      <div className="service-number">06</div>
      <div className="service-icon">🔗</div>
      <h3>ERP & Integrations</h3>
      <p>
        Connect your business applications with ERP systems,
        APIs and third-party platforms for seamless operations.
      </p>
      <a href="#contact">Connect Your Systems <span>→</span></a>
    </div>

  </div>

</section>

{/* HOW WE WORK */}
<section className="process" id="process">

  <div className="section-heading">
    <span>OUR PROCESS</span>

    <h2>
      From Idea To
      <strong> Launch</strong>
    </h2>

    <p>
      A simple and transparent process to turn your idea
      into a powerful digital product.
    </p>
  </div>

  <div className="process-grid">

    <div className="process-card">
      <div className="process-top">
        <span>01</span>
        <div className="process-icon">💡</div>
      </div>

      <h3>Idea & Requirements</h3>

      <p>
        We understand your idea, business goals and required
        features before starting development.
      </p>
    </div>

    <div className="process-card">
      <div className="process-top">
        <span>02</span>
        <div className="process-icon">🎨</div>
      </div>

      <h3>UI/UX Design</h3>

      <p>
        We create a clean, modern and user-friendly design
        that gives your product a premium experience.
      </p>
    </div>

    <div className="process-card">
      <div className="process-top">
        <span>03</span>
        <div className="process-icon">⚙️</div>
      </div>

      <h3>Development</h3>

      <p>
        Our developers turn the approved design into a fast,
        secure and scalable digital product.
      </p>
    </div>

    <div className="process-card">
      <div className="process-top">
        <span>04</span>
        <div className="process-icon">🧪</div>
      </div>

      <h3>Testing</h3>

      <p>
        We test functionality, performance and usability
        to make sure everything works smoothly.
      </p>
    </div>

    <div className="process-card">
      <div className="process-top">
        <span>05</span>
        <div className="process-icon">🚀</div>
      </div>

      <h3>Launch</h3>

      <p>
        Once everything is ready, we help you launch your
        application or website and take it live.
      </p>
    </div>

  </div>

</section>
{/* ================= PORTFOLIO ================= */}
<section className="portfolio" id="portfolio">
  <div className="section-heading">
    <span>OUR WORK</span>
    <h2>Built For <strong>Real Businesses</strong></h2>
    <p>
      A glimpse of the digital solutions we have developed for real-world
      business requirements.
    </p>
  </div>

  <div className="portfolio-grid">

    {/* MD AGRO PROJECT */}
    <div className="portfolio-card">

      <div className="portfolio-visual">
        <div className="project-glow"></div>

        <div className="phone-mockup">
          <div className="phone-camera"></div>

          <div className="phone-screen">
            <div className="app-top">
              <span>MD Agro</span>
              <span>•••</span>
            </div>

            <div className="app-welcome">
              <small>FIELD FORCE</small>
              <h3>Management</h3>
              <p>Smart. Connected. Efficient.</p>
            </div>

            <div className="app-stat-grid">
              <div>
                <strong>24</strong>
                <span>Employees</span>
              </div>

              <div>
                <strong>86</strong>
                <span>Visits</span>
              </div>

              <div>
                <strong>18</strong>
                <span>Stores</span>
              </div>

              <div>
                <strong>94%</strong>
                <span>Attendance</span>
              </div>
            </div>

            <div className="location-box">
              <div className="location-icon">⌖</div>
              <div>
                <strong>Live Location</strong>
                <span>Field team tracking</span>
              </div>
              <div className="live-dot"></div>
            </div>
          </div>
        </div>

        <div className="floating-project-card card-one">
          📍 <span>Live Tracking</span>
        </div>

        <div className="floating-project-card card-two">
          📊 <span>Reports</span>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="project-tag">CLIENT PROJECT</div>

        <h3>MD Agro</h3>

        <h4>Field Force Management App</h4>

        <p>
          A custom mobile application developed to simplify field operations,
          employee management, attendance, store visits and location tracking
          through one connected platform.
        </p>

        <div className="project-features">
          <span>GPS Tracking</span>
          <span>Attendance</span>
          <span>Store Visits</span>
          <span>Reports</span>
        </div>
{/* 
        <div className="project-tech">
          <span>Flutter</span>
          <span>Supabase</span>
          <span>GPS</span>
          <span>Maps</span>
        </div> */}

        <a href="#contact" className="project-link">
          Build Your App <span>↗</span>
        </a>
      </div>

    </div>

  </div>
</section>
<section className="faq" id="faq">
  <div className="section-heading">
    <span>FAQ</span>
    <h2>
      Questions? We've Got <strong>Answers.</strong>
    </h2>
    <p>
      Here are some common questions clients ask before starting a project
      with TechTrios.
    </p>
  </div>

  <div className="faq-grid">

    <details className="faq-item">
      <summary>How much does it cost to build an app?</summary>
      <p>
        Every project is different. The cost depends on features, design,
        integrations, user roles and overall complexity. Share your
        requirements through Get a Quote and we'll prepare a custom estimate.
      </p>
    </details>

    <details className="faq-item">
      <summary>How long does app development take?</summary>
      <p>
        The timeline depends on the scope and complexity of the project.
        After understanding your requirements, we'll provide a realistic
        development timeline.
      </p>
    </details>

    <details className="faq-item">
      <summary>Can you build both Android apps and websites?</summary>
      <p>
        Yes. We build Android apps, business websites, custom software,
        e-commerce solutions and integrated business systems.
      </p>
    </details>

    <details className="faq-item">
      <summary>Can you integrate APIs, maps and payment gateways?</summary>
      <p>
        Yes. We can integrate third-party APIs, maps, payment gateways,
        databases and other business tools according to your requirements.
      </p>
    </details>

    <details className="faq-item">
      <summary>Do you provide post-launch support?</summary>
      <p>
        Yes. We can provide maintenance, bug fixes, updates and new feature
        development after the project is launched.
      </p>
    </details>

    <details className="faq-item">
      <summary>Can you publish the app on Google Play Store?</summary>
      <p>
        Yes. We can assist with production builds, Play Store setup and the
        app publishing process.
      </p>
    </details>

  </div>
</section>

<section className="quote" id="quote">
  <div className="section-heading">
    <span>LET'S WORK TOGETHER</span>
    <h2>Tell Us About Your <strong>Project</strong></h2>
    <p>
      Have an app idea? Tell us what you need and we'll help turn it
      into a real digital product.
    </p>
  </div>

  <div className="quote-container">

    <div className="quote-info">
      <h3>Let's Build Your Idea 🚀</h3>

      <p>
        Whether you need a business app, e-commerce platform,
        employee management system or a completely custom solution,
        we're ready to help.
      </p>

      <div className="quote-points">
        <div>✓ Free Initial Consultation</div>
        <div>✓ Custom UI/UX Design</div>
        <div>✓ Scalable Technology</div>
        <div>✓ Post-Launch Support</div>
      </div>

      <div className="quote-contact">
        <span>📧</span>
        <div>
          <small>Email us</small>
          <strong>hello@techtrios.in</strong>
        </div>
      </div>
    </div>


    <form
      className="quote-form"
      onSubmit={(e) => {
        e.preventDefault();

        const data = new FormData(e.target);

        const name = data.get("name");
        const mobile = data.get("mobile");
        const email = data.get("email");
        const budget = data.get("budget");
        const idea = data.get("idea");

        const subject = encodeURIComponent(
          `New Project Enquiry - ${name}`
        );

        const body = encodeURIComponent(
`Hello TechTrios,

I would like to discuss a new project.

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Budget: ${budget}

Project Requirement:
${idea}

Thank you.`
        );

        window.location.href =
          `mailto:hello@techtrios.in?subject=${subject}&body=${body}`;
      }}
    >

      <div className="form-row">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            required
          />
        </div>
      </div>


      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>


     


      <div className="form-group">
        <label>Tell Us About Your Project</label>

        <textarea
          name="idea"
          rows="5"
          placeholder="Describe your app idea, required features, business requirements..."
          required
        ></textarea>
      </div>


      <button type="submit" className="quote-submit">
        Send Project Details →
      </button>

      <p className="form-note">
        🔒 Your information will only be used to discuss your project.
      </p>

    </form>

  </div>
</section>




      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-content">

          <span className="small-title">
            WHY TECHTRIOS
          </span>

          <h2>
            Technology That
            <span> Moves Your Business Forward.</span>
          </h2>

          <p>
            We don't just build software. We understand your
            business idea, identify the right technology and
            turn it into a practical digital product.
          </p>

          <div className="about-points">

            <div>
              <b>✓</b>
              <span>Modern & User-Friendly Design</span>
            </div>

            <div>
              <b>✓</b>
              <span>Scalable & Secure Technology</span>
            </div>

            <div>
              <b>✓</b>
              <span>Transparent Development Process</span>
            </div>

            <div>
              <b>✓</b>
              <span>Long-Term Technical Support</span>
            </div>

          </div>

        </div>

        <div className="about-box">

          <div className="about-number">
            <strong>01</strong>
            <span>IDEA</span>
          </div>

          <div className="line"></div>

          <div className="about-number">
            <strong>02</strong>
            <span>DESIGN</span>
          </div>

          <div className="line"></div>

          <div className="about-number">
            <strong>03</strong>
            <span>DEVELOP</span>
          </div>

          <div className="line"></div>

          <div className="about-number">
            <strong>04</strong>
            <span>LAUNCH</span>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta" id="contact">

        <div>
          <span>HAVE AN IDEA?</span>

          <h2>
            Let's Build Something
            <strong> Amazing Together.</strong>
          </h2>

          <p>
            Tell us about your idea and we'll help you turn
            it into a real digital product.
          </p>
        </div>

        <a href="mailto:hello@techtrios.in">
          Start a Conversation →
        </a>

      </section>
      <section className="contact" id="contact">
  <div className="contact-container">

    <div className="contact-content">
      <span className="contact-label">GET IN TOUCH</span>

      <h2>
        Let's Talk About
        <strong> Your Idea.</strong>
      </h2>

      <p>
        Have an app idea, business requirement or a custom software project?
        Let's discuss it and find the right solution for you.
      </p>

      <div className="contact-details">

        <div className="contact-item">
          <div className="contact-icon">✉</div>
          <div>
            <small>Email</small>
            <a href="mailto:hello@techtrios.in">
              hello@techtrios.in
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">💬</div>
          <div>
            <small>Project Enquiry</small>
            <strong>Tell us about your project</strong>
          </div>
        </div>

      </div>

      <a href="#quote" className="contact-btn">
        Start Your Project →
      </a>
    </div>

    <div className="contact-card">

      <div className="contact-card-glow"></div>

      <span>TECHTRIOS</span>

      <h3>
        From Idea
        <br />
        <strong>To Reality.</strong>
      </h3>

      <p>
        Android Apps • Websites • Custom Software • Business Solutions
      </p>

      <div className="contact-line"></div>

      <div className="contact-mini">
        <span>🚀</span>
        <div>
          <strong>Ready to build?</strong>
          <small>Let's create something amazing.</small>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <div className="logo">
        Tech<span>Trios</span>
      </div>

      <p>
        We build modern Android apps, websites and custom digital
        solutions that help businesses grow.
      </p>

      <a href="mailto:hello@techtrios.in">
        hello@techtrios.in
      </a>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#process">Process</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-links">
      <h4>Services</h4>
      <a href="#services">Android Apps</a>
      <a href="#services">Web Development</a>
      <a href="#services">Custom Software</a>
      <a href="#services">E-Commerce</a>
      <a href="#services">ERP & Integrations</a>
    </div>

    <div className="footer-cta">
      <h4>Have an idea?</h4>
      <p>Let's turn it into something real.</p>

      <a href="#quote" className="footer-btn">
        Get a Quote →
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <span>© 2026 TechTrios. All rights reserved.</span>
    <span>Built with ❤️ by TechTrios</span>
  </div>
</footer>

    </div>
  )
}

export default App