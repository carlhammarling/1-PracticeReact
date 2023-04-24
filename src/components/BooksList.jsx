import { useState} from 'react'
import OneBook from './OneBook'

const BooksList = ({ booksList }) => {

    console.log(booksList)

  return (
    <div className='booksList'>
        {
            booksList.map(book => {
                return <OneBook key={book.id} book={book} />
            })
        }     
    </div>
  )
}

export default BooksList