
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = blog =>{
    console.log('blog adding bro');
  }

  return (
    <>
     <Header></Header>

     <div className='md:flex md:justify-between max-w-7xl mx-auto'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
     <Bookmarks></Bookmarks>

     </div>
     
     
     
    </>
  )
}

export default App
