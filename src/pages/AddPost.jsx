import React from 'react';
import PostForm from '../components/post-form/PostForm';
import { Container } from '../components';

function AddPost() {
  return (
    <div className='py-6'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost