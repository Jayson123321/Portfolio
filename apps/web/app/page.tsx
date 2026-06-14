import Image from "next/image";
import MapWrapper from "../components/MapWrapper";
import TypeWriter from "../components/TypeWriter";
import Sidebar from "../components/Sidebar";
import profilePic from "./images/Pic1.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sidebar navigation */}
      <Sidebar />

      {/* About Me */}
      <section id="aboutMe" className="min-h-screen relative flex flex-col justify-center px-8 lg:px-32 py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 w-full max-w-screen-2xl">
          <div className="flex-1">
            <TypeWriter text="Hi, my name is Jayson!" />
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="mailto:Jaysonhaverkamp90@gmail.com">
                <button className="email">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <title>Send email</title>
                    <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
                  </svg>
                </button>
              </a>
              <a href="http://www.linkedin.com/in/jayson-haverkamp-29b45b204" target="_blank" rel="noopener noreferrer">
                <button className="linkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </a>
              <a href="https://www.instagram.com/jaysonh020/" target="_blank" rel="noopener noreferrer">
                <button className="instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* About me card */}
          <div className="w-full md:w-96 shrink-0 rounded-xl shadow overflow-hidden ">
            <div className="p-5">
              <p className="text-base text-slate-200 font-sans mb-2">
                My name is Jayson Haverkamp, 21 years old, born in Enschede, and half Dutch and half Filipino.
                Currently pursuing my bachelor&apos;s degree in software engineering.
              </p>
              <p className="text-base text-slate-200 font-sans">
                I enjoy exploring new places in the world; below you can see the locations I&apos;ve visited.
              </p>
            </div>
            <Image
              src={profilePic}
              alt="Jayson Haverkamp"
              className="border rounded-[32px] w-48 ml-8"
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="w-full">
        <MapWrapper />
      </div>

      {/* Education */}
      <section id="school" className="min-h-screen px-8 lg:px-32 py-20">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">Education</h2>
        <div className="relative max-w-xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-400/40 -translate-x-1/2" />

          {/* HBO-ICT */}
          <div className="mb-12 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-1/2 sm:pr-8 text-right">
              <div className="p-4 rounded-lg blurred-container inline-block text-left">
                <p className="font-semibold text-white">HBO-ICT Software Engineering</p>
                <p className="text-sm text-slate-400">Hogeschool van Amsterdam</p>
              </div>
            </div>
            <div className="relative z-10 w-8 h-8 rounded-full bg-slate-700 border-2 border-blue-400 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-8" />
          </div>

          {/* MBO */}
          <div className="mb-12 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-1/2 sm:pr-8" />
            <div className="relative z-10 w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-400 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-4 rounded-lg blurred-container inline-block">
                <p className="font-semibold text-white">ICT-Beheer Niveau 4</p>
                <p className="text-sm text-slate-400">Rocva zuid-oost</p>
              </div>
            </div>
          </div>

          {/* MAVO */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-1/2 sm:pr-8 text-right">
              <div className="p-4 rounded-lg blurred-container inline-block text-left">
                <p className="font-semibold text-white">MAVO</p>
                <p className="text-sm text-slate-400">Middelbare school</p>
              </div>
            </div>
            <div className="relative z-10 w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-400 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-8" />
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section id="work" className="px-8 lg:px-32 py-20">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">Work Experience</h2>
        <div className="timeline-horizontal">
          <div className="timeline-item">
            <div className="timeline-content">
              <time className="font-mono italic text-slate-500 text-xs">01/2020 – 12/2021</time>
              <p className="text-base font-bold text-white mt-1">Dirk van den Broek</p>
              <p className="mt-2 text-sm">
                My first side job. At this supermarket I was filling the shelves with products.
              </p>
            </div>
          </div>
          <div className="timeline-connector" />
          <div className="timeline-item">
            <div className="timeline-content">
              <time className="font-mono italic text-slate-500 text-xs">02/2022 – 02/2023</time>
              <p className="text-base font-bold text-white mt-1">itym – Helpdesk (Internship)</p>
              <p className="mt-2 text-sm">
                Internship as a helpdesk employee at itym in Amsterdam.
              </p>
            </div>
          </div>
          <div className="timeline-connector" />
          <div className="timeline-item">
            <div className="timeline-content">
              <time className="font-mono italic text-slate-500 text-xs">02/2022 – 12/2022</time>
              <p className="text-base font-bold text-white mt-1">Schiphol – Passenger Assistant</p>
              <p className="mt-2 text-sm">
                Working as a Passenger Assistant at Schiphol, helping passengers through the gates and answering flight questions.
              </p>
            </div>
          </div>
          <div className="timeline-connector" />
          <div className="timeline-item">
            <div className="timeline-content">
              <time className="font-mono italic text-slate-500 text-xs">01/2023 – present</time>
              <p className="text-base font-bold text-white mt-1">Schiphol – Security Host</p>
              <p className="mt-2 text-sm">
                As a Security Host at Schiphol, I help passengers get through security and answer their questions.
              </p>
            </div>
          </div>
          <div className="timeline-connector" />
          <div className="timeline-item">
            <div className="timeline-content">
              <time className="font-mono italic text-slate-500 text-xs">02/2023 – 07/2023</time>
              <p className="text-base font-bold text-white mt-1">Allinq – ICT Field Engineer (Internship)</p>
              <p className="mt-2 text-sm">
                Internship as an ICT Field Engineer at Allinq, based at Schiphol.
              </p>
            </div>
          </div>
          <div className="timeline-connector" />
          <div className="timeline-item">
            <div className="timeline-content">
              <time className="font-mono italic text-slate-500 text-xs">09/2025 – 02/2026</time>
              <p className="text-base font-bold text-white mt-1">Mr illi – Full Stack Developer (Internship)</p>
              <p className="mt-2 text-sm">
                Internship as a full stack developer at Mr illi in Amstelveen, as part of my HBO Software Engineering degree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 lg:px-32 py-20">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">Latest Projects</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="blurred-container p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white">Luca Stars – Text Based Adventure Game</h3>
            <p className="mt-2 text-slate-400 text-sm">
              Building a text based adventure game as a school project to practice object oriented programming.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Lit", "Express", "Node.js", "TypeScript", "MySQL"].map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="blurred-container p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white">Luca Stars – Webshop</h3>
            <p className="mt-2 text-slate-400 text-sm">
              Building a webshop for delivered games, practicing object oriented programming and web technologies.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Lit", "Express", "Node.js", "TypeScript", "MySQL"].map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
