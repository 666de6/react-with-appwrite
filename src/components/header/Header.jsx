import React from 'react';
import Logo from '../Logo';
import { Container, Logout } from '@/components';
import { useSelector } from "react-redux";
import {Link, useNavigate, useLocation} from 'react-router-dom';

function Header() {
  const authStatus = useSelector(state => state.auth.status) || JSON.parse(sessionStorage.getItem('logedIn')) || false;;
  // const navigate = useNavigate();
  const navItems = [
    {
        name: "Home",
        slug: "/",
        active: true
    },
    {
        name: "Login",
        slug: "/login",
        active: !authStatus
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus
    }
  ]
  const {pathname} = useLocation();
  console.log({pathname})
  return (
    <header>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>          
          <ul className='flex ml-auto'>
            {
              navItems.map(navItem => navItem.active ? (
                <li
                  key={navItem.slug}
                  className={`inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${pathname === navItem.slug ? 'text-white' : 'text-yellow-500'}`}
                  >
                  <Link to={navItem.slug}>
                    {navItem.name}
                  </Link>
                </li>        
              ) : null)
            }
            {authStatus && (
              <li>
                <Logout/>
              </li>
            ) }
          </ul>

        
        </nav> 
      </Container>
    </header>
  );
}

export default Header;