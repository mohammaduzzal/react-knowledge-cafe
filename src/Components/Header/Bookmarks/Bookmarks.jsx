import PropTypes from 'prop-types'; // ES6
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-gray-300 ml-3 mt-2 pt-4">
            <h2 className="text-3xl text-center">bookmarked Blogs : {bookmarks.length}</h2>
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
        </div>
    );
};
Bookmarks.propTypes = {
   bookmarks:PropTypes.array.isRequired
}

export default Bookmarks;