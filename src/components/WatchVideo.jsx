import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import { useSelector } from 'react-redux';

const WatchVideo = () => {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar());
    },[]);

    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));

  return (
    <div className={(isMenuOpen)?'flex flex-col w-full col-span-10 h-screen overflow-y-scroll':'flex flex-col w-full col-span-12 h-screen overflow-y-scroll'}>
    <div className='p-2 m-2 w-full max-w-[900px]'>
      <iframe width="100%" height="480" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <CommentContainer />
    </div>
  )
}

export default WatchVideo;
