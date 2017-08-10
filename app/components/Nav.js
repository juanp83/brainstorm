import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({navStyles}) => {
  return (
    <div className={navStyles.container}>
      <h1>Ideally</h1>
      <ul className={navStyles.nav}>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/brainstorm'>
            Brainstorm
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='#'>
            Create Idea
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='#'>
            Create Tracks
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='#'>
            View Visualizations
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='#'>
            Search/Browse
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

Nav.propTypes = {
  navStyles: PropTypes.object.isRequired
}

export default Nav
