import React, { useState } from "react";

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const internships = [
    {
      id: 1,
      company: "OutriX",
      role: "Frontend Developer Intern",
      duration: "Jun 2025 - Aug 2025",
      location: "Remote",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      company: "Minimalistic Technology",
      role: "Software Developer",
      duration: "Aug 2025 - Present",
      location: "Remote",
      description:
        "Built and handled Client Projects from scratch. Gained hands-on experience in Software Development tech stack including Next js, Typescript, Node js, MongoDB.",
      skills: ["Next.js", "Redux", "Node js", "MongoDB"],
      color: "from-cyan-500 to-blue-500",
    },
    // {
    //   id: 3,
    //   company: "StartupX",
    //   role: "Full Stack Intern",
    //   duration: "Sep 2023 - Dec 2023",
    //   location: "Austin, TX",
    //   description: "Developed full-stack applications with Node.js backend and React frontend. Implemented authentication and payment systems.",
    //   skills: ["Node.js", "React", "MongoDB", "Stripe API"],
    //   color: "from-emerald-500 to-teal-500"
    // }
  ];

  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div
        className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      ></div>
    </div>
  );

  //   const AnimatedWave = () => (
  //     <svg className=" w-full h-52" viewBox="0 0 1200 120" preserveAspectRatio="none">
  //       <defs>
  //         <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
  //           <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
  //           <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
  //           <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
  //         </linearGradient>
  //       </defs>
  //       <path d="M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)">
  //         <animate attributeName="d" dur="10s" repeatCount="indefinite"
  //           values="M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,120 L0,120 Z;
  //                   M0,80 C120,60 240,40 360,80 C480,60 600,40 720,80 C840,60 960,40 1080,80 C1160,70 1200,75 1200,80 L1200,120 L0,120 Z;
  //                   M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,120 L0,120 Z" />
  //       </path>
  //     </svg>
  //   );

  // const AnimatedWave = () => (
  //   <svg className="w-full h-52 relative" viewBox="0 0 1200 120" preserveAspectRatio="none">
  //     <defs>
  //       <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
  //         <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
  //         <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
  //         <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
  //       </linearGradient>
  //     </defs>

  //     {/* Top wave */}
  //     <path
  //       d="M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,120 L0,120 Z"
  //       fill="url(#waveGradient)"
  //     >
  //       <animate
  //         attributeName="d"
  //         dur="10s"
  //         repeatCount="indefinite"
  //         values="
  //           M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,120 L0,120 Z;
  //           M0,80 C120,60 240,40 360,80 C480,60 600,40 720,80 C840,60 960,40 1080,80 C1160,70 1200,75 1200,80 L1200,120 L0,120 Z;
  //           M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,120 L0,120 Z"
  //       />
  //     </path>

  //     {/* Bottom wave (flipped) */}
  //     <g
  //       className=' mt-20'
  //     >
  //     <path
  //       d="M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,0 L0,0 Z"
  //       fill="url(#waveGradient)"
  //       transform="scale(1,-1) translate(0,-120)"
  //     >
  //       <animate
  //         attributeName="d"
  //         dur="12s"
  //         repeatCount="indefinite"
  //         values="
  //           M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,0 L0,0 Z;
  //           M0,80 C120,60 240,40 360,80 C480,60 600,40 720,80 C840,60 960,40 1080,80 C1160,70 1200,75 1200,80 L1200,0 L0,0 Z;
  //           M0,60 C120,40 240,80 360,60 C480,40 600,80 720,60 C840,40 960,80 1080,60 C1160,50 1200,55 1200,60 L1200,0 L0,0 Z"
  //       />
  //     </path>
  //     </g>
  //   </svg>
  // );

  const AnimatedWave = () => (
    <svg
      className="w-full h-52"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* 🔹 Top wave */}
      <path
        d="M0,40 C150,60 300,20 450,40 C600,60 750,20 900,40 C1050,60 1200,20 1200,40 L1200,0 L0,0 Z"
        fill="url(#waveGradient)"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
          M0,40 C150,60 300,20 450,40 C600,60 750,20 900,40 C1050,60 1200,20 1200,40 L1200,0 L0,0 Z;
          M0,20 C150,40 300,60 450,20 C600,40 750,60 900,20 C1050,40 1200,60 1200,20 L1200,0 L0,0 Z;
          M0,40 C150,60 300,20 450,40 C600,60 750,20 900,40 C1050,60 1200,20 1200,40 L1200,0 L0,0 Z"
        />
      </path>

      {/* 🔹 Bottom wave */}
      <path
        d="M0,80 C150,100 300,60 450,80 C600,100 750,60 900,80 C1050,100 1200,60 1200,80 L1200,120 L0,120 Z"
        fill="url(#waveGradient)"
      >
        <animate
          attributeName="d"
          dur="12s"
          repeatCount="indefinite"
          values="
          M0,80 C150,100 300,60 450,80 C600,100 750,60 900,80 C1050,100 1200,60 1200,80 L1200,120 L0,120 Z;
          M0,100 C150,80 300,100 450,60 C600,80 750,100 900,60 C1050,80 1200,100 1200,100 L1200,120 L0,120 Z;
          M0,80 C150,100 300,60 450,80 C600,100 750,60 900,80 C1050,100 1200,60 1200,80 L1200,120 L0,120 Z"
        />
      </path>
    </svg>
  );

  const GeometricShape = ({ className, delay = 0 }) => (
    <div className={`absolute ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60">
        <polygon
          points="30,5 50,45 10,45"
          fill="url(#triangleGrad)"
          opacity="0.1"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;360 30 30"
            dur="20s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </polygon>
        <defs>
          <linearGradient id="triangleGrad">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  return (
    <section className="relative   py-20  overflow-hidden">
      <FloatingOrbs />
      <GeometricShape className="top-20 right-20" delay={0} />
      <GeometricShape className="bottom-40 left-10" delay={5} />
      <GeometricShape className="top-1/2 right-1/3" delay={10} />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-6xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 relative font-normal">
              EXPERIENCE
              {/* <svg className="absolute -top-2 -right-8 w-12 h-12" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9.27L17.18 14.14L18.18 23.02L12 19.77L5.82 23.02L6.82 14.14L2 9.27L10.91 8.26L12 2Z" 
                      fill="url(#starGrad)" opacity="0.8">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                </path>
                <defs>
                  <linearGradient id="starGrad">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg> */}
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into reality through hands-on experience and
            innovative projects
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-16">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className="relative group"
              //   onMouseEnter={() => setHoveredCard(internship.id)}
              //   onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${internship.color} rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm `}
              ></div>
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                {/* Company Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${internship.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">
                      {internship.duration}
                    </div>
                    <div className="text-sm text-gray-500">
                      {internship.location}
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  {internship.company}
                </h3>
                <h4 className="text-lg font-semibold text-purple-300 mb-4">
                  {internship.role}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {internship.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${internship.color} text-white font-medium transform hover:scale-110 transition-transform duration-300 cursor-pointer`}
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Lines */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${internship.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l ${internship.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200`}
                  ></div>
                  <div
                    className={`absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b ${internship.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t ${internship.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "3+", label: "Internships", icon: "🚀" },
            { number: "12+", label: "Projects", icon: "💡" },
            { number: "500+", label: "Code Commits", icon: "⚡" },
            { number: "100%", label: "Success Rate", icon: "🎯" },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* <AnimatedWave /> */}
    </section>
  );
};

export default Experience;
