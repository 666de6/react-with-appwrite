/*
 * @Author: Ada J
 * @Date: 2024-02-27 10:59:42
 * @LastEditTime: 2024-03-02 11:57:13
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import AuthProtect from './components/AuthProtect.jsx'
import store from './store/store.js';

import Home from './pages/Home.jsx';
import AddPost from './pages/AddPost.jsx';
import AllPosts from './pages/AllPosts.jsx';
import EditPost from './pages/EditPost.jsx';
import Login from './pages/Login.jsx';
import Post from './pages/Post.jsx';
import Signup from './pages/Signup.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <AuthProtect authentication={false}>
            <Login/>
          </AuthProtect>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthProtect authentication={false}>
            <Signup/>
          </AuthProtect>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthProtect authentication>
            <AllPosts/>
          </AuthProtect>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthProtect authentication>
            <EditPost/>
          </AuthProtect>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthProtect authentication>
            <AddPost/>
          </AuthProtect>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <AuthProtect>
            <Post/>
          </AuthProtect>
        )
      }
       
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
