import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
    // console.log(blog);
    const {cover,author,author_img,title} = blog
    return (
        <div>
            <img className='w-96 rounded-md' src={cover} alt={`cover picture of the title of ${title}`} />
            <h2 className='text-4xl'>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired
}

export default Blog;