import { useState } from "react";
import logo from "../assets/Logo.png"; // <-- change filename if needed

export default function Login() {
  const [username, setUsername] = useState("cashier1");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to auth later
    console.log({ username, password });
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[360px] rounded-xl bg-white shadow-lg border border-slate-200">
        <div className="p-6">
          {/* Logo circle */}
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="G Food Park"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Title + subtitle */}
          <h1 className="text-center text-base font-semibold text-slate-900">
            Login to your account
          </h1>
          <p className="mt-1 text-center text-[11px] text-slate-400">
            Enter your credentials below to login to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-700">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-300 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-300 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-violet-600 py-2 text-xs font-semibold tracking-wide text-white hover:bg-violet-700 active:bg-violet-800 transition"
            >
              LOG IN
            </button>
          </form>
        </div>

        {/* little bottom spacing like your design */}
        <div className="h-3" />
      </div>
    </div>
  );
}
