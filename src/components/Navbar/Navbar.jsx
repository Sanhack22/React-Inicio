import React from 'react'
import './NavBar.css'
export const Navbar = ({children}) => {
  return (
    <nav>
        <ul>{children}</ul>
    </nav>
  )
}
