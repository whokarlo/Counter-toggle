// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const appName = 'Counter App + toggle';

function App() {

  return (
    <>
    <div className='border-2 border-solid p-10 mb-10 mt-50 rounded-full'>
      <header className='text-[48px] '>
        {appName}
      </header>
    </div>
    <div>
      <button className='bg-black text-white font-bold py-2 px4 rounded-full p-10'>
        Count{}
      </button>
    </div>


    {/*this is the increment / decrement / reset  */}
    <div className='grid grid-cols-3 gap-5 divide-x-3 divide-black-500 p-10'>
    <button className='bg-black hover:bg-purple-400 text-white font-bold py-2 px4 rounded-full p-10'>
        increment
      </button>
      <button className='bg-black hover:bg-purple-400 text-white font-bold py-2 px4 rounded-full p-10'>
        decrement
      </button>
      <button className='bg-black hover:bg-purple-400 text-white font-bold py-2 px4 rounded-full p-10'>
        reset
      </button>
    </div>
    </>
  )
  }

export default App
