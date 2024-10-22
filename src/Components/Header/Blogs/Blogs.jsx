import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types'; // ES6


const Blogs = ({handleAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">blogs</h3>
            {
                blogs.map( blog => <Blog 
                    key={blog.id}
                    handleAddToBookmarks={handleAddToBookmarks}
                     blog={blog}></Blog>)

            }
        </div>
    );
};

Blogs.propTypes = {
    
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Blogs;