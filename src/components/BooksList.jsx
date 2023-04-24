import { useState} from 'react'
import OneBook from './OneBook'

const BooksList = ({ booksList, showBooks }) => {

    console.log(booksList)

  return (
    <div className={`booksList ${showBooks ? "on" : "off"}`}>
        {
            booksList.map(book => {
                return <OneBook showBooks={showBooks} key={book.id} book={book} />
            })
        }     
    </div>
  )
}

export default BooksList