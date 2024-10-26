
import { FaEquals, FaX } from "react-icons/fa6";
import Nav2 from "./Nav2";
import { useState } from "react";
import { Link } from "react-router-dom";


const Up = () => {
  const [show, setShow] = useState<boolean>(true)
  return (
    <div className="relative h-[80vh] w-full  ">
      <div className=" tt  absolute top-0 left-0   h-full w-full "></div>
      <div className="absolute top-0    left-0 px-[4vw]   mix-blend-hard-light  h-full w-full text-3xl"
        style={{ backgroundColor: "rgb(253 247 147 / 47%)" }}>
          
        <div className="flex  items-center justify-between">    <Nav2 />
          <div>

            {
              window.innerWidth > 550 ? <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw]  font-semibold text-end' >BLOGS</h1></Link>
:
            show ?
              <FaEquals onClick={() => setShow(false)} />
              :
              <FaX onClick={() => setShow(true)} />

            }

          </div>
        </div>
        <  >
          {
            !show &&
            <ul className=''>
             
              <li>
                <Link to={'/Blogs'}><h1 className='text-[4vw] sm:text-[2vw]  font-semibold text-end' >BLOGS</h1></Link>

              </li>
           

            
            </ul>

          }
        </>
          
        <div className="w-full h-3/4  flex  items-center">
          <h2 className=" w-[500px] font-bold" style={{ wordSpacing: "10px" }}>
            How to Write Creative Content About Your Thought And Imagination
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Up;
