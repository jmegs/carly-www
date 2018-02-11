import React from 'react'
import format from 'date-fns/format'
import s from './upcoming.module.styl'

const Upcoming = props => {
  let { title, location, dateTime, description } = props.next
  const formattedDate = format(dateTime, 'dddd, MMMM Do')
  return (
    <div className={s.container}>
      <h1 className={s.title}>Up Next</h1>
      <p className={s.showText}>{title}</p>
      <p className={s.showText}>{location}</p>
      <p className={s.showText}>{formattedDate}</p>
      <div className={s.cta}>
        <a href="#">Previous Shows</a>
      </div>
    </div>
  )
}

export default Upcoming
