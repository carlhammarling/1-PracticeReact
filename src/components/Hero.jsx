import { useState } from 'react'

const Hero = ({setShowBooks}) => {

  // const clickHandler = () => {

  //   console.log('You just clicked the button')

  // }
  return (
    <div className='hero'>
        <h2>Welcome! </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam voluptate corrupti provident porro dolores ipsam facere a, nostrum, magni in error beatae! Tempore deserunt nisi autem odit eveniet molestiae.</p>
        <button className='btn-primary' onClick={() => setShowBooks(state => !state)} >Show me the books!</button>
    </div>
  )
}

export default Hero