import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const HomeHeader = (props) => {

  return (
    <header>
      <div className="navbar-fixed">
        <nav className="navbar topnav-style">
          <div className="nav-wrapper">
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <Link to={'/home/main'} className="waves-effect active">Home</Link>
              </li>
              <li>
                <Link to={'/home/categories'} className="waves-effect active">Categories</Link>
              </li>
              <li>
                <a className="waves-effect active" onClick={props.logout}>LOGOUT</a><br />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <ul id="sidenav-left" className="sidenav sidenav-fixed sidenav-style" style={{transform:"translateX(0)"}}>
              <li className="sidenav-heading"><a href="#" className="logo-container logo-brand">STUTER<i className="material-icons left">spa</i></a></li>
              <li className="no-padding">
                  <ul className="collapsible collapsible-accordion">
                      <div className="collapsible-body" style={{display:"block"}}>
                          <ul>

                          </ul>
                      </div>
                  </ul>
              </li>
          </ul>    */}
    </header>
  )
}

export default HomeHeader;