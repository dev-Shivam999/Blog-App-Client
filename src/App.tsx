import { Route, Routes } from 'react-router-dom';
import { memo } from 'react';
import Sign from './pages/sign';
import SignUp from './pages/signUp';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Create from './pages/Create';
import BloggerProfile from './pages/BloggerProfile';
import Edits from './pages/Edits';
import Home from './pages/Home';
import Move from './components/Move';
import Chat from './pages/Chat';

const App = memo(() => {

  return (
    <div className='bg-black  min-h-screen text-white'>
      {
        window.innerWidth > 500 && <Move />
      }

      <Routes>
        <Route element={<Sign />} path='/sign' />
        <Route element={<Home />} path='/' />
        <Route element={<Blogs />} path='/Blogs' />
        <Route element={<SignUp />} path='/signUp' />
        <Route element={<Profile />} path='/Profile' />
        <Route element={<Blog />} path='/Blog/:id' />
        <Route element={<BloggerProfile />} path='/BloggerProfile/:id' />
        <Route element={<Create />} path='/create' />
        <Route element={<Create />} path='/pic' />
        <Route element={<Edits />} path='/Edits' />
        <Route element={<Chat />} path='/Chat/:id' />
      </Routes>

    </div>
  );
});

export default App; 