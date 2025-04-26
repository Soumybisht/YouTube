import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();
    const handleToggleBar = ()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col m-2  p-2 shadow-lg sticky top-0 bg-white'>
      <div className='flex col-span-1'>
        <img onClick={()=> handleToggleBar()} className='h-9 m-2 cursor-pointer' src="https://images.icon-icons.com/2036/PNG/512/menu_circular_button_burger_icon_124214.png" alt="" />
        <img className='h-9 m-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" />
      </div>
      <div className='flex col-span-9 justify-center align-middle'>
        <input className=' w-1/2 h-[43px] rounded-l-full border border-gray-400 ' type="text" />
        <button className='h-[43px] p-5 rounded-r-full border border-slate-400 flex items-center justify-center'> 🔍 </button>
      </div>
      <div className='flex col-span-2 justify-end align-middle'>
        <img className='h-9 m-2 ' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
      </div>
    </div>
  )
}

export default Head;
