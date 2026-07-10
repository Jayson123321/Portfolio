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
              <a href="https://github.com/Jayson123321" target="_blank" rel="noopener noreferrer">
                <button className="github">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
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
