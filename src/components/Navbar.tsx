"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const searchParams = useSearchParams()
  const params = searchParams.get('todos')

  return (
    <div>
        <Link href={'/'} className={params === null ? 'active' : ''}>All</Link>
        <Link href={'/?todos=active'} className={params === 'active' ? 'active' : ''}>Active</Link>
        <Link href={'/?todos=completed'} className={params === 'completed' ? 'active' : ''}>Completed</Link>
    </div>
  )
}

export default Navbar