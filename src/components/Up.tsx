

import NowNav from "./Now-nav";


const Up = () => {
  return (
    <div className="relative h-[80vh] w-full  ">
      <div className={` tt   absolute top-0 left-0   h-full w-full `}></div>
      <div className="absolute top-0    left-0 px-[4vw]   mix-blend-hard-light  h-full w-full text-3xl"
        style={{ backgroundColor: "rgb(253 247 147 / 47%)" }}>
          
       <NowNav/>
          
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
