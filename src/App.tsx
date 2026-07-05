import { useState } from "react";
import "./App.css";

interface SkillProps {
  title: string;
  text: string;
}

interface EducationProps {
  logo: string;
  degree: string;
  school: string;
  details: string;
}

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

interface ContactProps {
  label: string;
  value: string;
  link: string;
}

interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  date: string;
  location: string;
  product: string;
  items: string[];
}

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const experiences: ExperienceItem[] = [
    {
      logo: "/Images/anytrek-logo.jpeg",
      title: "Telematics Implementation Specialist",
      company: "Anytrek Corporation",
      date: "Mar 2026 – Present",
      location: "Ontario, CA",
      product: "Anytrek Fleet & Telematics Platform",
      items: [
        "Support development and implementation of fleet management and telematics solutions for transportation customers.",
        "Design frontend applications, backend services, REST APIs, and database integrations for telematics data processing and fleet visibility.",
        "Configure GPS tracking systems, telematics devices, vehicle sensors, and third-party fleet management platforms.",
        "Develop dashboards, analytics, and reporting modules for fleet performance, maintenance, route efficiency, fuel usage, compliance, and operational trends.",
        "Support customer onboarding, solution consulting, product demonstrations, training, and post-implementation support.",
      ],
    },
    {
      logo: "/Images/cat-logo.png",
      title: "Product Engineer & Transportation Operations Manager",
      company: "Connect America Transportation Inc.",
      date: "Nov 2023 – Nov 2025",
      location: "Fontana, CA",
      product: "ENSYNC Transportation Management System",
      items: [
        "Architected and developed ENSYNC, a Transportation Management System supporting dispatch, route planning, shipment tracking, fleet operations, and logistics workflows.",
        "Built responsive web applications for dispatchers and operations teams to manage transportation workflows.",
        "Developed backend services and REST APIs for shipment processing, dispatch scheduling, customer management, reporting, and analytics.",
        "Managed transportation operations including dispatch coordination, load planning, driver management, shipment monitoring, customer communication, and ELD workflows.",
        "Designed SQL schemas, dashboards, reporting systems, and BI modules for fleet utilization, delivery performance, and logistics KPIs.",
      ],
    },
    {
      logo: "/Images/movius-logo.jpg",
      title: "Software Engineer III",
      company: "Movius Corporation",
      date: "Mar 2021 – Jul 2023",
      location: "Alpharetta, GA",
      product: "MultiLine Desktop — T-Mobile",
      items: [
        "Served as a Full Stack Developer and product architecture contributor for a secure enterprise communication platform.",
        "Designed scalable frontend architecture using Angular, RxJS, NgRx, and Angular Router.",
        "Developed backend services, REST APIs, microservices, and SQL integrations.",
        "Led development of Voicemail, Group Messaging, and Picture Messaging features.",
        "Integrated SIP protocols, WebSockets, and event-driven services for real-time communication.",
      ],
    },
    {
      logo: "/Images/mavenir_logo.jpeg",
      title: "Software Engineer",
      company: "Mavenir Systems",
      date: "Aug 2020 – Feb 2021",
      location: "Richardson, TX",
      product: "Customer-Facing Web & Communication Applications",
      items: [
        "Designed and developed responsive, mobile-first applications using Angular, React, TypeScript, JavaScript, HTML5, CSS3, and SCSS.",
        "Built customer-facing e-commerce workflows supporting device selection, service plans, checkout, and payment processing.",
        "Developed reusable UI components and integrated REST APIs.",
        "Implemented accessibility, localization, and performance optimization strategies.",
      ],
    },
    {
      logo: "/Images/virtulive-logo.jpg",
      title: "Software Engineer / Business Development Manager",
      company: "VirtuLive Technologies Pvt. Ltd.",
      date: "Aug 2015 – Jul 2020",
      location: "Mysore, India",
      product: "Roombr Video Conferencing Platform",
      items: [
        "Designed and developed Roombr for enterprise collaboration, virtual meetings, online classrooms, and digital communication.",
        "Built frontend applications using Angular, TypeScript, JavaScript, HTML5, CSS3, SCSS, and Electron.",
        "Developed backend services, REST APIs, and microservices using Node.js and Spring Boot.",
        "Engineered real-time communication features using WebRTC, SIP protocols, and WebSockets.",
        "Generated approximately INR 10 Crore revenue through enterprise software adoption and business development.",
      ],
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#home" onClick={closeMenu} className="text-lg sm:text-2xl font-bold">
              ARAVA KAUSHAL RAO
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>

            <div className="hidden md:flex space-x-8">
              <NavLinks closeMenu={closeMenu} />
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-5 space-y-4 text-center">
              <NavLinks closeMenu={closeMenu} />
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Senior Full Stack Engineer & Product Architect
            <span className="text-orange-400"> Engineer</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Building scalable enterprise platforms across AI, transportation technology,
            fleet telematics, and real-time communication systems.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-cyan-300 mb-10 max-w-5xl mx-auto">
            Angular • React • TypeScript • Node.js • Java • Python • REST APIs • Microservices • SQL • Electron • WebRTC • SIP • WebSockets
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#experience">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-full hover:scale-105 transition">
                View Experience
              </button>
            </a>
            <a href="#contact">
              <button className="w-full sm:w-auto border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-full hover:bg-orange-400 hover:text-white transition">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-400">
              Enterprise Software, Product Architecture & AI Solutions
            </h2>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Senior Full Stack Engineer with 10+ years of experience designing,
              developing, and scaling enterprise software platforms across transportation
              technology, fleet telematics, enterprise communications, and real-time
              collaboration systems.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Skilled in Angular, React, TypeScript, Node.js, Java, Python, REST APIs,
              Microservices, SQL, Electron, WebRTC, SIP, WebSockets, OpenAI APIs,
              LLMs, RAG, ChromaDB, FAISS, and prompt engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Stat number="10+" label="Years Experience" />
              <Stat number="5+" label="Enterprise Platforms" />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/Images/akr-profile.png"
              alt="Arava Kaushal Rao"
              className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl border border-cyan-500/30"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Professional Experience" />

        <div className="max-w-7xl mx-auto space-y-8">
          {experiences.map((job, index) => (
            <div key={`${job.company}-${index}`} className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/30">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 sm:w-[70px] sm:h-[70px] object-contain rounded-2xl border border-cyan-500/30 bg-white"
                />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{job.title}</h3>
                  <p className="text-cyan-400 text-sm sm:text-base">{job.company} — {job.date}</p>
                  <p className="text-white/70 text-sm sm:text-base">{job.location}</p>
                  <p className="text-orange-300 font-medium mt-1 text-sm sm:text-base">
                    Product: {job.product}
                  </p>
                </div>
              </div>

              <ul className="list-disc pl-5 text-white/90 space-y-2 text-sm sm:text-base">
                {job.items.map((item, i) => (
                  <li key={`${job.company}-${i}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" />

        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skill title="Programming & Frameworks" text="JavaScript, TypeScript, Java, Python, Angular, React, Node.js, Spring Boot, HTML5, CSS3, SCSS, RxJS, NgRx, Redux" />
            <Skill title="AI, Data & Analytics" text="Generative AI, LLMs, OpenAI API, RAG, ChromaDB, FAISS, Embeddings, Prompt Engineering, AI Agents, Vector Search" />
            <Skill title="Backend & Database" text="REST APIs, Microservices, API Integration, SQL, MySQL, Database Design, Query Optimization" />
            <Skill title="Cloud & DevOps" text="Docker, Git, Azure DevOps, Jenkins, GitHub Actions, CI/CD" />
            <Skill title="Architecture" text="System Design, Product Architecture, Application Architecture, Microservices Architecture, Scalability Engineering" />
            <Skill title="Enterprise Platforms" text="TMS, Fleet Telematics, IoT, Device Telemetry, WebRTC, SIP, WebSockets, Electron" />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" />

        <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/30 space-y-6">
          <Education
            logo="/Images/csusb-logo.jpg"
            degree="Master of Science in Information Systems and Technology"
            school="California State University, San Bernardino, CA"
            details="GPA: 3.70 / 4.0 | Graduated: May 2026"
          />

          <Education
            logo="/Images/sathyabam-logo.png"
            degree="Bachelor of Science in Information Technology"
            school="Sathyabama University, Chennai, India"
            details="GPA: 7.9 / 10.0 | Graduated: March 2014"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="featured-projects" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Project title="Tale of Treasures" subtitle="AI Storytelling Platform" description="AI-powered storytelling platform using OpenAI APIs, LLMs, RAG, ChromaDB, FAISS, embeddings, prompt engineering, and AI agents." />
          <Project title="ENSYNC" subtitle="Transportation Management System" description="TMS platform supporting dispatch management, route planning, shipment tracking, fleet operations, reporting, analytics, and logistics workflows." />
          <Project title="Anytrek Fleet Platform" subtitle="Fleet Telematics Platform" description="Fleet management and telematics platform supporting GPS tracking, device telemetry, vehicle sensors, operational dashboards, and fleet analytics." />
          <Project title="MultiLine Desktop" subtitle="Enterprise Communication Platform" description="Secure desktop communication platform for business messaging and calling using Angular, Electron, Node.js, Java, SIP, WebSockets, and SQL." />
          <Project title="Roombr" subtitle="Video Conferencing Platform" description="Enterprise collaboration and digital classroom platform using Angular, Electron, Node.js, Spring Boot, WebRTC, SIP, and WebSockets." link="https://www.roombr.com/" />
          <Project title="Foody App" subtitle="Consumer Ordering Platform" description="Food ordering and delivery platform supporting restaurants, supermarkets, kiosks, bakeries, online payments, and customer-facing mobile workflows." link="https://play.google.com/store/apps/details?id=com.ideas2life.foodymobile" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-6">
            Let's Build Something Together
          </h2>

          <p className="text-center text-white/80 mb-10 text-sm sm:text-base">
            Have a project, opportunity, or collaboration idea? Share your details and I’ll get back to you.
          </p>

          <div className="space-y-10">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Share Your Contact Details
              </h3>

              <form
                action="https://formsubmit.co/kaushalarava7@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Portfolio Contact Request" />
                <input type="hidden" name="_captcha" value="false" />

                <FormInput label="Full Name" name="name" type="text" placeholder="Enter your full name" required />
                <FormInput label="Email Address" name="email" type="email" placeholder="Enter your email address" required />
                <FormInput label="Phone Number" name="phone" type="tel" placeholder="Enter your phone number" />
                <FormInput label="Company / Organization" name="company" type="text" placeholder="Company or organization name" />

                <div>
                  <label className="block text-white/90 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, role, or opportunity"
                    className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-full hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                Connect With Me
              </h3>

              <div className="space-y-6">
                <Contact label="LinkedIn" value="linkedin.com/in/kaushal-arava-rao-622b667b" link="https://linkedin.com/in/kaushal-arava-rao-622b667b" />
                <Contact label="Portfolio" value="www.akrofficial.com" link="https://www.akrofficial.com" />
                <Contact label="GitHub" value="github.com/kaushalarava" link="https://github.com/kaushalarava" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-black/70 py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70 text-sm sm:text-base">
            &copy; 2025 AKR Official — Senior Full Stack Engineer • Product Architect • Telematics Specialist • AI Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLinks({ closeMenu }: { closeMenu: () => void }) {
  const links = [
    { label: "Resume", href: "/Docs/Resume.pdf", external: true },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#featured-projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          onClick={closeMenu}
          className="block text-white/80 hover:text-orange-400 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      {title}
    </h2>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center bg-gray-900/70 rounded-xl p-4 border border-cyan-500/30">
      <div className="text-4xl font-bold text-cyan-400">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}

function Skill({ title, text }: SkillProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2 text-indigo-300">{title}</h3>
      <p className="text-white/90 text-sm sm:text-base">{text}</p>
    </div>
  );
}

function Education({ logo, degree, school, details }: EducationProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <img src={logo} alt={school} className="w-16 h-16 object-contain bg-white rounded-2xl shadow-2xl" />
      <div>
        <span className="text-cyan-400 text-base sm:text-lg">{degree}</span>
        <p className="text-white/80 text-sm sm:text-base">{school}</p>
        <p className="text-white/70 text-sm sm:text-base">{details}</p>
      </div>
    </div>
  );
}

function Project({ title, subtitle, description, link }: ProjectProps) {
  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/30 hover:border-white/50 transition">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-orange-300 mb-3">{subtitle}</p>
      <p className="text-white/70 mb-3 text-sm">{description}</p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline text-sm break-all">
          View Project
        </a>
      )}
    </div>
  );
}

function Contact({ label, value, link }: ContactProps) {
  return (
    <div>
      <p className="text-white/90 font-medium">{label}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 break-all text-sm sm:text-base">
        {value}
      </a>
    </div>
  );
}

function FormInput({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-white/90 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
      />
    </div>
  );
}

export default App;