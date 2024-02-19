import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
 
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
          
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="about">About</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="home">Home</Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar */}
  {/* Jumbotron */}
  <div className="p-5 text-center bg-light">
    <h1 className="mb-3">Heading</h1>
    <h4 className="mb-3">Subheading</h4>
    <a className="btn btn-primary" href="" role="button">
      Call to action
    </a>
  </div>
  {/* Jumbotron */}
</header>

    </div>
  )
}

export default Header