
import { useBlog } from '../hooks';
import { useParams } from 'react-router-dom';
import Full from '../components/Full';

const Blog = () => {
    const {id}=useParams()

    const {loading,blogs}=useBlog({id:id||""})
    
    return (
        <div>
            {
                loading?<div>loading..</div>:blogs&&<>
                    <Full Like={blogs.Link} title={blogs.title} id={blogs.authore.id} publishedDate={blogs.created} img={blogs.authore.img} content={blogs.content} authorName={blogs.authore.name} authorPic={blogs.avtar} avatar={blogs.avtar}/>
                </>
            }
            
        </div>
    );
};

export default Blog;