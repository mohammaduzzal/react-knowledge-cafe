
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
  const handleAddTimeToBookmarks = (time,id) =>{
    setReadingTime(readingTime + time )

    // remove the read blog from bookmark
    console.log('deleting blog',id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
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
