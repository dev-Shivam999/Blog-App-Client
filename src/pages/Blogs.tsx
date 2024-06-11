
import BlogCard from '../components/BlogCard';
import MidNav from '../components/MidNav';
import { useSelector } from 'react-redux';
import { setBlogs } from '../store/Bl';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Blogs = () => {
      const dispatch = useDispatch();
    
    useEffect(() => {

        axios.post(`http://localhost:3000/user/All`, "none", {
            headers: {
                "authorization": localStorage.getItem('token'),
            }
        }).then(
            (res) => {


                dispatch(setBlogs({ blogs: res.data.blogs, loading: false, val: res.data.vali }))

            }
        ).catch(err => console.log(err))

    }, [])
    const { loading, blogs, val } = useSelector((state: InitialState2) => state.b);


    
    return (
        <div className='p-4'>
            <div className='text-3xl font-bold flex justify-between sm:items-center '>
                <div>
                    CRO.BLOGS
                </div>
                {
                    
                  <MidNav val={val}/>
                }

            </div>
            {
                loading ? <div>loading..</div> : blogs && blogs.length > 0 && blogs.map(p => <BlogCard key={p.id} Like={p.Link} authorName={p.authore.name} authorPic={p.authore.img} content={p.content} publishedDate={p.created} id={p.id} title={p.title} avatar={p.avtar} />
                )
            }
        </div>

    );
};

export default Blogs;