import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import appwriteService from '../appwrite/blogService';
import { useNavigate, useParams, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Button } from '@/components';


function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);
  console.log(userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect( () => {
    async function getPost(){
      console.log({slug})
      const post = await appwriteService.getPost(slug);
      post ? setPost(post) : navigate('/');
    }
    getPost();
  }, [slug, navigate])
  
  const deletePost = () => {
    const status = appwriteService.deletePost(post.$id);
    status ? appwriteService.deleteFile(post.featuredImage) : navigate('/');
  }

  return post ? (
    <div className="py-8">
      <Container>
        <h1 className="text-6xl font-bold">{post.title}</h1>
        <div className='w-full flex justify-center mb-4 relative rounded-xl p-2'>
          <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />
        </div>
        <div className="w-full mb-6">
          <div className="text-left text-lg">
            {parse(post.content)}
          </div>
        </div>
        { isAuthor && (
          <div className="absolute-right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-green-500" className="mr-3">Edit</Button>
            </Link>
            <Button bgColor="bg-red-500" 
            onClick={deletePost}
            >Delete</Button>
          </div>
        )}
      </Container>
    </div>
  ) : null
}

export default Post;