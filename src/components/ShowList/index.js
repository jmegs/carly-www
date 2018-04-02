import React from "react"
import { format, isAfter } from "date-fns"
import s from "./showList.module.styl"

// Template
const ShowList = props => {
  const { shows } = props
  return (
    <div className={s.wrapper}>
      <h1>All Performances</h1>
      <div className={s.grid}>
        {shows.map((show, idx) => {
          const {
            title,
            location,
            dateTime,
            description: { childMarkdownRemark: { html } },
            link
          } = show
          const formattedDate = format(dateTime, "dddd MMMM Do, YYYY")
          let now = Date.now()
          return (
            <div className={s.entry}>
              {isAfter(dateTime, now) && <h4>Coming Up</h4>}
              <h3>{title}</h3>
              <p>{location}</p>
              <p>{formattedDate}</p>
              <p
                className={s.description}
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <a href={link}>Learn More</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShowList
