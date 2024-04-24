import { MdBookmarkBorder } from "react-icons/md";
import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog, handleAddToBookmark, handleAddToReadingTime }) => {
    const { title, cover_photo, author_name, author_pic, reading_time, posted_date, hashtags } = blog;
    console.log(blog)
    return (
        <div>
            <img className='h-96 w-full my-4 rounded-md' src={cover_photo} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-16 h-16 rounded-full' src={author_pic} alt="" />
                    <div className='mx-4'>
                        <h2 className='text-2xl font-medium '>{author_name}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center justify-evenly">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}>
                        <span className="mx-2 text-red-900"><MdBookmarkBorder /></span>
                    </button>

                </div>
            </div>
            <h2 className='text-4xl my-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleAddToReadingTime(reading_time)} className="border-none underline text-blue-900"> Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleAddToReadingTime: PropTypes.func
}
export default Blog;