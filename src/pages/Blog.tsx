
import { useBlog } from '../hooks';
import { useParams } from 'react-router-dom';
import Full from '../components/Full';
import { memo } from 'react';

const Blog = memo(() => {
    const {id}=useParams()

    const {loading,blogs}=useBlog({id:id||""})
    
    return (
        <div>
            {
                loading?<div>loading..</div>:blogs&&<>
                    <Full Like={blogs.Likes} BlogerId={blogs.authore.id} title={blogs.title} id={blogs.authore.id} publishedDate={blogs.created} img={blogs.authore.img} content={blogs.content} authorName={blogs.authore.name} authorPic={blogs.avtar} avatar={blogs.avtar}/>
                </>
            }
            
        </div>
    );
});

export default Blog;