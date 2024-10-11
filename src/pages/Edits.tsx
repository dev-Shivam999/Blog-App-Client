
import Auth from "../components/Auth";
import Nav2 from "../components/Nav2";


const Edits = () => {
    return (
        <div>
            <div className='p-3 grid grid-cols-2 text-3xl font-bold'>  <Nav2 /></div>


            <Auth type="edits" />
        </div>
    );
};

export default Edits;