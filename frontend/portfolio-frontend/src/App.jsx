import { useEffect, useState } from "react";
import Me from "./components/me";


function App() {

  const [activeTabs, setActiveTabs] = useState(
    localStorage.getItem('activeTabs') || 'me'
  );

  useEffect(() => localStorage.setItem('activeTabs', activeTabs), [activeTabs])

  const handleTabs = (tab) => {
    setActiveTabs(tab);
  }

  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden flex justify-center">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[url('/bekron.jpg')] bg-cover bg-center blur-xl scale-105"></div>

      {/* Content layer */}
      <div className="relative z-10 p-8 text-white  justify-center w-[50%] mt-14">
        <div className="flex flex-row justify-start gap-7 text-white mb-5">
          <p className={`font-semibold text-3xl ${activeTabs == 'me' ?
            'bg-emerald-300/40 min-w-[25rem] opacity-90' : 'bg-transparent min-w-[8rem]'} cursor-pointer rounded-lg p-2 transition-all duration-800 ease-in-out`} onClick={() => handleTabs("me")}>
            Muhammad Dzaky R
          </p>
          <p className={`font-semibold text-3xl ${activeTabs == 'portfolio' ?
            'bg-emerald-300/40 min-w-[15rem] opacity-90' : 'bg-transparent min-w-[8rem]'} cursor-pointer rounded-lg p-2 transition-all duration-800 ease-in-out`} onClick={() => handleTabs("portfolio")}>
            Portfolio
          </p>
        </div>
        <Me />
      </div>
    </div >
  );
}


export default App
