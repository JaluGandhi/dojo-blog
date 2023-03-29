import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
 



const Home = () => {
    
    var arrInitObjs = [{id: 1, title: 'My new website',body: 'Hello there....', author: 'Jay'},
                       {id: 2, title: 'Welcome party!',body: 'Hello there....', author: 'Gandhi'},
                       {id: 3, title: 'Web dev ops tips',body: 'Hello there....', author: 'Jay'}];
    
     const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    
    // const [name, setName] = useState('Jay');

    // const handleClick = (newName) => {
    
    //     setName(newName);
    // }

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        //setblogs(newBlogs);
    }

    

    return (
        <div className="home">
            <h1>Welcome to the Experts blog</h1> <br></br> <br></br>
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
            
        </div>
    );
}

export default Home;