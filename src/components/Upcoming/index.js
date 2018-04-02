import React from "react"
import format from "date-fns/format"
import Link from "gatsby-link"
import s from "./upcoming.module.styl"

const Upcoming = props => {
  let { name, location, dateTime, description } = props.next
  const formattedDate = format(dateTime, "dddd, MMMM Do")
  return (
    <div className={s.container}>
      <h1 className={s.title}>Up Next</h1>
      <p className={s.showText}>{name}</p>
      <p className={s.showText}>{location}</p>
      <p className={s.showText}>{formattedDate}</p>
      <div className={s.cta}>
        <Link to="/shows">See All</Link>
      </div>
    </div>
  )
}

export default Upcoming
