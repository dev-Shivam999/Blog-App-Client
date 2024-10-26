import Dat from "./Dat";
import Img from "./Img";
import Save from "./Save";

import { Link } from "react-router-dom";
import Thug from './Link';


const FirstCard = ({ authorName, BlogerId, type, authorPic, content, publishedDate, title, avatar, id, Like }: BlogCard) => {
    return (
        <div  className="flex flex-wrap-reverse justify-between gap-3 sm:flex-nowrap">
            <div className="w-full sm:w-[60%]" >
                <Link to={`/blog/${id}`} className="  ">
                     <Img val={avatar} className="rounded-lg h-[50vw] sm:h-[50vh]  w-full    " />
                    <div className="my-2">
                        <Dat publishedDate={publishedDate} /> <span className="ms-2 uppercase">{authorName}</span>
                    </div>

                    <div className="w-full">
                        <h2 className="font-bold my-2 text-3xl">{title}</h2>
                        <p > {!type&&content?.slice(0, 200)}{content.length > 200 && "..."}</p>
                    </div>
                </Link>
                <div className='flex gap-4 mt-3 text-5xl'>
                    <div className='large-font text-center top-20'>

                    </div>
                    <Thug count={Like} id={id} />
                    <Save />

                </div>

            </div>
            <div className=" w-full sm:w-[25%] mt-10">
                <h1 className="font-thin text-3xl">   About The Author</h1>
             
               <div className="flex gap-2 mt-2 items-center">
                    <Img className=" rounded-full w-[10vh] h-[10vh]  sm:w-[5vw] sm:h-[5vw]" val={authorPic} /> <span>
                        {authorName?.toLocaleUpperCase()}
                    </span>
               </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla distinctio,!</p> 
                <Link to={`/BloggerProfile/${BlogerId}`} className="text-center bg-sky-400 text-white rounded-md w-full p-2  block">See Profile</Link>
            </div>
        </div>
    );
};

export default FirstCard;