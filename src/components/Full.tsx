
import { Link } from 'react-router-dom';

const Full = ({ title, content, authorName, img, avatar, id, publishedDate, }: BlogCard) => {
    const date = new Date(publishedDate)
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (

        <div className='relative min-h-screen w-full ps-3 '>
            <div className='h-full absolute top-0  w-full left-0' style={{ backgroundImage: `url(http://localhost:3000${avatar})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.8", backgroundBlendMode: "color-burn" }}>



            </div>
            <div className='mix-blend-hard-light' >
                <Link to={'/'} className='text-3xl font-bold '>
                    CRO.BLOGS


                </Link>
                <div className='grid grid-cols-1 sm:grid-cols-12'>
                    <div className='col-span-3   p-5 rounded-lg'>
                        <Link to={`/BloggerProfile/${id}`}> Author</Link>
                        <Link to={`/BloggerProfile/${id}`}  className='text-2xl font-bold sm:text-5xl flex gap-2'>
                            <img src={`http://localhost:3000${img}`} className='w-[10vw] h-[10vw] rounded-full object-cover object-top' alt="" />  <div>  {authorName.length>10?authorName.slice(0,10)+"..":authorName}</div>
                        </Link>
                    </div>
                    <div className='col-span-9  p-5 rounded-lg '>
                        <h1 className='text-xl font-bold sm:text-3xl'>
                            {title}
                        </h1><h2>
                            Posted on {Month[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear()}
                        </h2>
                        <p className=' sm:text-lg text-xs text-zinc-950 font-mono'>
                            {content}
                        </p>
                        <div>
                            <img src={`http://localhost:3000${avatar}`} alt="" />
                        </div>
                    </div>
                 
                </div>
            </div>
      </div>
    );
};

export default Full;