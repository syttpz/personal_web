import Nav from "../components/Nav"

export default function Home() {
  return (
    <div className="relative font-mono min-h-screen bg-black text-slate-100">
     
      <Nav />
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <img
          src="/profile_pic.jpg"
          className="mx-auto h-48 w-48 brightness-110 contrast-110"
        />

        <h1 className="mt-4 text-4xl font-bold">Eddy Hu</h1>
        <br />

        <div className="text-left">
          <h2 className="text-4xl font-bold">We1c0me!</h2>
          <br />
          <p className="text-slate-300">Math & CS student at NYU Tandon.</p>
          <p className="text-slate-300">C++ · React · TS · Python · Rust · MySQL…</p>
          <br />

          <p className="text-slate-300">
            Open to collaborate on dev tooling, desktop (Tauri), browser extensions, and backend/systems.
            Also seeking Summer 2026 SWE/Systems internships. Happy to contribute :)
          </p>
          <br />
          <p className="text-xl font-bold">Contact</p>
          <p className="text-slate-300">Email — bh2730@nyu.edu</p>
          <p className="text-slate-300">
            GitHub — <a className="text-blue-400 hover:underline" href="https://github.com/syttpz">github.com/syttpz</a>
          </p>
          <p className="text-slate-300">
            LinkedIn — <a className="text-blue-400 hover:underline" href="https://linkedin.com/in/eddy-hu217/">linkedin.com/in/bh2730</a>
          </p>
        </div>
      </div>
    </div>
  )
}
