import React from "react";
import { ThumbUpIcon, AnnotationIcon, ShareIcon } from '@heroicons/react/outline';
import { posted } from '../../data'; // Correct import
import { useSelector } from "react-redux";
function Posts() {
    const theme = useSelector((state) => state.theme);

  return (
    <>
      {posted.map(post => (
        <div key={post.id} className={`rounded-xl shadow-sm ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'} my-2 px-7 p-3`}>
          <div className='flex items-center'>
            <img src={post.author.photo} alt={post.author.name} className='rounded-full w-14 mb-4 mr-2' />
            <h2 className='text-sm font-semibold'>{post.author.name}</h2>
          </div>
          <div>
            <div className=''>
              <h3 className='text-sm'>{post.content}</h3>
              <img src={post.image} alt="post" className='rounded-xl mt-2' />
            </div>
            <div>
              <div className='flex items-center mt-2 '>
                <div className='flex items-center mx-1'>
                  <ThumbUpIcon className="h-5 w-5 mr-2 text-slate-500" />
                  <p className='text-xs'>{post.likes}</p>
                </div>
                <div className='flex items-center mx-1'>
                  <AnnotationIcon className="h-5 w-5 mr-2 text-slate-500" />
                  <p className='text-xs'>{post.comment}</p>
                </div>
                <div className='flex items-center mx-1'>
                  <ShareIcon className="h-5 w-5 mr-2 text-slate-500" />
                  <p className='text-xs'>{post.share}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;
