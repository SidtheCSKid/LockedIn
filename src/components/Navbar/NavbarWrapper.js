import React from 'react'
import ButtonGroup from './ButtonGroup'
import UserIcon from './UserIcon'
import { Link } from 'react-router-dom'

const NavbarWrapper = () => {
  return (
    <div className="NavbarWrapper">
        <Link to="/">
          <h1 className="Logo">LockedIn</h1>
        </Link>
        <ButtonGroup />
        <UserIcon />
    </div>
  )
}

export default NavbarWrapper