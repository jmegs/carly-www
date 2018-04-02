import React from "react"
import format from "date-fns/format"
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
          const date = format(dateTime, "dddd MMMM Do, YYYY")
          return (
            <div className={s.entry}>
              <h3>{title}</h3>
              <p>{location}</p>
              <p>{date}</p>
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
