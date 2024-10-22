import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 py-3 mx-4'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="profile picture" />
        </header>
    );
};

export default Header;