import React from 'react'

const VideoCard = ({info}) => {
    if (!info || !info.snippet) return null; 

    const {snippet,statistics} = info;
    const {title,thumbnails,channelTitle} = snippet; 
    
  return (
    <div className=' shadow-lg p-3 m-2  rounded-lg'>
      <img className='rounded-lg w-60' src={thumbnails?.medium?.url} alt="video" />
      <ul className='pt-2'>
        <li className='max-w-60 font-semibold pb-1'>{title}</li>
        <li className='text-sm text-gray-500 font-semibold'>{channelTitle}</li>
        <li className='text-sm text-gray-500 font-semibold'>{statistics?.viewCount} views</li>
        
      </ul>

    </div>
  )
}

export default VideoCard;
