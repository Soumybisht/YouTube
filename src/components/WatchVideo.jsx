import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar());
    },[]);

    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));

  return (
    <div className='p-2 m-2 relative left-20'>
      <iframe width="853" height="480" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchVideo;
