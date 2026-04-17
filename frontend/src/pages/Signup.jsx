import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
  };

  return (
    
    <div className="min-h-screen bg-white  flex items-center justify-center px-4">

      <div className="w-full max-w-md border bg-amber-100 border-gray-400 rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-black mb-1">
          Create an account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign up to get started today.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black"
            />
            <p className="text-xs text-gray-400 mt-1">
              Must be at least 8 characters.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-medium py-2.5 rounded hover:bg-gray-800 transition-colors mt-2"
          >
            Create account
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-black font-medium underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
