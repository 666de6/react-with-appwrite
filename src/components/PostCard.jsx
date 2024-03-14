/*
 * @Author: Ada J
 * @Date: 2024-03-02 12:03:06
 * @LastEditTime: 2024-03-02 12:20:44
 * @Description: 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/service';

function PostCard({
  $id,
  title,
  featureImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div
      className='w-full bg-gray-100 rounded-xl p-4'
      >
          <div
          className='w-full justify-center mb-4'
          >
              <img src={appwriteService.getFilePreview(featureImage)} alt={title}
              className='rounded-xl'
              />
          </div>
          <h2 className='text-xl font-bold'>{title}</h2>
      </div>
  </Link>
  );
}

export default PostCard;