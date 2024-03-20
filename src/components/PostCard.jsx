/*
 * @Author: Ada J
 * @Date: 2024-03-02 12:03:06
 * @LastEditTime: 2024-03-02 12:20:44
 * @Description: 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/blogService';

function PostCard({
  $id,
  title,
  featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div
      className='w-full h-full bg-gray-100 rounded-xl p-4 flex flex-col items-center justify-end'
      >
        <div className='mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-xl'
            />
        </div>
        <h2 className='text-gray-500 text-xl font-bold'>{title}</h2>
      </div>
  </Link>
  );
}

export default PostCard;