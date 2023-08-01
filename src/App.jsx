import { useState } from "react";
import "./App.css";

function App() {
  
  const[count, setCount]=useState(0);

  function drecreasehandler(){
        setCount(count-1);
  }

  function increasehandler(){
    setCount(count+1);
  }

  function resethandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-8 ">
        <div className="text-2xl">Increment and decrement counter</div>

        <div className="flex flex-row bg-slate-300 justify-center items-center gap-12 py-5 px-2 rounded-2xl text-2xl" >

          <button onClick={drecreasehandler} className="  w-16">
            -
          </button >
          <div>
            {count}
          </div>
          <button onClick={increasehandler} className=" w-16">
            +
          </button>

        </div>
        <button onClick={resethandler} className=" bg-green-300 px-9 py-4 rounded-xl font-bold text-xl">
          reset
        </button>
    </div>
  );
}

export default App;
