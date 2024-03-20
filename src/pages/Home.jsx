import React, {useState, useEffect} from 'react';
import appwriteService from "../appwrite/blogService";
import {Container} from '../components';
import PostCard from "../components/PostCard";
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([])
  const userInfo = useSelector(state => state.auth.userData);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!JSON.parse(sessionStorage.getItem('logedIn'))) navigate('/login');
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, []);
  
  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
      <Container>
        <div className="w-full my-2">
          <Link to='/add-post'>
            There is no active post?
            <h1>Go to create a new post</h1>
          </Link>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home