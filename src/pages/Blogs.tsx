import BlogCard from '../components/BlogCard';
import MidNav from '../components/MidNav';
import { useSelector } from 'react-redux';
import { setBlogs } from '../store/Bl';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FirstCard from '../components/FirstCard';
import { BookLoaderComponent } from '../components/Loading';
import Masonry from 'react-masonry-css';

const Blogs = () => {

    const dispatch = useDispatch();
    useEffect(() => {

        axios.post(`${import.meta.env.VITE_SOME_KEY}/user/All`, "none", {
            headers: {
                "authorization": localStorage.getItem('token'),
            }
        }).then(
            (res) => {
                dispatch(setBlogs({ blogs: res.data.blogs, loading: false, val: res.data.vali, su: res.data.success }))
            }
        ).catch(
            err => {
                dispatch(setBlogs({ blogs: [], loading: false, val: "", su: false }))
                console.log(err)
            }
        )

    }, [])
    const { loading, blogs, val, su } = useSelector((state: InitialState2) => state.b);

    const breakpointColumnsObj = {
        default: 4,
        1100: 4,
        992: 4,
        768: 2,
        576: 1
    };

    return (
        <div className='p-4'>
            <div className=' '>
                <MidNav val2={su} val={val} />
            </div>
            {
                loading ? <BookLoaderComponent /> : blogs && blogs.length > 0 ? <>
                    <h1 className="font-bold text-3xl">OUR POPULAR BLOG</h1>

                    <FirstCard Like={blogs[0]?.Likes!} authorName={blogs[0].authore.name} authorPic={blogs[0].authore.img} content={blogs[0].content} publishedDate={blogs[0].created} id={blogs[0].id} BlogerId={blogs[0].authore.id} title={blogs[0].title} avatar={blogs[0].avtar} />
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="   flex gap-1 my-masonry-grid"
                        columnClassName="my-masonry-grid_column" style={{ width: "100%" }}>
                        {
                            blogs.map((p, i) => i !== 0 && <BlogCard key={p.id} Like={p?.Likes!} authorName={p.authore.name} authorPic={p.authore.img} content={p.content} publishedDate={p.created} id={p.id} BlogerId={p.authore.id} title={p.title} avatar={p.avtar} />)
                        }
                    </Masonry>
                </> : <div>
                    {!su ? "server off try again" : "Add Blogs"}
                </div>
            }
        </div>
    );
};

export default Blogs;