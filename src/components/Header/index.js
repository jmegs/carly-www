import React from 'react'
import Image from 'gatsby-image'

import s from './header.module.styl'

// Template
const Header = props => {
  return (
    <header className={s.wrapper}>
      <Image outerWrapperClassName={s.imageWrap} sizes={props.img} />
      <div className={s.content}>
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
      </div>
    </header>
  )
}

export default Header
