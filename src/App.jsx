import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingtime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  const handleAddToReadingTime = time => {
    setReadingTime(readingtime + time);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleAddToReadingTime = {handleAddToReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
      </div>

    </>
  )
}

export default App
