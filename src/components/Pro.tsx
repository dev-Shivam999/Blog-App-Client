import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Follow from './Follow';
import BloggerInfo from './BlogerInfo';
import EditsProfile from './EditsProfile';
import BlogCard from './BlogCard';
import Fm from './Fm';
import { useSelector } from 'react-redux';
import { setLoading } from '../store/Bl';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Pro = ({show}:{show:true|false}) => {
    const { id } = useParams()
    const lo = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {

        axios.post(`http://localhost:3000/user/profile`, "none", {
            headers: {
                "Authorization": Number(localStorage.getItem('token')),
                "Lol": Number(id),
                "location": String(lo.pathname.split('/')[1])
            }
        }).then(
            res => {
                if (res.data.message == true) {
                    navigate('/profile')
                }
                dispatch(setLoading({ user: res.data.message.user, data: res.data.message.data, Loading: false }))




            }
        ).catch(err => console.log(err))

    }, [])
    const { Loading, user } = useSelector((state: InitialState2) => state.c)

  
    return (
        <div className='p-4'>
            <Link to={'/'} className='text-3xl font-bold flex justify-between items-center '>

                CRO.BLOGS
            </Link>
            {
                Loading ? <div>loading..</div> :
                    <>
                        <div className='p-3 flex flex-wrap sm:flex-nowrap gap-5'>
                            <img className='w-[30vw] h-[30vw] rounded-full object-cover object-top' src={`http://localhost:3000${user?.img}`} alt="" />
                            <div className='w-full'>
                                <h1 className='font-bold text-xl sm:text-5xl'>
                                    {user?.name}
                                </h1>
                                <div className='md:w-1/2 '>
                                    <div className='flex'>
                                        <Follow f='Follower' c={user?.Followers.length!} />
                                        <Follow f='Follow' c={user?.Following.length!} />
                                    </div>
                                    <BloggerInfo />
                                </div>

                              {
                                    show ? <EditsProfile />:<Fm />
                              }
                                <div>
                                    <div className=' mt-3 text-center md:mt-14 sm:mt-6 md:text-center text-3xl font-bold font-math'>{show?"Your":"Their"} Blogs</div>
                                </div>

                            </div>

                        </div><div className='w-full'>
                            {
                                user?.blogs && user?.blogs && user?.blogs.map(blog => <BlogCard authorName={user?.name} authorPic={user?.img}  type={String(lo)} avatar={blog.avtar} content={blog.content} publishedDate={blog.created} title={blog.title} id={blog.id} img={blog.avtar} key={blog.id} />)
                            }
                         
                        </div>
                    </>
            }
        </div>
    );
};

export default Pro;