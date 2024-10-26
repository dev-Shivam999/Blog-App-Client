import { memo } from 'react';
import { Link } from 'react-router-dom';
import BlogDelete from './BlogDelete';
import Thug from './Link';
import Save from './Save';
import Img from './Img';
import Dat from './Dat';

const BlogCard = memo(({ authorName, BlogerId, type, authorPic, content, publishedDate, title, avatar, id, Like }: BlogCard) => {






    return (
        <div style={{ fontFamily: "math" }} className='block m-2 border-2 rounded-sm p-3 border-white'>
            <div className=' flex  justify-between items-center text-gray-400 text-xl sm:text-2xl '>
                <Link to={`/BloggerProfile/${BlogerId}`} className='flex  gap-4'>

                    <span>  {authorName} .</span>
                    <Dat publishedDate={publishedDate} />
                </Link> <div>
                    {
                        type == "/Profile" && <BlogDelete id={id} />
                    }
                </div>

            </div>
            <Link to={`/blog/${id}`} className={`flex items-start mt-3 ${type == "/Profile" ? "flex-wrap" : "flex-nowrap"}  `}>
                <div className=' mx-auto w-full '>
                    <h1 className='sm:text-2xl font-bold text-xl' >
                        {authorPic == "" ? title : title}
                    </h1>
                    {
                        type !== "/Profile" && <div className='flex justify-center  w-full h-[50vw] '>
                            <Img className='w-full  h-full rounded-lg ' st='100' val={avatar} />

                        </div>
                    }
                    <p className='text-xs text-gray-400 sm:text-lg'>
                        {type == "/Profile" ? content?.slice(0, 250) : content?.slice(0, 150)}
                    </p>
                </div>
                {
                    type == "/Profile" && <div className='flex justify-center  w-full h-[60vh] '>
                        <Img className='w-full  h-full rounded-lg ' st='100' val={avatar} />

                    </div>
                }
            </Link>
            <div className='flex gap-4 mt-3 text-5xl'>
                <div className='large-font text-center top-20'>

                </div>
                <Thug count={Like} id={id} />
                <Save />

            </div>
        </div>
    );
});

export default BlogCard;