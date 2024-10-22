
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
     <Header></Header>

     <div className='md:flex md:justify-between'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>

     </div>
     
     
     
    </>
  )
}

export default App
