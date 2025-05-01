import React from 'react';
import { CommentsData } from '../Utils/CommentsData';


const Comment = ({data})=>{

    const {name,comment,replies} = data;
    return (
        <div className='flex w-full bg-gray-200 rounded-lg p-2 my-2'>
            <img className='h-10 flex-shrink-0' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" />
            <div className='px-3 flex-1'>
                <p className='font-bold'>{name}</p>
                <p className='break-words text-sm'>{comment}</p>
            </div>
        </div>

    )
}

    const CommentsList = ({comments})=>{ 
       return comments.map((comment,index)=>{
            return (
                <div>
                    <Comment key={index} data={comment} />
                    <div className='ml-5 pl-5 border border-l-black'>
                    <CommentsList key={index} comments={comment.replies} />
                    </div>
                </div>
                
                
            )
    })
    };

const CommentContainer = () => {
  return (
    <div className='mt-5 p-2 w-2/3 '>
      <h1 className='font-bold text-2xl mb-5'>Comments: </h1>
      <CommentsList comments={CommentsData} />
        </div>
    )
    }

export default CommentContainer;
