
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title} = bookmark
    return (
        <div className='bg-slate-200 p-3 m-3 rounded-md'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
    
};

export default Bookmark;