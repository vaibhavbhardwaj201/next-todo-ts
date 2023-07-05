import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href={'/'}>All</Link>
        <Link href={'/?todos=active'}>Active</Link>
        <Link href={'/?todos=completed'}>Completed</Link>
    </div>
  )
}

export default Navbar