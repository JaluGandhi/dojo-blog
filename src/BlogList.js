import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import useFetch from "./useFetch";

const BlogList = ({ blogs, title, }) => {

    // const blogs = props.blogs;
    // const title = props.title;
    const history = useHistory();

    // const deleteBlog = (id) => {
    //     fetch(`http://localhost:8000/blogs/${id}`, {
    //         method: 'DELETE',
    //     }).then(() => {
    //         const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    //     })
    // }

    return (
        <div className="blog-list">

            <h2>{title}</h2>

            {blogs.map((blog) => (

                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Writtern by {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => { deleteBlog(blog.id); }}>Delete</button> */}
                </div>

            ))}

        </div>
    );
}

export default BlogList;