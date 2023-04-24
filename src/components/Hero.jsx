import React from 'react'

const Hero = () => {

  const clickHandler = () => {

    console.log('You just clicked the button')

  }
  return (
    <div className='hero'>
        <h2>Welcome! </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam voluptate corrupti provident porro dolores ipsam facere a, nostrum, magni in error beatae! Tempore deserunt nisi autem odit eveniet molestiae.</p>
        <button className='btn-primary' onClick={clickHandler} >Click here</button>
    </div>
  )
}

export default Hero