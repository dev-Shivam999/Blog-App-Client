import  { memo, useEffect } from 'react';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import Follow from './Follow';
import BloggerInfo from './BlogerInfo';
import EditsProfile from './EditsProfile';
import BlogCard from './BlogCard';
import Fm from './Fm';
import { useSelector } from 'react-redux';
import { setLoading } from '../store/Bl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Img from './Img';
import Nav2 from './Nav2';
import { BookLoaderComponent } from './Loading';

const Pro = memo(({show}:{show:true|false}) => {
    const { id } = useParams()
    const lo = useLocation()
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {

        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/profile`, "none", {
            headers: {
                "Authorization": Number(localStorage.getItem('token')),
                "Lol": Number(id),
                "location": String(lo.pathname.split('/')[1])
            }
        }).then(
            res => {
               if (res.data.success) {
                   if (res.data.message == true) {
                       navigate('/Profile')
                   }
                   
                   
                   dispatch(setLoading({ user: res.data.message.user, data: res.data.message.data, Loading: false }))

               }else{
                   if (res.data.message =='Not found') {
                       toast.error(res.data.message, {
                           style: {
                               border: '5px solid red',
                               borderRadius: 5
                           }
                       })
                       navigate('/Blogs')
                }
               else{
                       toast.error(res.data.message, {
                           style: {
                               border: '5px solid red',
                               borderRadius: 5
                           }
                       })
                       navigate('/signup')
               }
               }



            }
        ).catch(err => console.log(err))

    }, [])
    const { Loading, user } = useSelector((state: InitialState2) => state.c)

  




  
    return (
        <div className='p-4'>
            <div className='text-3xl font-bold grid  px-3  grid-cols-2 '>

                <Nav2/>
            </div>
            {
                Loading ? <BookLoaderComponent/> :
                    <>
                        <div className='p-3  '>
                            
                            <div className='relative flex justify-between ps-10 items-center gap-6'>
                                <div className='absolute bg-pink-300 h-3/4 w-full top-0 left-0  rounded-lg'>

                                </div>
                                <h1 className='font-bold text-2xl sm:text-5xl uppercase mix-blend-difference mt-[14vw] '>
                                    {user?.name}
                                </h1>
                                <Img className='w-[30vw]     h-[30vw] rounded-lg object-cover object-top' val={user?.img} />
                               </div>
                      
                            
                            <div className='my-5 w-full'>
                                
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
                               

                            </div>

                            

                        </div>


                        <div className='w-full'>
                            <div>
                                <div className=' mt-3 text-center md:mt-14 sm:mt-6 md:text-center text-3xl font-bold font-math'>{show ? "Your" : "Their"} Blogs</div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 '>

                            {
                                user?.blogs && user?.blogs && user?.blogs.map(blog => <BlogCard BlogerId={String(user.id)} authorName={user?.name} Like={blog.Likes}  authorPic={user?.img}  type={String(lo.pathname)} avatar={blog.avtar} content={blog.content} publishedDate={blog.created} title={blog.title} id={blog.id} img={blog.avtar} key={blog.id} />)
                            }
                            </div>
                         
                        </div>
                    </>
            }
        </div>
    );
});

export default Pro;