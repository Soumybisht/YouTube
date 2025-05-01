import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage} from '../Utils/chatSlice';
import ChatMessage from './ChatMessage';
import { generateNames, generateRandomWords } from '../Utils/helper';

const LiveChat = () => {

    const chatMessages = useSelector(store=>store.chat.messages);
    
    const dispatch = useDispatch();

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const [sendChat,setSendChat] = useState("");
    const [likeBtn,setLikeBtn] = useState(true);
    const likeChat = ()=>{
       setLikeBtn((prev)=>!prev)
    }

    useEffect(()=>{
        const int = setInterval(()=>{
            dispatch(addChatMessage({
                name : generateNames(),
                message : generateRandomWords(randomNumber),
            }))
        },1000);

        return ()=>{
            clearInterval(int);
        }
    },[])

  return (
    <div className='flex flex-col w-full'>
    <div className='w-full border border-black h-[520px] rounded-t-lg p-2 overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessages.map((chat,i)=>{
                return <ChatMessage key={i} name={chat.name} message={chat.message} />
            })
        }
      
    </div>
    <form className='w-full sticky h-14 rounded-b-lg border border-black border-t-0 flex justify-evenly items-center' onSubmit={(e)=>{
        e.preventDefault();
        if(sendChat.length>0){
            dispatch(addChatMessage({
                name:"Soumy Bisht",
                message: sendChat,
            }))
    
            setSendChat("");
        }
        else{
            return;
        }
    }}>
        <input className=' w-2/3 bg-slate-200 rounded-full h-9 p-2 ' placeholder='Chat' type="text" value={sendChat} onChange={(e)=>setSendChat(e.target.value)} />
        <button type='submit' className='rounded-full bg-slate-700 text-white text-xs text-center p-3'>
            Send
        </button>
        <button
          className={`rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 p-2.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
            likeBtn ? "text-white" : 'text-red-500'
          }`}
          onClick={likeChat}
          type='button'
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        </button>
    </form>
    </div>
  )
}

export default LiveChat;
