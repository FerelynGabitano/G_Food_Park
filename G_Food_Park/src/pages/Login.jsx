import { useState } from "react";
import logo from "../assets/Logo.png"; 
import * as HI from "hugeicons-react";
import viewIcon from "../assets/view.svg";
import viewOffIcon from "../assets/view-off.svg";



export default function Login() {
  const [username, setUsername] = useState("cashier1");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to auth later
    console.log({ username, password });
  };

const EyeIcon = HI.Eye || HI.View || HI.EyeOpen || HI.EyeOn;
const EyeOffIcon = HI.EyeOff || HI.ViewOff || HI.EyeClosed || HI.EyeOffIcon;


  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[360px] sm:max-w-[408px] rounded-xl bg-white shadow-lg border border-slate-200">
        <div className="px-7 pt-8 pb-6">
         
          {/* Logo circle */}
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <img src={logo} alt="G Food Park" className="h-120 w-120 object-cover" />
          </div>

          {/* Title + subtitle */}
          <h1 className="text-center text-base font-semibold text-slate-900">
            Login to your account
          </h1>
          <p className="mt-1 text-center text-[11px] text-slate-400">
            Enter your credentials below to login to your account
          </p>

          {/* Form */}

          {/* Username */}
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

           {/* Password */}
                <div>
                <label className="text-[12px] font-medium text-slate-700">Password</label>

                <div className="relative mt-2">
                    <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white
                                px-4 py-3 pr-14 pl-12
                                text-[14px] text-slate-900 outline-none
                                focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                    placeholder="Enter password"
                    />

                    {/* 👁 Eye icon inside input */}
                    <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2
                                opacity-70 hover:opacity-100 transition"
                    aria-label={showPw ? "Hide password" : "Show password"}
                    >
                    <img
                        src={showPw ? viewOffIcon : viewIcon}
                        alt=""
                        className="h-5 w-5"
                    />
                    </button>
                </div>
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
