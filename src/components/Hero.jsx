import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-4">
            20+ years crafting intelligent systems & delightful products
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Hey, I’m Alex Carter — I build human-centered AI that ships and scales
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            AI/ML engineer and product-focused developer specializing in end‑to‑end systems: from data pipelines and model design to sleek, accessible frontends. I obsess over latency, reliability, and taste.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 transition-colors">See Featured Work</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-6 py-3 transition-colors">Get in Touch</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <span>Computer Vision</span>
            <span>•</span>
            <span>LLMs & RAG</span>
            <span>•</span>
            <span>MLOps</span>
            <span>•</span>
            <span>Full‑stack</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
