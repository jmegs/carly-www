import React from "react"
import Link from "gatsby-link"

import s from "./nav.module.styl"

const Nav = props => {
  let { message, email, resume } = props
  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <Link to={"/"}>CA</Link>
        <span className={s.bar} />
      </div>
      <div className={s.links}>
        <a href={`mailto:${email}`} className={s.contact}>
          Contact
        </a>
        <a href={resume.file.url} className={s.contact}>
          Resume
        </a>
        <a href="https://www.instagram.com/carleesi/" className={s.icon}>
          <img
            src="https://icon.now.sh/instagram/00002a"
            alt="instagram icon"
          />
        </a>
        <a href="https://twitter.com/CarlyJoAugs" className={s.icon}>
          <img src="https://icon.now.sh/twitter/00002a" alt="twitter icon" />
        </a>
      </div>
    </nav>
  )
}

export default Nav
