
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

const App = memo(() => {
  return (
    <div>

      <Routes>
        <Route element={<Sign/>} path='/sign'/>
        <Route element={<Blogs/>} path='/'/>
        <Route element={<SignUp/>} path='/signUp'/>
        <Route element={<Profile/>} path='/Profile'/>
        <Route element={<Blog/>} path='/Blog/:id'/>
        <Route element={<BloggerProfile/>} path='/BloggerProfile/:id'/>
        <Route element={<Create/>} path='/create'/>
        <Route element={<Create/>} path='/pic'/>
        <Route element={<Edits/>} path='/Edits'/>
      </Routes>
 
    </div>
  );
});

export default App;