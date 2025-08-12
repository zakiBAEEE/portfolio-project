import Me from "./components/me";


function App() {
  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden flex justify-center">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[url('/bekron.jpg')] bg-cover bg-center blur-xl scale-105"></div>

      {/* Content layer */}
      <div className="relative z-10 p-8 text-white flex justify-center w-[50%]">
        <Me />
      </div>
    </div>
  );
}


export default App
