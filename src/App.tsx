
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/sign';
import SignUp from './pages/signUp';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Create from './pages/Create';
import BloggerProfile from './pages/BloggerProfile';

const App = () => {
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
      </Routes>
 
    </div>
  );
};

export default App;