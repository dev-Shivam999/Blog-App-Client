import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Img from "./Img";
import { memo } from "react";


const ChatNav = memo(({ user }: {
    user: {
        img: string
        name: string
    }
}) => {

    return (
        <div className="flex fixed w-full p-3 gap-3 items-center bg-zinc-800">
            <Link to={"/Blogs"}>
                <FaArrowLeft className="text-2xl" />
            </Link>
            <div className="w-[50px]">
                <Img className='h-[50px]  rounded-[50%] ' st='100' val={`${user.img}`} />

            </div>
            <h1>{user.name}</h1>
        </div>
    );
});

export default ChatNav;