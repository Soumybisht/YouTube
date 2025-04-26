import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'


const MainContainer = () => {
  
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);


  return (
    <div className={(isMenuOpen)?'col-span-10 m-2 p-2 shadow-lg border border-slate-200':'col-span-12 m-2 p-2 shadow-lg border border-slate-200'}>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer;
