import React from 'react'
import Link from 'gatsby-link'

import s from './nav.module.styl'

const Nav = () => {
  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <Link to={'/'}>CA</Link>
        <span className={s.bar} />
      </div>
      <div>
        <span className={s.contact}>Contact</span>
      </div>
    </nav>
  )
}

export default Nav
