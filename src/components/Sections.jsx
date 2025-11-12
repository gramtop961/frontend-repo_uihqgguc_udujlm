import { motion } from 'framer-motion'
import { Brain, LineChart, Cpu, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function About() {
  const items = [
    { icon: Brain, title: 'Research Mindset', desc: 'Blend of academic rigor and practical engineering. I prototype fast, measure honestly, and ship reliably.' },
    { icon: Cpu, title: 'Systems Thinking', desc: 'I design for scale: data, training, inference, and observability as first‑class citizens.' },
    { icon: LineChart, title: 'Impact Focused', desc: 'Models are means. Business outcomes, usability, and maintainability are the goals.' },
  ]
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl sm:text-4xl font-bold tracking-tight">About</motion.h2>
        <p className="mt-4 text-gray-700 max-w-3xl">A 20+ year journey across AI, product, and platform engineering. I’ve led teams, mentored practitioners, and built systems used by millions. I care about high‑quality execution and elegant experiences.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,desc}) => (
            <motion.div key={title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm">
              <Icon className="text-indigo-600" />
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { group: 'AI / ML', items: ['LLMs (OpenAI, Llama, fine‑tuning)', 'RAG & vector search', 'Transformer architectures', 'Computer Vision (Detect/Seg/Track)', 'Recommendation systems'] },
    { group: 'MLOps', items: ['Experiment tracking', 'Feature stores', 'CI/CD for ML', 'Model serving (FastAPI, Triton)', 'Observability'] },
    { group: 'Data', items: ['Pipelines', 'Streaming', 'Quality & governance', 'SQL/NoSQL', 'Cloud (AWS/GCP/Azure)'] },
    { group: 'Frontend', items: ['React + Vite', 'Tailwind', 'Framer Motion', 'Design systems'] },
  ]
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="font-semibold">{s.group}</h3>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                {s.items.map((i) => (<li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" /><span>{i}</span></li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    { title: 'NeuraDoc — RAG for Enterprise Docs', tags: ['LLM','RAG','FastAPI','Pinecone'], desc: 'Low‑latency doc QA with hybrid search, chunking strategies, and guardrails. 35% reduction in support tickets.', link: '#' },
    { title: 'VisionTrack — Real‑time CV', tags: ['YOLOv8','DeepSORT','WebRTC'], desc: 'On‑edge detection and tracking pipeline, sub‑50ms latency on Jetson class devices.', link: '#' },
    { title: 'InsightLoop — Forecasting Platform', tags: ['Time Series','XGBoost','Airflow'], desc: 'Demand forecasting with drift monitoring and automated retraining. Drove 12% inventory savings.', link: '#' },
  ]
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (<span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">{t}</span>))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Research() {
  const items = [
    { title: 'Paper: Efficient RAG with Learned Chunk Merging', venue: 'arXiv 2024', link: '#' },
    { title: 'Talk: From Prototype to Production LLMs', venue: 'MLOps World 2023', link: '#' },
    { title: 'Patent: On‑device Few‑shot Personalization', venue: 'US PTO', link: '#' },
  ]
  return (
    <section id="research" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Research & Talks</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(i => (
            <a key={i.title} href={i.link} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{i.venue}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const roles = [
    { company: 'TechNova', role: 'Principal AI Engineer', period: '2020 — Present', points: ['Led LLM platform initiatives', 'Shipped RAG service to 50+ teams', 'Mentored 12 engineers'] },
    { company: 'Visionary Labs', role: 'Head of ML', period: '2016 — 2020', points: ['Built CV platform', 'Scaled inference infra', 'Hired and grew team'] },
  ]
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-6">
          {roles.map(r => (
            <div key={r.company} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-semibold text-lg">{r.role} · {r.company}</h3>
                <span className="text-sm text-gray-600">{r.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {r.points.map(p => (<li key={p} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something remarkable</h2>
        <p className="mt-4 text-gray-700 max-w-2xl">Open to collaborations, research partnerships, and advisory roles. The fastest way to reach me is email; happy to hop on a call.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="mailto:alex.carter@example.com" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 transition-colors"><Mail className="h-4 w-4" /> Email</a>
          <a href="https://github.com/alex-carter" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-6 py-3 transition-colors"><Github className="h-4 w-4" /> GitHub</a>
          <a href="https://www.linkedin.com/in/alexcarter" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-6 py-3 transition-colors"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
