import{ useState } from 'react'

const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <nav>
        <h1>BookStore</h1>
        {/* <button className='btn-nav' onClick={() => setLoggedIn(state => !state)} >Log in</button> */}
        {
          loggedIn
          ? <p className='userLoggedIn'>Carl</p>
          : <button className='btn-nav' onClick={() => setLoggedIn(state => !state)} >Log in</button>
          
        }
        <h1 className='hidden'>Carl</h1>
    </nav>
  )
}

export default Navbar