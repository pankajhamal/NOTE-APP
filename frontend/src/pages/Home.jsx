import React, { useEffect, useState } from 'react'

const Home = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-gray-100 p-6 md:p-10">

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating blobs - very subtle */}
      <div className="absolute top-10 left-10 h-48 w-48 rounded-full bg-gray-300 opacity-30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-gray-400 opacity-20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl gap-6">

        {/* Badge */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '0ms',
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/60 px-4 py-1.5 text-xs font-medium text-gray-500 backdrop-blur-sm shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Your personal note space
          </span>
        </div>

        {/* Main Title */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms',
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-800 leading-tight">
            Manage all your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900">notes</span>
              <span
                className="absolute bottom-1 left-0 h-3 w-full rounded-sm bg-gray-300 opacity-50 -z-0"
              />
            </span>{' '}
            here.
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms',
          }}
        >
          <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed">
            A clean, distraction-free space to capture your thoughts, ideas, and to-dos — all in one place.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '450ms',
          }}
        >
          <button className="group relative inline-flex items-center gap-2 rounded-xl bg-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
            Get Started
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home