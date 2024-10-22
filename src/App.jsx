
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Bookmarks from './Components/Header/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmarks = blog =>{
    console.log('blog adding bro');
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleAddTimeToBookmarks = time =>{
    setReadingTime(readingTime + time )
  }

  return (
    <>
     <Header></Header>

     <div className='md:flex md:justify-between max-w-7xl mx-auto'>
     <Blogs handleAddToBookmarks={handleAddToBookmarks}
      handleAddTimeToBookmarks={handleAddTimeToBookmarks}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

     </div>
     
     
     
    </>
  )
}

export default App
