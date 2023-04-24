import { useState } from 'react'

const OneBook = ( { book }) => {

    console.log(book)


    const [showDescription, setShowDescription] = useState(false)

  return (
    <div className='oneBook' onClick={() => setShowDescription(state => !state)} >
        <h3> {book.book} </h3>
        <h4> {book.author} </h4>
        {
            showDescription
            ? <p> {book.description} </p>
            : <p className="clickDescription">Click to show description.</p>
        }
        
        <img src= {book.imgURL} alt="" />
    </div>
  )
}

export default OneBook