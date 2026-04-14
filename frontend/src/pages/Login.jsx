import { LoginForm } from "@/components/login-form"

export default function Login() {
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

      {/* Glassmorphism card */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg">
        <LoginForm />
      </div>
    </div>
  )
}