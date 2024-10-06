import React from 'react'
import Link from 'next/link';
const NavLink = ({href, currentPath, children}) => {
  return (
    <Link className={`link ${currentPath === href ? 'underline' : ''} text-xl uppercase py-6`} href={href}>
        {children}
    </Link>
  )
}

export default NavLink