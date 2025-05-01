import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import { useSelector } from 'react-redux';
import LiveChat from './LiveChat';
import Recommendations from './Recommendations';

const WatchVideo = () => {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar());
        window.scrollTo(0, 0);
    },[videoId]);

  return (
    <div className={(isMenuOpen)?'flex flex-col w-full col-span-10 h-screen overflow-y-scroll':'flex flex-col w-full col-span-12 h-screen overflow-y-scroll box-border'}>
    <div className='p-2 w-full flex'>
      <div className='w-2/3'>
      <iframe width="100%" height="550" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className=' border border-gray-200 w-1/3 px-4 mx-auto flex justify-center '>
      <LiveChat/>
      </div>
      
    </div>

    <div className='flex'>
    <CommentContainer />

    <div className='shadow-lg w-1/3'>
        <Recommendations />
    </div>

    </div>
    
    
    </div>
  )
}

export default WatchVideo;
