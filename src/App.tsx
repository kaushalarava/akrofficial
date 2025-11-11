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
                ARAVA KAUSHAL RAO
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white/80 hover:text-orange-400 transition-colors"
              >
                Projects
              </a>
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
              AI-Driven <span className="text-orange-400">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
              Senior Software Developer | AI Technology Contributor | UI/UX
              Expert 
              {/* | Former JP Morgan & Rakuten Professional */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
              <a href="#projects">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Projects
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
                <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-wide">
                  AI-Driven Professional
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  A forward-thinking innovator with expertise in{" "}
                  <span className="text-cyan-300 font-semibold">
                    UI/UX design
                  </span>
                  and{" "}
                  <span className="text-purple-300 font-semibold">
                    front-end engineering
                  </span>
                  . Successfully delivered scalable solutions including
                  AI-powered modules for{" "}
                  <span className="text-cyan-400">JP Morgan</span> and
                  enterprise applications for{" "}
                  <span className="text-purple-400">Rakuten</span>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Bridging{" "}
                  <span className="text-cyan-400">business strategy</span> with
                  <span className="text-purple-300">
                    {" "}
                    cutting-edge technology
                  </span>
                  , holding a Master’s in
                  <span className="text-orange-400">
                    {" "}
                    Management Information Systems
                  </span>
                  . Seeking opportunities to shape the future of{" "}
                  <span className="text-cyan-300">AI technology</span>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-gray-900/70 backdrop-blur-md rounded-xl p-4 shadow-lg border border-cyan-500/30">
                    <div className="text-4xl font-bold text-cyan-400">8+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center bg-gray-900/70 backdrop-blur-md rounded-xl p-4 shadow-lg border border-cyan-500/30">
                    <div className="text-4xl font-bold text-cyan-400">MS</div>
                    <div className="text-gray-300">Management Info Systems</div>
                  </div>
                </div>
              </div>

              {/* Profile / AI Image */}
              <div className="relative">
                <img
                  src="/Images/kaushal_ph.jpeg" // 👈 keep your profile photo
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

      {/* Software Development Projects */}
      <section
        id="projects"
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-teal-900/40 to-emerald-900/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-black/60"></div>{" "}
        {/* darker overlay for contrast */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              AI & Technology Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & ML Integration */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI & ML Integration</h3>
                <p className="text-white/90 mb-2">Built ML models to analyze user behavior and preferences for personalized, dynamic financial advice.</p>
                <p className="text-white/70">Focus: data collection, feedback loops, and narrative-driven UX to improve model relevance.</p>
              </div>

              {/* Front-end Engineering & UI/UX */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-white mb-3">Front-end Engineering & UI/UX</h3>
                <p className="text-white/90 mb-2">UI/UX front-end developer with end‑to‑end design architecture expertise; delivered responsive, scalable interfaces.</p>
                <p className="text-white/70">Stack: Angular (v10→v13 migration), React, TypeScript; strong componentization and accessibility.</p>
              </div>

              {/* Enterprise Messaging & Multiline */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Messaging & Multiline</h3>
                <p className="text-white/90 mb-2">Led major modules: Voicemail, Group Messaging, Picture Messaging; built Microsoft Contacts Sync and Teams integrations.</p>
                <p className="text-white/70">Implemented SIP concepts for connecting multiple valid numbers in Multiline desktop and Teams apps.</p>
              </div>

              {/* Product Development & Electron */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Product Development & Electron</h3>
                <p className="text-white/90 mb-2">Developed Electron desktop apps for video conferencing solutions (Roombr, Roombr) across three platforms.</p>
                <p className="text-white/70">Contributed to Angular web applications enabling online meetings, presentations, and virtual classes.</p>
              </div>

              {/* Business Development Leadership */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-white mb-3">Business Development Leadership</h3>
                <p className="text-white/90 mb-2">Delivered ~10 CR INR (~$1.2M) in one year; led nationwide initiatives across 18 states.</p>
                <p className="text-white/70">Built partnerships with distributors and government stakeholders; managed teams across West and South zones.</p>
              </div>

              {/* Education & Research */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-white mb-3">Education & Research</h3>
                <p className="text-white/90 mb-2">MS in Information Systems & Technology (GPA 3.66); BSc in Information Technology (GPA 7.9/10).</p>
                <p className="text-white/70">Graduate Research Assistant at CSUSB: data-driven AI, storytelling frameworks, and continuous improvement.</p>
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
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
  <div className="absolute inset-0 bg-black/40"></div> {/* soft dark overlay */}

  <div className="relative z-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Professional Experience
      </h2>
            <div className="space-y-8">
              {/* Independent Practitioner Projects */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">🚀</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Independent Practitioner Projects</h3>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>Worked closely with the team to integrate various data sources (e.g., GPS, traffic APIs, and warehouse management systems) into the Transportation Management Systems software, ensuring seamless data flow and real-time updates for users.</li>
                  <li>Contributed to testing the software's functionality through a variety of use cases, ensuring that all system features met performance, security, and usability standards. Identified bugs and worked with developers to troubleshoot and resolve issues.</li>
                  <li>Developed a web-based application, Friend Mapper, designed to help users visualize and map their social connections and interactions. The application allows users to create profiles, connect with friends, and display relationships in an interactive, user-friendly interface.</li>
                </ul>
              </div>

              {/* Graduate Research Assistant - CSUSB */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">🎓</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Graduate Research Assistant</h3>
                    <p className="text-white/80">California State University, San Bernardino, CA — Aug 2024 – Fall 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>AI & Machine Learning Integration: Assisted in developing machine learning models to analyze user data (such as financial behavior and preferences) to create personalized, dynamic financial advice.</li>
                  <li>Data Collection & Analysis: Participated in the collection and analysis of user data, including financial goals, behaviors, and feedback, to continually improve the AI tool's accuracy and relevance.</li>
                  <li>Storytelling Framework Development: Contributed to the design and integration of narrative-driven elements to enhance user engagement and make complex financial concepts more accessible and relatable.</li>
                </ul>
              </div>

              {/* Software Engineer III - Movius */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">💬</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Software Engineer III</h3>
                    <p className="text-white/80">Movius Corporation — Mar 2021 – Jul 2023, Bangalore, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>UI/UX front-end developer with expertise in design architecture for entire projects.</li>
                  <li>Led major modules like Voicemail Messaging, Group Messaging, and Picture Messaging.</li>
                  <li>Successfully migrated Angular from version 10 to 13.</li>
                  <li>Specialized in creating responsive UI for applications.</li>
                  <li>Experience includes Microsoft contacts Sync and Teams integrated application development.</li>
                  <li>Contributed as a UI/UX front-end developer for JP Morgan's Multiline Desktop application, implementing SIP concept for connecting multiple valid numbers using AI developed modules.</li>
                </ul>
              </div>

              {/* Software Engineer - Mavenir */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">🏢</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                    <p className="text-white/80">Mavenir Systems — Aug 2020 – Feb 2021, Bangalore, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>UI/UX Designer for Rakuten, managing front-end development of commercial applications for a Japanese company.</li>
                  <li>Proficient in client interaction, conducting demos, presentations, and effectively understanding client requirements.</li>
                </ul>
              </div>

              {/* Business Development Manager - Virtulive */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">📈</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Business Development Manager</h3>
                    <p className="text-white/80">Virtulive Technologies Pvt Ltd — May 2019 – Jul 2020</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>Revenue generator, achieving 10 CR INR of 1.2 million USD in one year.</li>
                  <li>Expert in impactful presentations, order closures, specializing in the education sector.</li>
                  <li>Nationwide Business Development Manager, covered 18 states, fostering relationships with key profiles and government sectors.</li>
                  <li>Well-connected with distributors and partners, adept at customer engagement for successful order closures.</li>
                  <li>Managed a team spanning West and South zones, covering 9 states, with strong technical knowledge and effective sales approach.</li>
                </ul>
              </div>

              {/* Product Development / Software Engineer Intern - Virtulive */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">🛠️</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Product Development, Software Engineer (Intern)</h3>
                    <p className="text-white/80">Virtulive Technologies Pvt Ltd — Aug 2015 – Apr 2019, Mysore, India</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-white/90 space-y-2 mb-2">
                  <li>Product Development Engineer specializing in components experimentation for research and development, including mics, speakers, and touch sensor projections.</li>
                  <li>Developed Desktop application using Electron Framework for Roombr and Roombr video conference solution.</li>
                  <li>Contributed to the development and bug fixing of Roombr and Roombr web applications using Angular 5, enabling online meetings, presentations, virtual classes, and more.</li>
                  <li>Experience includes UI/UX design roles, enhancing user experience across applications.</li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <div className="text-2xl">🎓</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                    <p className="text-white/80">MS in Information Systems & Technology, CSUSB (GPA: 3.66)</p>
                    <p className="text-white/80">BSc in Information Technology, Sathyabama University (GPA: 7.9/10)</p>
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

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
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
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Mavenir Portal</h3>
                <p className="text-white/70 mb-2 text-sm">Enterprise portal solution for managing and monitoring network operations and services.</p>
                {/* <a
                  href="https://staging.mde.mavenir.com/portal/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200 underline break-all text-sm"
                >
                  https://staging.mde.mavenir.com/portal/#/
                </a> */}
              </div>

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
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Multiline App</h3>
                <p className="text-white/70 mb-2 text-sm">Electron-based desktop application for managing multiple phone lines and SIP connections, including MLDT_POC, SLAB Multiline Application, and Multiline Application variants.</p>
                <p className="text-white/90 text-sm mt-2">• MLDT_POC</p>
                <p className="text-white/90 text-sm">• SLAB Multiline Application</p>
                <p className="text-white/90 text-sm">• Multiline Application</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Teams App</h3>
                <p className="text-white/70 mb-2 text-sm">Microsoft Teams integration application for enhanced collaboration and communication within enterprise environments.</p>
              </div>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
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
            <h2 className="text-4xl font-bold text-center text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-white/90 mb-8 text-center">
              Ready to collaborate on AI technology projects or discuss
              innovative software solutions? I'm actively seeking opportunities
              to contribute to cutting-edge technology initiatives.
            </p>

            <div className="max-w-3xl mx-auto grid grid-cols-1 gap-12">
              {/* Contact Info - personal details only */}
              <div className="space-y-8">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6">
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
                        <p className="text-white/70">kaushalarava7@gmail.com</p>
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
                        <p className="text-white/70">+1 (909) 352 8378</p>
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
                          className="text-white/70"
                        >
                          https://linkedin.com/in/kaushal-arava-rao-28663028b
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
                          className="text-white/70"
                        >
                          https://github.com/kaushalarava
                        </a>
                      </div>
                    </div>
                  </div>

                
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-300">
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

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/70">
            &copy; 2025 AKR Official - AI Technology Contributor & Software
            Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
