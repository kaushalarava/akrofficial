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
  link?: string;
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
        "Designed SQL schemas, dashboards, reporting systems, and business intelligence modules for fleet utilization, delivery performance, and logistics KPIs.",
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
        "Developed backend services, REST APIs, microservices, and SQL integrations supporting enterprise communication workflows.",
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
        "Developed reusable UI components and integrated REST APIs for scalable business operations.",
        "Implemented accessibility, localization, and performance optimization strategies.",
        "Worked with distributed systems, API integrations, communication technologies, and connected device ecosystems.",
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
        "Designed and developed the Roombr Video Conferencing Platform for enterprise collaboration, virtual meetings, online classrooms, and digital communication.",
        "Built scalable frontend applications using Angular, TypeScript, JavaScript, HTML5, CSS3, SCSS, and Electron.",
        "Developed backend services, REST APIs, and microservices using Node.js and Spring Boot.",
        "Engineered real-time communication features using WebRTC, SIP protocols, and WebSockets.",
        "Generated approximately INR 10 Crore revenue through enterprise software adoption and business development initiatives.",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between items-center py-4">
            <a href="#home" className="text-xl sm:text-2xl font-bold text-white">
              ARAVA KAUSHAL RAO
            </a>

            <div className="hidden md:flex space-x-8">
              <a href="/Docs/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-orange-400">
                Resume
              </a>
              <a href="#about" className="text-white/80 hover:text-orange-400">About</a>
              <a href="#experience" className="text-white/80 hover:text-orange-400">Experience</a>
              <a href="#skills" className="text-white/80 hover:text-orange-400">Skills</a>
              <a href="#featured-projects" className="text-white/80 hover:text-orange-400">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-orange-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative z-10 pt-24 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Senior Full Stack Engineer & Product Architect
            <span className="text-orange-400"> Engineer</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
          Building scalable enterprise platforms across AI, transportation technology,
          fleet telematics, and real-time communication systems.
          </p>

          <p className="text-lg text-cyan-300 mb-10">
            Angular • React • TypeScript • Node.js • Java • Python • REST APIs • Microservices • SQL • Electron • WebRTC • SIP • WebSockets
          </p>
        </div>
      </section>

      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-orange-400">
              Enterprise Software, Product Architecture & AI Solutions
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed">
              Senior Full Stack Engineer with 10+ years of experience designing,
              developing, and scaling enterprise software platforms across transportation
              technology, fleet telematics, enterprise communications, and real-time
              collaboration systems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Skilled in Angular, React, TypeScript, Node.js, Java, Python, REST APIs,
              Microservices, SQL, Electron, WebRTC, SIP, and WebSockets.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-gray-900/70 rounded-xl p-4 border border-cyan-500/30">
                <div className="text-4xl font-bold text-cyan-400">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center bg-gray-900/70 rounded-xl p-4 border border-cyan-500/30">
                <div className="text-4xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-300">Enterprise Platforms</div>
              </div>
            </div>
          </div>

          <img
            src="/Images/akr-profile.png"
            alt="Arava Kaushal Rao"
            className="rounded-2xl shadow-2xl border border-cyan-500/30"
          />
        </div>
      </section>

      <section id="experience" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((job: ExperienceItem, index: number) => (
              <div key={`${job.company}-${index}`} className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                <div className="flex items-center mb-4">
                  <div className="rounded-full mr-4" style={{ width: "70px" }}>
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="rounded-2xl shadow-2xl border border-cyan-500/30"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="text-cyan-400">
                      {job.company} — {job.date}
                    </p>
                    <p className="text-white/70">{job.location}</p>
                    <p className="text-orange-300 font-medium mt-1">
                      Product: {job.product}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-white/90 space-y-2">
                  {job.items.map((item: string, i: number) => (
                    <li key={`${job.company}-item-${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Technical Skills
          </h2>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
              <Skill title="Programming & Frameworks" text="JavaScript, TypeScript, Java, Python, Angular, React, Node.js, Spring Boot, HTML5, CSS3, SCSS, RxJS, NgRx, Redux" />
              <Skill title="AI, Data & Analytics" text="Generative AI, LLMs, OpenAI API, RAG, ChromaDB, FAISS, Embeddings, Prompt Engineering, AI Agents, Vector Search" />
              <Skill title="Backend & Database" text="REST APIs, Microservices, API Integration, SQL, MySQL, Database Design, Query Optimization" />
              <Skill title="Cloud & DevOps" text="Docker, Git, Azure DevOps, Jenkins, GitHub Actions, CI/CD" />
              <Skill title="Architecture" text="System Design, Product Architecture, Application Architecture, Microservices Architecture, Scalability Engineering" />
              <Skill title="Enterprise Platforms" text="TMS, Fleet Telematics, IoT, Device Telemetry, WebRTC, SIP, WebSockets, Electron" />
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Education
          </h2>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 space-y-6">
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
        </div>
      </section>

      <section id="featured-projects" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Project title="Tale of Treasures" subtitle="AI Storytelling Platform" description="AI-powered storytelling platform using OpenAI APIs, LLMs, RAG, ChromaDB, FAISS, embeddings, prompt engineering, and AI agents." />
            <Project title="ENSYNC" subtitle="Transportation Management System" description="TMS platform supporting dispatch management, route planning, shipment tracking, fleet operations, reporting, analytics, and logistics workflows." />
            <Project title="Anytrek Fleet Platform" subtitle="Fleet Telematics Platform" description="Fleet management and telematics platform supporting GPS tracking, device telemetry, vehicle sensors, operational dashboards, and fleet analytics." />
            <Project title="MultiLine Desktop" subtitle="Enterprise Communication Platform" description="Secure desktop communication platform for business messaging and calling using Angular, Electron, Node.js, Java, SIP, WebSockets, and SQL." />
            <Project title="Roombr" subtitle="Video Conferencing Platform" description="Enterprise collaboration and digital classroom platform using Angular, Electron, Node.js, Spring Boot, WebRTC, SIP, and WebSockets." link="https://www.roombr.com/" />
            <Project title="Foody App" subtitle="Consumer Ordering Platform" description="Food ordering and delivery platform supporting restaurants, supermarkets, kiosks, bakeries, online payments, and customer-facing mobile workflows." link="https://play.google.com/store/apps/details?id=com.ideas2life.foodymobile" />
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
  <div className="relative z-10 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-orange-500 mb-6">
      Let's Build Something Together
    </h2>

    <p className="text-center text-white/80 mb-10">
      Have a project, opportunity, or collaboration idea? Share your details and I’ll get back to you.
    </p>

    <div className="max-w-3xl mx-auto space-y-10">
      {/* Contact Form */}
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
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

          <div>
            <label className="block text-white/90 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company or organization name"
              className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project, role, or opportunity"
              className="w-full rounded-xl bg-black/40 border border-white/30 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Connect Me On */}
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
        <h3 className="text-2xl font-bold text-cyan-400 mb-6">
          Connect Me On
        </h3>

        <div className="space-y-6">
          <Contact
            label="LinkedIn"
            value="linkedin.com/in/kaushal-arava-rao-622b667b"
            link="https://linkedin.com/in/kaushal-arava-rao-622b667b"
          />

          <Contact
            label="Portfolio"
            value="www.akrofficial.com"
            link="https://www.akrofficial.com"
          />

          <Contact
            label="GitHub"
            value="github.com/kaushalarava"
            link="https://github.com/kaushalarava"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      <footer className="relative z-10 bg-black/70 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">
            &copy; 2025 AKR Official — Senior Full Stack Engineer • Product Architect • Telematics Specialist • AI Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}

function Skill({ title, text }: SkillProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2 text-indigo-300">{title}</h3>
      <p className="text-white/90">{text}</p>
    </div>
  );
}

function Education({ logo, degree, school, details }: EducationProps) {
  return (
    <div className="flex items-center">
      <div className="bg-white rounded-full mr-4" style={{ width: "70px" }}>
        <img src={logo} alt={school} className="rounded-2xl shadow-2xl" />
      </div>
      <div>
        <span className="text-cyan-400">{degree}</span>
        <p className="text-white/80">{school}</p>
        <p className="text-white/70">{details}</p>
      </div>
    </div>
  );
}

function Project({ title, subtitle, description, link }: ProjectProps) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
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
    <div className="mb-5">
      <p className="text-white/90 font-medium">{label}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 break-all">
          {value}
        </a>
      ) : (
        <p className="text-cyan-400">{value}</p>
      )}
    </div>
  );
}

export default App;