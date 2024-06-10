import  { memo } from 'react';
import { Link } from 'react-router-dom';
import BlogDelete from './BlogDelete';
import { FaHeart, FaLink, FaRegHeart } from 'react-icons/fa6';
import { FaRegSave, FaSave } from 'react-icons/fa';
import { MdSave } from 'react-icons/md';
import { CiSaveDown2 } from 'react-icons/ci';

const BlogCard = memo(({ authorName,type, authorPic, content, publishedDate, title, avatar,id }: BlogCard) => {
    const date = new Date(publishedDate)
const Month=["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"]
    
   
    
    return (
        <div style={{ fontFamily: "math" }}  className='block p-4 border sm:w-2/3 md:w-3/4  w-11/12 mx-auto rounded-md m-2'>
            <div className=' flex  justify-between items-center text-gray-400 text-xl sm:text-2xl '>
                <div className='flex  gap-4'>
                    <img src={`http://localhost:3000${authorPic}`} className='rounded-2xl w-[8vw] object-cover object-top h-[8vw] sm:h-[5vw] sm:w-[5vw] md:w-[3vw] md:h-[3vw]' alt="" />
                    <span>  {authorName} .</span> <span>{Month[date.getMonth()].slice(0, 3) + " " + date.getDate() + " " + date.getFullYear()}</span>
               </div> <div>
                   {
                        type?.split('/')[1] =="BloggerProfile" && <BlogDelete id={id} />
                   }
                </div>
            </div>
            <Link to={`/blog/${id}`} className='flex items-start mt-3  flex-wrap  sm:flex-nowrap'>
                <div className='sm:w-1/2 mx-auto '>
                    <h1 className='sm:text-3xl font-bold text-xl' >
                        {title}
                    </h1>
                    <p className='text-xs text-gray-400 sm:text-lg'>
                        {content?.slice(0, 450)}{content.length>450&&"..."}
                    </p>
                </div>
                <div className='flex justify-center sm:w-[20%]  '>
                    <img src={`http://localhost:3000${avatar}`} className={`w-screen  rounded-lg sm:w-[22.5vw] sm:h-[25vw]  md:w-[10vw] md:h-[10vw]`} alt="" />
                </div>
            </Link>
                <div className='flex gap-4 mt-3 text-5xl'>
                   <FaRegHeart  className=' cursor-pointer'/>
                    <CiSaveDown2 className='cursor-pointer'/>
                    
                </div>
        </div>
    );
});

export default BlogCard;