import React, { useState,useEffect } from 'react';
import { YOUTUBE_API } from '../Utils/constants';
import RecommendVideoCard from './RecommendVideoCard';
import { Link } from 'react-router-dom';




const Recommendations = () => {

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
    <div className='mt-5 p-2 w-full '>
        <h1 className='font-bold text-2xl mb-5'>Recommendations: </h1>
        <div className='flex flex-wrap mx-2 overflow-y-scroll'>
      {
        videos.map((item)=>{
          return <Link key={item.id} to={"?v="+item.id}> <RecommendVideoCard info={item} /></Link>
        })
      }
        
    </div> 
    </div>
  )
}

export default Recommendations;
