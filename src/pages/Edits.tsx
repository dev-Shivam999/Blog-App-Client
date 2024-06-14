import { Link } from "react-router-dom";
import Auth from "../components/Auth";


const Edits = () => {
    return (
        <div>
            <Link to={'/'} className='text-3xl font-bold flex justify-between items-center '>

                CRO.BLOGS
            </Link>

            <Auth type="edits" />
        </div>
    );
};

export default Edits;