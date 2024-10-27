
import Auth from "../components/Auth";
import NowNav from "../components/Now-nav";


const Edits = () => {
    return (
        <div>
            <div className='p-3'> <NowNav/></div>


            <Auth type="edits" />
        </div>
    );
};

export default Edits;