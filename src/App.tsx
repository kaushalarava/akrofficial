import "./App.css";
// import logo from '/Images/logo.png'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Majestic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

        {/* Floating AI Elements - Small AI Images */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-pulse">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="AI"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 opacity-15 animate-bounce">
          <img
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="AI"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-40 left-20 w-18 h-18 opacity-18 animate-ping">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="AI"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 opacity-22 animate-pulse">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="AI"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Food Elements - Scattered */}
        <div
          className="absolute top-60 left-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-80 right-1/3 w-6 h-6 bg-red-400 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-60 left-1/3 w-10 h-10 bg-yellow-400 rounded-full opacity-25 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 left-1/2 w-4 h-4 bg-green-400 rounded-full opacity-35 animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/4 w-7 h-7 bg-purple-400 rounded-full opacity-30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-5 h-5 bg-pink-400 rounded-full opacity-40 animate-ping"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-10 w-6 h-6 bg-indigo-400 rounded-full opacity-25 animate-bounce"
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* Corner Food Elements - Subtle Background Images */}
        <div className="absolute top-0 left-0 w-20 h-20 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-18 h-18 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-14 h-14 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Side Food Elements */}
        <div
          className="absolute left-0 top-1/3 w-8 h-8 bg-orange-500/30 rounded-full animate-pulse"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="absolute right-0 top-1/4 w-6 h-6 bg-red-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute left-0 bottom-1/4 w-7 h-7 bg-yellow-500/30 rounded-full animate-ping"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="absolute right-0 bottom-1/3 w-9 h-9 bg-green-500/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.7s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-between items-center py-4">
            <div className="flex items-center">
              {/* <img src="/Images/logo.png" alt="AKR Logo" className="h-8 w-8 mr-3" /> */}
              <div className="text-xl sm:text-2xl font-bold text-white text-center">
              <a
                href="#about"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                ARAVA KAUSHAL RAO
              </a>
                
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="/Docs/Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Resume
              </a>
              <a
                href="#home"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              {/* <a
                href="#projects"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Projects
              </a> */}
              <a
                href="#experience"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#featured-projects"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Featured Projects
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            End-to-End Application <span className="text-orange-400">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Full Stack Developer | Frontend (Angular/React) & Backend (Node.js/Spring Boot) | End-to-End Application Development
              {/* | Former JP Morgan & Rakuten Professional */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
              <a href="#experience">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Experience
                </button>
              </a>
              <a href="#contact">
                <button className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Layer */}
        <div className="absolute inset-0">
          {/* AI Robotic BG Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Section */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-4xl font-extrabold text-orange-400 tracking-wide">
                Full Stack Engineer & Scalable Web Applications Developer
                </h2>
                needs into data-driven, impactful products.
                <p className="text-lg text-gray-200 leading-relaxed">
                Full Stack Developer with with 8+ years of experience{" "}
                  <span className="text-cyan-300 font-semibold">
                  building scalable web and desktop applications using Angular,
                  </span>
                  {" "}
                  <span className="text-purple-300 font-semibold">
                  React, TypeScript, Node.js, and Electron
                  </span>
                  . I enjoy working across the stack — from designing clean,{" "}
                  <span className="text-purple-400">responsive front-end experiences to developing robust REST APIs </span> and
                  database-driven backend systems{" "}.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                Experienced in building real-time communication and enterprise platforms{" "}
                  <span className="text-cyan-400">that are secure, reliable, and performance-focused. Passionate about writing maintainable code</span> and
                  <span className="text-purple-300">
                    {" "}
                    creating products that deliver real value to users.
                  </span>
                  {/* , holding a Master’s in
                  <span className="text-orange-400">
                    {" "}
                    Management Information Systems
                  </span>
                  . Seeking opportunities to shape the future of{" "}
                  <span className="text-cyan-300">AI technology</span>. */}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-gray-900/70 backdrop-blur-md rounded-xl p-4 shadow-lg border border-cyan-500/30">
                    <div className="text-4xl font-bold text-cyan-400">8+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center bg-gray-900/70 backdrop-blur-md rounded-xl p-4 shadow-lg border border-cyan-500/30">
                    <div className="text-4xl font-bold text-cyan-400">MS</div>
                    <div className="text-gray-300">Information Systems & Technology</div>
                  </div>
                </div>
              </div>

              {/* Profile / AI Image */}
              <div className="relative">
                <img
                  src="/Images/akr-profile.png" // 👈 keep your profile photo
                  alt="Professional Profile"
                  className="rounded-2xl shadow-2xl border border-cyan-500/30 hover:scale-105 transition-transform duration-500"
                />
                {/* Glow effect */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
   

      {/* Professional Experience */}
      <section
  id="experience"
  className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
>
  {/* Section Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-gray-800/40 to-zinc-800/40"></div>
  {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div> */}
  <div className="absolute inset-0 bg-black/40"></div> {/* soft dark overlay */}

  <div className="relative z-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Professional Experience
      </h2>
            <div className="space-y-8">
              {/* Software Engineer III - Movius */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="rounded-full mr-4 " style={{ width: "70px" }}>
                    <div className="text-2xl">
                    <img
                        src="/Images/movius-logo.jpg" // Movius logo
                        alt="movius"
                        className="rounded-2xl shadow-2xl border border-cyan-500/30 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Software Engineer III</h3>
                    <p className="text-cyan-500">Movius Corporation — Mar 2021 – Jul 2023, Bangalore, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>Worked as a Full Stack Developer on MultiLine Desktop at Movius, helping build and enhance a secure enterprise platform for business calling and messaging using Angular (v10–v13), TypeScript, Electron, and Node.js/Java.</li>
                  <li>Designed and maintained scalable front-end architecture using Angular Router, RxJS, and NgRx, ensuring clean and predictable state management for real-time messaging, voicemail updates, and call workflows.</li>
                  <li>Contributed to backend development by building RESTful APIs and microservices, while managing data persistence with SQL databases.</li>
                  <li>Led development of key features such as V oicemail, Group Messaging, and Picture Messaging (MMS), integrating SIP protocols, WebSockets, and event-driven services to enable reliable, low-latency real-time communication.</li>
                  <li>Built cross-platform desktop functionality using Electron and optimized API and database performance.</li>
                </ul>
              </div>

              {/* Software Engineer - Mavenir */}

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="rounded-full mr-4 " style={{ width: "70px" }}>
                    <div className="text-2xl">
                      <img
                        src="/Images/mavenir_logo.jpeg" // Mavenir logo
                        alt="Professional Profile"
                        className="rounded-2xl shadow-2xl border border-cyan-500/30 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                    <p className="text-cyan-500">Mavenir Systems — Aug 2020 – Feb 2021, Bangalore, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>Designed and developed mobile-first, responsive web interfaces using Angular/React, TypeScript, JavaScript (ES6+), HTML5, CSS3, and SCSS, delivering consistent user experiences across mobile phones, tablets, and desktop platforms.</li>
                  <li>Built and optimized high-traffic e-commerce workflows (device catalog, plan selection, checkout, and payments) by integrating RESTful APIs, focusing on performance, scalability, and reliability.</li>
                  <li>Implemented localization (i18n) and accessibility standards (WCAG) while applying responsive design principles and web performance optimization techniques such as lazy loading and component optimization.</li>
                </ul>
              </div>

              {/* Business Development Manager - Virtulive */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="rounded-full mr-4 " style={{ width: "70px" }}>
                    <div className="">
                    <img
                        src="/Images/virtulive-logo.jpg" // Movius logo
                        alt="Virtulive"
                        className="rounded-2xl shadow-2xl border border-cyan-500/30 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Software Engineer | Business Development Manager</h3>
                    <p className="text-cyan-500">Virtulive Technologies Pvt Ltd — Aug 2015 – Apr 2019, Banglore, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>Full-Stack Developer for Roombr video conferencing platform, building web (Angular 5) and Electron-based desktop applications enabling online meetings, virtual classrooms, and real-time collaboration.</li>
                  <li>Designed and implemented UI/UX front-end components, ensuring responsive, cross-platform interfaces for desktop, tablet, and mobile devices.</li>
                  <li>Developed and maintained real-time communication features using WebRTC, SIP protocols, and REST APIs, optimizing application performance, scalability, and reliability.</li>
                  <li>Served as Business Development  Manager, generating 10 CR INR (~1.2M USD) revenue, managing nationwide adoption of the platform, and engaging with enterprise clients and government stakeholders.</li>
                </ul>
              </div>

               {/* Graduate Research Assistant - CSUSB */}
               <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="rounded-full mr-4 " style={{ width: "70px" }}>
                    <div className="text-2xl">
                    <img
                        src="/Images/csusb-logo.jpg" // Movius logo
                        alt="CSUSB"
                        className="rounded-2xl shadow-2xl border border-cyan-500/30 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Graduate Research Assistant</h3>
                    <p className="text-cyan-500">California State University, San Bernardino, CA — June 2024 – May 2025</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>AI & Machine Learning Integration: Assisted in developing machine learning models to analyze user data (such as financial behavior and preferences) to create personalized, dynamic financial advice.</li>
                  <li>Data Collection & Analysis: Participated in the collection and analysis of user data, including financial goals, behaviors, and feedback, to continually improve the AI tool's accuracy and relevance.</li>
                  <li>Storytelling Framework Development: Contributed to the design and integration of narrative-driven elements to enhance user engagement and make complex financial concepts more accessible and relatable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills */}
      <section
        id="education"
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40"></div>
        <div className="absolute inset-0 bg-[url('/Images/skill-image.png')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Technical & Professional Skills
            </h2>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">

                {/* Frontend */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">Frontend</h3>
                  <p className="text-white/90">
                  Angular (v10–v13), React, TypeScript, JavaScript (ES6+), RxJS, NgRx/Redux, Angular Router
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">UI / Styling</h3>
                  <p className="text-white/90">
                  HTML5, CSS3, SCSS, Flexbox, Grid, Media Queries, Responsive Design
                  </p>
                </div>

                {/* Desktop & Backend */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">Desktop & Backend</h3>
                  <p className="text-white/90">
                  Node.js, Java (Spring Boot), Python, REST APIs
                  </p>
                </div>

                {/* Real-Time Communication */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">Real-Time Communication</h3>
                  <p className="text-white/90">
                    WebRTC, SIP Protocols, Microsoft Teams & Contacts APIs, WebSockets
                  </p>
                </div>

                {/* Data & Analytics */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">Databases</h3>
                  <p className="text-white/90">
                  SQL, MySQL, PostgreSQL
                  </p>
                </div>

                {/* AI */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">DevOps / CI-CD</h3>
                  <p className="text-white/90">
                  Docker, CI/CD (Azure DevOps, Jenkins, GitHub Actions
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-indigo-300">Tools & Methodologies</h3>
                  <p className="text-white/90">
                    Git, Agile / Scrum
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education */}
      <section
        id="education"
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Education
            </h2>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <div className="rounded-full mr-4 " style={{ width: "70px" }}>
                    <div className="text-2xl">
                    <img
                        src="/Images/csusb-logo.jpg" // CSUSB logo
                        alt="CSUSB"
                        className="rounded-2xl shadow-2xl border border-cyan-500/30 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="text-cyan-400">Master of Science (M.S.) in Information Systems and Technology</span>
                    <p className="text-white/80">California State University, San Bernardino, CA | GPA: 3.66</p>
                  </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full mr-4 " style={{ width: "70px" }}>
                      <div className="text-2xl">
                      <img
                        src="/Images/sathyabam-logo.png" // Sathyabama logo
                        alt="Sathyabama"
                        className="bg-white rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                      />
                      </div>
                    </div>
                    <div>
                      <span className="text-cyan-400">Bachelor of Science (B.S.) in Information Technology</span>
                      <p className="text-white/80">Sathyabama University, Chennai, India | GPA: 7.9/10</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="featured-projects"
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project Cards */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">NIE Digital Repository</h3>
                <p className="text-white/70 mb-2 text-sm">Digital repository system for educational resources and research materials.</p>
                <a
                  href="https://repository.nie.edu.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline break-all text-sm"
                >
                  https://repository.nie.edu.sg/
                </a>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Foody App</h3>
                <p className="text-white/70 mb-2 text-sm">The easiest way to order from 2100+ stores across all cities of Cyprus for delivery or takeaway. Order souvlaki, burgers, crepes, gyros, pizza, coffee and much more, plus find supermarkets, kiosks, wineries, butcheries, bakeries and baby products with exclusive offers and online payment options.</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ideas2life.foodymobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline break-all text-sm"
                >
                  View on Play Store
                </a>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Roombr Digital Classroom</h3>
                <p className="text-white/70 mb-2 text-sm">India's most advanced digital classroom technology featuring the world's first patented solution that seamlessly integrates cutting-edge hardware and software for immersive learning. Perfect for schools, colleges, and tutors with AI-powered features, real-time collaboration, and recorded sessions.</p>
                <a
                  href="https://www.roombr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline break-all text-sm"
                >
                  https://www.roombr.com/
                </a>
              </div>

              {/* <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Roombr Video Conference</h3>
                <p className="text-white/70 mb-2 text-sm">Web-based video conferencing application for online meetings, presentations, and virtual classes.</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Roombr Desktop Application</h3>
                <p className="text-white/70 mb-2 text-sm">Cross-platform desktop application for video conferencing and virtual meetings, available on Windows, macOS, and Linux.</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Smart Class Solution</h3>
                <p className="text-white/70 mb-2 text-sm">Comprehensive digital classroom solution deployed for major clients including District Collector (W Sikkim), Government Medical College (Telangana), and District Collector Bellary.</p>
                <p className="text-white/90 text-sm mt-2">• District collector (W Sikkim)</p>
                <p className="text-white/90 text-sm">• Govt Medical College (Telangana)</p>
                <p className="text-white/90 text-sm">• District collector Bellary</p>
              </div> */}
{/* 
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Movius Web</h3>
                <p className="text-white/70 mb-2 text-sm">Web-based communication platform for enterprise messaging and collaboration solutions.</p>
                <a
                  href="https://uatzeta.moviuscorp.net/movius-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline break-all text-sm"
                >
                  https://uatzeta.moviuscorp.net/movius-web
                </a>
              </div> */}

              {/* <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Multiline App</h3>
                <p className="text-white/70 mb-2 text-sm">Electron-based desktop application for managing multiple phone lines and SIP connections, including MLDT_POC, SLAB Multiline Application, and Multiline Application variants.</p>
                <p className="text-white/90 text-sm mt-2">• MLDT_POC</p>
                <p className="text-white/90 text-sm">• SLAB Multiline Application</p>
                <p className="text-white/90 text-sm">• Multiline Application</p>
              </div> */}
{/* 
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Teams App</h3>
                <p className="text-white/70 mb-2 text-sm">Microsoft Teams integration application for enhanced collaboration and communication within enterprise environments.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-zinc-900/20"></div>
        <div className="absolute inset-0 bg-[url('/Images/coding-image.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

        {/* Food Elements - Keep in Contact Section */}
        <div className="absolute top-0 left-0 w-4 h-4 opacity-1">
          <img
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 opacity-1">
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-1/2 left-0 w-5 h-5 opacity-1">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-1/3 right-0 w-4 h-4 opacity-1">
          <img
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            alt="Food"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-orange-500 mb-6">
            Let's Build something together
            </h2>
            {/* <p className="text-lg text-white/90 mb-8 text-center">
              Ready to collaborate on AI technology projects or discuss
              innovative software solutions? I'm actively seeking opportunities
              to contribute to cutting-edge technology initiatives.
            </p> */}

            <div className="max-w-3xl mx-auto grid grid-cols-1 gap-12">
              {/* Contact Info - personal details only */}
              <div className="space-y-8">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-orange-500 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">Email</p>
                        <p className="text-cyan-500">kaushalarava7@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-orange-500 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">Phone</p>
                        <p className="text-cyan-500">+1 (909) 352 8378</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-orange-500 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">LinkedIn</p>
                        <a
                          href="https://linkedin.com/in/kaushal-arava-rao-28663028b"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-500"
                        >
                          https://www.linkedin.com/in/aravakaushal
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-orange-500 p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">GitHub</p>
                        <a
                          href="https://github.com/kaushalarava"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-500"
                        >
                          https://github.com/kaushalarava
                        </a>
                      </div>
                    </div>
                  </div>

                
                </div>

                {/* <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Available For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                      AI Projects
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                      Frontend Developer
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                      Backend Developer
                    </span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                      Full-time
                    </span>
                  </div>

                
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">
            &copy; 2025 AKR Official - Software Developer | AI Technology | UI/UX Expert | Business Analytics Professional. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
