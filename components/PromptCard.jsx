'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
 const { data: session } = useSession();
 console.log(post);
 return (
  <div className="prompt_card">
   <div className="">
    <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
     <Image src={post.creator.image} width={30} height={30} className=" rounded-full object-contain" />
     <div className="flex flex-col">
      <h3 className=" font-satoshi text-gray-900 font-semibold">{post.creator.username}</h3>
      <p className=" font-inter text-gray-500 text-sm">{post.creator.email}</p>
      </div>
         <div className='copy_btn' onClick={handleClick}>
           <Image />
      </div>
    </div> 
   </div>
  </div>
 );
};
export default PromptCard;
