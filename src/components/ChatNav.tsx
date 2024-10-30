import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Img from "./Img";


const ChatNav = () => {
    return (
        <div className="flex p-3 gap-3 items-center bg-zinc-800">
            <Link to={"/Blogs"}>
                <FaArrowLeft className="text-2xl" />
            </Link>
            <div className="w-[50px]">
                <Img className='w-full  rounded-lg ' st='100' val={"/FIRST.png"} />

            </div>
            <h1>BLOGGER NAME LIKE</h1>
        </div>
    );
};

export default ChatNav;