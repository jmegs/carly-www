import React from 'react'
import Link from 'gatsby-link'

import s from './nav.module.styl'

const Nav = (props) => {
  let { message, email, resume } = props
  return (
    <nav className={s.container}>
      <div className={s.logo}>
        <Link to={'/'}>CA</Link>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-instagram"
            {...props}
          >
            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
          </svg>
        </a>
        <a href="https://twitter.com/CarlyJoAugs" className={s.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter"
            {...props}
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Nav
