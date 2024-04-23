import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h1 className='text-1xl p-4 m-4 bg-slate-50 rounded-md'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;