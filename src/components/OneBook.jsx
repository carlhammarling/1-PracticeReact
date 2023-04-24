import { useState } from 'react'

const OneBook = ( { book, showBooks }) => {

    console.log(book)


    const [showDescription, setShowDescription] = useState(false)

  return (
    <div className={`oneBook ${showBooks ? "on" : "off"}`} onClick={() => setShowDescription(state => !state)} >
        <h3> {book.book} </h3>
        <h4> {book.author} </h4>
        {/* {
            showDescription
            ? <p> {book.description} </p>
            : <p className="clickDescription">Click to show description.</p>
        } */}
          <p className={`clickDescription ${showDescription ? "off" : "on"}`}>Click to show description.</p>
          <p className={`bookDescription ${showDescription ? "on" : "off"}`}>{book.description}</p>
        
        <img src= {book.imgURL} alt="" />
    </div>
  )
}

export default OneBook