import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {
    return (
        <div className='md: w-1/3'>
            <div className='bg-red-100 rounded-md m-6 p-4'>
                <h2>Reading Time: {readingtime}</h2>
            </div>
            <h1 className='text-3xl bg-red-50 rounded-md m-6 p-4'>Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                    key={idx} 
                    bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarks;