import logo from "../assets/Logo.png";

export default function App() {
  return (
    // <div className="min-h-screen bg-green-600 flex items-center justify-center text-white text-3xl">
    //   Tailwind is FINALLY working 🎉
    // </div>


  
  <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
     <div className="w-full max-w-[360px] sm:max-w-[408px] rounded-xl bg-white shadow-none border border-[#E5E5E5]">
        <div className="px-7 pt-8 pb-6">

             <div className="mx-auto mt-4 mb-4 h-16 w-16  sm:h-16 sm:w-16 p-4 rounded-full bg-black flex items-center justify-center overflow-hidden">
                        <img src={logo} alt="G Food Park" className="h-full w-full object-cover" />
            </div>

             <h1 className="text-center text-base font-poppins font-medium text-slate-900">Login to your account</h1>
             <p className="mt-1 text-center text-[14px] text-slate-400">Enter your credentials below to login to your account</p>
                <p style={{ fontFamily: "Poppins" }}>Poppins test</p>

      <p className="text-center text-slate-600">
        Login Card Placeholder
      </p>

      </div>
     </div>
    </div>


  );
}
