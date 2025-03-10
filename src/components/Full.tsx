
import { memo } from 'react';
import { Link } from 'react-router-dom';
import Img from './Img';
import Dat from './Dat';
import NowNav from './Now-nav';

const Full = memo(({ title, content, authorName, img, avatar, BlogerId, id, publishedDate, }: BlogCard) => {


    return (

        <div className='relative h-screen w-full px-3  border-[15px] border-black   ' key={BlogerId}>

            <div className='h-full absolute top-0 rounded-xl  w-full left-0' style={{ backgroundImage: `url(${avatar})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.8", backgroundBlendMode: "color-burn" }}>



            </div>
            <div className='mix-blend-hard-light h-full ' >
             <NowNav/>

                <div className='col-span-3 flex gap-3   rounded-lg'>
                    <Link to={`/BloggerProfile/${id}`}> Author</Link>
                    <Link to={`/BloggerProfile/${id}`} className='text-2xl font-bold sm:text-5xl flex gap-2'>

                        <div>  {authorName.length > 10 ? authorName.slice(0, 10) + ".." : authorName}</div>
                    </Link>
                </div>
                <div className='flex h-[80vh] md:h-[75vh] relative  overflow-scroll  w-11/12 sm:w-3/4 mx-auto 
                justify-center  text-black glass ' key={img}>
                  

                    <div className=' w-full  p-5 rounded-lg '>
                        <h1 className='text-xl font-bold sm:text-3xl '>
                            {title}
                        </h1><h2>
                            Posted on <Dat publishedDate={publishedDate} />
                        </h2>
                        <div className='h-[30vh] sm:h-[50vh]'>
                            <Img className='rounded-lg w-full h-full lg:w-3/4 mx-auto' val={avatar} />
                        </div>
                        <p className=' sm:text-lg pb-3  text-xs text-zinc-950 font-mono'>
                            {content}
                        </p>
                      
                    </div>

                </div>
            </div>
        </div>
    );
});

export default Full;