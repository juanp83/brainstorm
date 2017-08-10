import React from 'react'
import Nav from './Nav'

const navStyles = {
  nav: "main-nav",
  container: "main-nav-container"
}

const Home  = () => {
  return (
    <div className='home-container'>
      <h1>Ideally</h1>
      <Nav navStyles={navStyles} />
    </div>
  )
}

export default Home
