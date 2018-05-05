import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper z-depth-3 blue">
          <Link to="/" className="brand-logo center">New Parents Support</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">home</Link></li>
            <li><Link to="/schedule">schedule</Link></li>
            <li><Link to="/pay">pay</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header