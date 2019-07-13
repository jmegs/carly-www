import React from 'react'
import Link from 'gatsby-link'
import s from './upcoming.module.styl'

import Show from '../Show'

const Upcoming = props => {
  let show = props.next

  return (
    <div className={s.container}>
      <h1 className={s.title}>Featured Performance</h1>
      <div className={s.content}>
        <Show show={show} />
      </div>
      <div className={s.cta}>
        <Link to="/shows">See All</Link>
      </div>
    </div>
  )
}

export default Upcoming
