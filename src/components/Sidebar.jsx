import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  //fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800
  return (
    <div className='sticky w-50 p-3 m-2 flex flex-col border border-slate-200 shadow-lg col-span-2'>
      <div className='p-1 m-2'>
        <ul>
            <li className='p-1'><Link to="/">Home</Link></li>
            <li className='p-1'>Shorts</li>
            <li className='p-1'>Subscriptions</li>
        </ul>
      </div>
      <div className='w-full h-[1px] border border-gray-300'></div>
      <div className='p-1 m-2'>
        <h1 className='font-bold mt-2 text-xl'>You</h1>
        <ul className='p-2'>
            <li className='p-1'>History</li>
            <li className='p-1'>Playlist</li>
            <li className='p-1'>Watch Later</li>
            <li className='p-1'>Liked Videos</li>
        </ul>
      </div>
      <div className='w-full h-[1px] border border-gray-300'></div>
      <div className='p-1 m-2'>
        <h1 className='font-bold mt-2 text-xl'>Subscriptions</h1>
        <ul className='p-2'>
            <li className='p-1'>Muse Aisa</li>
            <li className='p-1'>Dude Perfect</li>
            <li className='p-1'>Carryminati</li>
            <li className='p-1'>Akshay Saini</li>
        </ul>
      </div>
    </div> 

  )
}

export default Sidebar;

{/* <div className='sticky w-50 p-3 m-2 flex flex-col border border-slate-200 shadow-lg col-span-2 top-0 left-0 '>
      <div className='p-1 m-2'>
        <ul>
            <li className='p-1'><Link to="/">Home</Link></li>
            <li className='p-1'>Shorts</li>
            <li className='p-1'>Subscriptions</li>
        </ul>
      </div>
      <div className='w-full h-[1px] border border-gray-300'></div>
      <div className='p-1 m-2'>
        <h1 className='font-bold mt-2 text-xl'>You</h1>
        <ul className='p-2'>
            <li className='p-1'>History</li>
            <li className='p-1'>Playlist</li>
            <li className='p-1'>Watch Later</li>
            <li className='p-1'>Liked Videos</li>
        </ul>
      </div>
      <div className='w-full h-[1px] border border-gray-300'></div>
      <div className='p-1 m-2'>
        <h1 className='font-bold mt-2 text-xl'>Subscriptions</h1>
        <ul className='p-2'>
            <li className='p-1'>Muse Aisa</li>
            <li className='p-1'>Dude Perfect</li>
            <li className='p-1'>Carryminati</li>
            <li className='p-1'>Akshay Saini</li>
        </ul>
      </div>
    </div> */}
