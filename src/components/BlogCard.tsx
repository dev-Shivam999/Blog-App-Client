import { memo } from 'react';
import { Link } from 'react-router-dom';
import BlogDelete from './BlogDelete';
import Thug from './Link';
import Save from './Save';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BlogCard = memo(({ authorName,BlogerId, type, authorPic, content, publishedDate, title, avatar, id ,Like}: BlogCard) => {
    const date = new Date(publishedDate)
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

   
    


 
    return (
        <div style={{ fontFamily: "math" }} className='block p-4 border sm:w-2/3 md:w-3/4  w-11/12 mx-auto rounded-md m-2'>
            <div className=' flex  justify-between items-center text-gray-400 text-xl sm:text-2xl '>
                <Link to={`/BloggerProfile/${BlogerId}`} className='flex  gap-4'>
                    <img src={authorPic} className='rounded-2xl w-[8vw] object-cover object-top h-[8vw] sm:h-[5vw] sm:w-[5vw] md:w-[3vw] md:h-[3vw]' alt="" />
                    <span>  {authorName} .</span> <span>{Month[date.getMonth()].slice(0, 3) + " " + date.getDate() + " " + date.getFullYear()}</span>
                </Link> <div>
                    {
                        type == "/Profile" && <BlogDelete id={id} />
                    }
                </div>
            </div>
            <Link to={`/blog/${id}`} className='flex items-start mt-3  flex-wrap  sm:flex-nowrap'>
                <div className='sm:w-1/2 mx-auto '>
                    <h1 className='sm:text-3xl font-bold text-xl' >
                        {title}
                    </h1>
                    <p className='text-xs text-gray-400 sm:text-lg'>
                        {content?.slice(0, 450)}{content.length > 450 && "..."}
                    </p>
                </div>
                <div className='flex justify-center sm:w-[20%]  '>
                    <LazyLoadImage
                        alt={avatar}
                        effect="blur"
                        className={`w-screen  rounded-lg sm:w-[22.5vw] sm:h-[25vw]  md:w-[10vw] md:h-[10vw]`}
                        wrapperProps={{
                            // If you need to, you can tweak the effect transition using the wrapper style.
                            style: { transitionDelay: "1s" },
                        }}
                        src={avatar} />    
                </div>
            </Link>
            <div className='flex gap-4 mt-3 text-5xl'>
                <div className='large-font text-center top-20'>

                </div>
                <Thug count={Like} id={id}  />
              <Save />

            </div>
        </div>
    );
});

export default BlogCard;