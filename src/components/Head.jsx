import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { cacheSearch } from '../Utils/searchSlice';

const Head = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [isFocus,setIsFocus] = useState(false);

  const searchCache = useSelector((store)=>store.search);
  useEffect(()=>{

    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        searchingCall();
      }
    },200);

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery]);


    const dispatch = useDispatch();
    const handleToggleBar = ()=>{
        dispatch(toggleMenu());
    }

    const searchingCall = async ()=>{
      console.log("API called - "+searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheSearch(
        {
          [searchQuery] : json[1],
        }
      ));
    }

  return (
    <div className='grid grid-flow-col m-2  p-2 shadow-lg sticky top-0 bg-white z-10'>
      <div className='flex col-span-1'>
        <img onClick={()=> handleToggleBar()} className='h-8 m-2 cursor-pointer' src="https://images.icon-icons.com/2036/PNG/512/menu_circular_button_burger_icon_124214.png" alt="" />
        <img className='h-9 m-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" />
      </div>
      <div className='col-span-9 relative'>
  <div className='w-2/3 mx-auto flex'>
    <input
      className='flex-1 h-[43px] py-2 pl-4 rounded-l-full border border-gray-400 text-md ' placeholder='Search'
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={()=>setIsFocus(true)}
      onBlur={()=>setIsFocus(false)}
    />
    <button className='h-[43px] px-5 py-2 rounded-r-full bg-gray-200 border border-gray-400'>🔍</button>
  </div>

  {suggestions.length > 0 && isFocus && (
    <div className='absolute w-2/3 left-1/2  transform -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-lg mt-2 z-10'>
      <ul>
        {suggestions.map((s) => (
          <li key={s} className='m-2 p-2 hover:bg-gray-200 rounded-lg'>{s}</li>
        ))}
      </ul>
    </div>
  )}
</div>

      <div className='flex col-span-2 justify-end align-middle'>
        <img className='h-9 m-2 ' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
      </div>
    </div>
  )
}

export default Head;
