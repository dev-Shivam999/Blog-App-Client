
import Nav2 from "./Nav2";

const Up = () => {
  return (
    <div className="relative h-[80vh] w-full  ">
      <div className=" tt  absolute top-0 left-0   h-full w-full "></div>
      <div
        className="absolute top-0 grid grid-cols-2 left-0 px-16   mix-blend-hard-light  h-full w-full text-3xl"
        style={{ backgroundColor: "rgb(253 247 147 / 47%)" }}>
             <Nav2/>
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
