// src/pages/Experience.tsx
import Nav from "../components/Nav";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-mono">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-center">Experience</h1>

        <section className="mt-8">
          <h3 className="text-lg font-bold">
            Operations Intern · <span className="text-slate-300">Shanghai Data Exchange</span>
          </h3>
          <p className="text-sm text-slate-400">Shanghai, China · Jun 2024 – Aug 2024</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Configured Smokeping for concurrent monitoring across ~40 hosts, improving coverage of packet loss and latency.</li>
            <li>Automated daily audit evidence with a cron-scheduled Selenium + Baidu OCR workflow that logs in, screenshots, extracts text, and fills templates—cutting prep to ~5 minutes.</li>
            <li>Built an internal Flask + MySQL dashboard that inventories TCP listening processes across servers to accelerate incident triage.</li>
          </ul>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Data Analyst Intern · <span className="text-slate-300">Neumetry Medical Inc.</span>
          </h3>
          <p className="text-sm text-slate-400">Fremont, CA · Jul 2021 – Aug 2022</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Supported a wearable-based cardiovascular study: onboarded volunteers, provisioned smartwatches, and collected BP/SpO₂ readings per protocol</li>
            <li>Ran Python scripts to perform Fourier analysis on logged signals and annotated the top three peaks; generated plots from CSV data for investigators</li>
          </ul>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Motion Team Lead (2025-present) & Member · <span className="text-slate-300">NYU RoboSub</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Jan 2024 – Present</p>
          <p className="mt-2 text-sm text-slate-300">
          State estimation & trajectory control; tuned PID; coordinated with perception/planning; deployed a Dockerized ROS 1 simulation environment on Raspberry Pi 4B; preparing for RoboSub 2026.
          </p>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Lab Member · <span className="text-slate-300">NYU OSIRIS</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Oct 2024 – Present</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Completed the OSIRIS Recruit CTF and participate in weekly lab meetings/CTF scrims.</li>
            <li>Focus on reverse engineering and hardware security.</li>
          </ul>
        </section>

        <hr className="my-6 border-white/10" />
      </main>
    </div>
  );
}
