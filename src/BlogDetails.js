import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    
    
    const deleteBlog = () =>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written by {blog.author}</h4>
                    <div>{blog.body}</div>
                    <button onClick={deleteBlog}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;