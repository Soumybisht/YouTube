import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {


  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getData();
  },[]);

  const getData = async ()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json?.items);
  }



  return (
    <div className='flex flex-wrap mx-2 h-[520px] overflow-y-scroll'>
      {
        videos.map((item)=>{
          return <Link key={item.id} to={"watch?v="+item.id}> <VideoCard info={item} /></Link>
        })
      }
        
    </div>
  )
}

export default VideoContainer;
