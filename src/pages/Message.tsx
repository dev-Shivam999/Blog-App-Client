import NowNav from "../components/Now-nav";
import Search from "../components/Search";
import MessageListSystem from "../components/MessageListSystem";


const Message = () => {
  

    return (
        <div  className="px-4">
            <NowNav />
            <Search/>

            <MessageListSystem/>
        </div>
    );
};

export default Message;