import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
    // console.log(blog);
    const {cover,author,author_img,title,reading_time,posted_date,hashtag} = blog
    return (
        <div>
            <img className='w-96 rounded-md' src={cover} alt={`cover picture of the title of ${title}`} />

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
                </div>

            </div>



            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx} className='text-gray-400'><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;