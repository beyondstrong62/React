import { useState } from 'react'        // Can remove if not used
import './App.css'

function App() {
  const [count, setCount] = useState("olive")

  return (
    <>
      <div className="w-full h-screen flex duration-200" style={{backgroundColor: count}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className ="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white rounded-lg p-3">
            <button
              onClick={() => setCount("olive")}
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-green-700 hover:bg-green-800 transition duration-150 ease-in-out'
            >
              Olive
            </button>
            <button
              onClick={() => setCount("#F59E0B")} // Amber-500 hex
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-amber-500 hover:bg-amber-600 transition duration-150 ease-in-out'
            >
              Amber
            </button>
            <button
              onClick={() => setCount("#059669")} // Emerald-600 hex
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-emerald-600 hover:bg-emerald-700 transition duration-150 ease-in-out'
            >
              Emerald
            </button>
            <button
              onClick={() => setCount("#06B6D4")} // Cyan-600 hex
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-cyan-600 hover:bg-cyan-700 transition duration-150 ease-in-out'
            >
              Cyan
            </button>
            <button
              onClick={() => setCount("#7C3AED")} // Violet-600 hex
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-violet-600 hover:bg-violet-700 transition duration-150 ease-in-out'
            >
              Violet
            </button>
            <button
              onClick={() => setCount("#C026D3")} // Fuchsia-600 hex
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-150 ease-in-out'
            >
              Fuchsia
            </button>
            <button
              onClick={() => setCount("#EC4899")} // Pink-600 hex
              className='outline-none px-4 py-2 rounded-full text-white shadow-lg bg-pink-600 hover:bg-pink-700 transition duration-150 ease-in-out'
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App