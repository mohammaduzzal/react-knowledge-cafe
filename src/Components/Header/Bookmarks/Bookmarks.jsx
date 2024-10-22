import PropTypes from 'prop-types'; // ES6
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-gray-300 ml-3 mt-2 pt-4">
          <div>
          <h3 className='text-xl py-2 text-center bg-slate-200'>Reading Time : {readingTime}</h3>
          </div>
            <h2 className="text-3xl text-center">bookmarked Blogs : {bookmarks.length}</h2>
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
        </div>
    );
};
Bookmarks.propTypes = {
   bookmarks:PropTypes.array.isRequired,
   readingTime:PropTypes.number.isRequired
}

export default Bookmarks;