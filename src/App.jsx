import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BooksList from './components/BooksList'

const App = () => {

  const [booksList, setBooksList] = useState([
    {
      id: crypto.randomUUID(),
      book: "The Shards",
      author: "Brett Easton Ellis",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione esse quas repellat, harum autem, cum officia odio fugit rerum maiores temporibus saepe similique, sunt est perspiciatis nihil corporis facere quibusdam!",
      imgURL: "https://assets.vogue.com/photos/63bc5f1198262bb815e763bc/3:4/w_1280,c_limit/slide_3.jpg"
    },
    {
      id: crypto.randomUUID(),
      book: "Sam",
      author: "Allegra Goodman",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione esse quas repellat, harum autem, cum officia odio fugit rerum maiores temporibus saepe similique, sunt est perspiciatis nihil corporis facere quibusdam!",
      imgURL: "https://assets.vogue.com/photos/63bc5fe6580f6450d0935462/3:4/w_1280,c_limit/slide_8.jpg"
    },
    {
      id: crypto.randomUUID(),
      book: "The Survivalists",
      author: "Kashana Cauley",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione esse quas repellat, harum autem, cum officia odio fugit rerum maiores temporibus saepe similique, sunt est perspiciatis nihil corporis facere quibusdam!",
      imgURL: "https://assets.vogue.com/photos/63bc6063ad6ff0d0060bc09d/3:4/w_1280,c_limit/slide_2.jpg"
    },
    {
      id: crypto.randomUUID(),
      book: "Big Swiss",
      author: "Jen Beagin",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione esse quas repellat, harum autem, cum officia odio fugit rerum maiores temporibus saepe similique, sunt est perspiciatis nihil corporis facere quibusdam!",
      imgURL: "https://assets.vogue.com/photos/63bc60ee6612476c0db2172a/3:4/w_1280,c_limit/slide_13.jpg"
    },
    {
      id: crypto.randomUUID(),
      book: "Spare",
      author: "Prince Harry",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione esse quas repellat, harum autem, cum officia odio fugit rerum maiores temporibus saepe similique, sunt est perspiciatis nihil corporis facere quibusdam!",
      imgURL: "https://assets.vogue.com/photos/63bc741972792f00d9150f4f/3:4/w_1280,c_limit/slide_2.jpg"
    },
  ])

  return (
    <div className='wrapper'>
      <Navbar />
      <main>
        <Hero />
        <BooksList booksList={booksList} />
      </main>     
      <Footer />
    </div>
  )
}

export default App