import logo from "../assets/Logo.png";
import viewIcon from "../assets/view.svg";
import viewOffIcon from "../assets/view-off.svg";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
        <div className="w-96 mx-auto py-6 bg-card rounded-[14px] border-2 border-slate-200 shadow-[0px_1px_3px_0px_rgba(158,158,158,0.10)] shadow-[2px_4px_5px_0px_rgba(158,158,158,0.09)] shadow-[4px_10px_6px_0px_rgba(158,158,158,0.05)] shadow-[8px_17px_8px_0px_rgba(158,158,158,0.01)] shadow-[12px_27px_8px_0px_rgba(158,158,158,0.00)] outline outline-1 outline-offset-[-1px] outline-border inline-flex flex-col justify-start items-center gap-6">
    <img className="w-28 h-28 rounded-full mb-24" src={logo} />
    <div className="self-stretch px-6 py-3 inline-flex justify-end items-start gap-1.5">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <div className="flex-1 text-center justify-start text-card-foreground text-2xl font-medium font-['Poppins'] leading-7">Login to your account</div>
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <div className="self-stretch w-full px-4 py-3 bg-blue-100 rounded-lg text-center text-color-text-muted-foreground text-sm font-normal font-['Poppins'] leading-5">Enter your credentials below to login to your account</div>
            </div>
        </div>
    </div>
    <div className="self-stretch px-6 py-6 flex flex-col justify-start items-start gap-6">
        <div data-show-icon="false" data-show-label="true" data-state="default" className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="w-80 h-6 justify-start text-color-surface-foreground text-base font-medium font-['Poppins'] leading-6">Username</div>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="self-stretch p-3 bg-color-input-primary-fill rounded-lg outline outline-1 outline-offset-[-1px] outline-color-input-border font-poppins text-lg text-slate-900 focus:outline-none focus:outline-2 focus:outline-blue-500"
            />
        </div>
        <div data-show-icon="true" data-show-label="true" data-state="default" className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="w-80 h-6 justify-start text-color-surface-foreground text-base font-medium font-['Poppins'] leading-6">Password</div>
            <div className="relative w-full">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="self-stretch p-3 bg-color-input-primary-fill rounded-lg outline outline-1 outline-offset-[-1px] outline-color-input-border font-poppins text-lg text-slate-900 focus:outline-none focus:outline-2 focus:outline-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
              >
                <img 
                  src={showPassword ? viewOffIcon : viewIcon} 
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="w-5 h-5"
                />
              </button>
            </div>
        </div>
    </div>
    <div className="self-stretch px-6 flex flex-col justify-start items-start gap-2">
        <div data-heirarchy="Primary" data-icon="False" data-show-leading-icon="false" data-show-trailing-icon="false" data-size="base" data-state="Default" className="self-stretch px-4 py-2.5 bg-color-button-primary-fill rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline outline-1 outline-offset-[-1px] outline-color-button-primary-fill inline-flex justify-center items-center gap-2 overflow-hidden">
            <div className="justify-start text-color-text-primary-fill text-base font-medium font-['Poppins'] leading-6">LOG IN</div>
        </div>


    </div>
</div>
</div>


  );
}
