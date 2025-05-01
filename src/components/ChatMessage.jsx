import React from 'react';

const ChatMessage = ({name,message}) => {
  return (
    <div className='w-full p-2  flex items-center shadow-md my-1 rounded-lg'>
      <img className='h-7 m-1' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
      <div className='flex flex-col flex-wrap'>
      <span className='flex font-bold text-sm text-nowrap items-center pr-1'>{name}</span>
      <span className='text-sm'>{message}</span>
      </div>
      
    </div>
  )
}

export default ChatMessage;
