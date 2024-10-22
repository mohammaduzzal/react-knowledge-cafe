import PropTypes from 'prop-types'; // ES6
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog,handleAddToBookmarks,handleAddTimeToBookmarks }) => {
    // console.log(blog);
    const {cover,author,author_img,title,reading_time,posted_date,hashtag} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-md mb-8' src={cover} alt={`cover picture of the title of ${title}`} />

            <div className='flex justify-between'>
                <div className='flex py-2'>
                    <img className='w-14' src={author_img} alt={`profile picture of the title of ${title}`} />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmarks} className='ml-2 '><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>

            </div>



            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx} className='text-green-500'><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleAddTimeToBookmarks(reading_time)} className='text-green-700 border-b-2 border-green-700'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleAddTimeToBookmarks: PropTypes.func.isRequired
}

export default Blog;