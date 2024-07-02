import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faList, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const ButtonGroup = () => {
  const location = useLocation();
  return (
    <div className="ButtonGroup">

        <Link to="/lock_in">
          <div className={`navbar-links  ${location.pathname === "/lock_in" ? "navbar-links-active" : ""}`}>
            <FontAwesomeIcon className="navbar-icon" icon={ faLock } size="xl" />
            <span className="navbar-label">LOCK IN</span>
          </div>
        </Link>
        
        <Link to="/tasks">
          <div className={`navbar-links  ${location.pathname === "/tasks" ? "navbar-links-active" : ""}`}>
              <FontAwesomeIcon className="navbar-icon" icon={ faList } size="xl" />
              <span className="navbar-label">TASKS</span>
          </div>
        </Link>

        <div className="navbar-links">
            <FontAwesomeIcon className="navbar-icon" icon={ faChartSimple } size="xl"/>
            <span className="navbar-label">PROGRESS</span>
        </div>
        
    </div>
  )
}

export default ButtonGroup