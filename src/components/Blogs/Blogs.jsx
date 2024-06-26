import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmark, handleAddToReadingTime}) => {
    const[blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md: w-2/3">
            <h1>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog ={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleAddToReadingTime = {handleAddToReadingTime}
                    ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleAddToReadingTime :PropTypes.func
}
export default Blogs;