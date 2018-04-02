import React from "react"
import Link from "gatsby-link"

import s from "./nav.module.styl"

const Nav = props => {
  let { message, email } = props
  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <Link to={"/"}>CA</Link>
        <span className={s.bar} />
      </div>
      <div>
        <a href={`mailto:${email}`} className={s.contact}>
          {message}
        </a>
      </div>
    </nav>
  )
}

export default Nav
