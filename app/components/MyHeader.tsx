import Link from 'next/link'
import React from 'react'

const MyHeader = () => {
  return (
    <header>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
    </header>
  )
}

export default MyHeader