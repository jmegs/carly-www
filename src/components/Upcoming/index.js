import React from "react"
import format from "date-fns/format"
import Link from "gatsby-link"
import Image from "gatsby-image"
import s from "./upcoming.module.styl"

const Upcoming = props => {
  let { title, location, dateTime, description, image } = props.next
  const formattedDate = format(dateTime, "dddd, MMMM Do")
  let { sizes } = image
  const descriptionMarkup = () => {
    return { __html: description.childMarkdownRemark.html }
  }
  return (
    <div className={s.container}>
      <h1 className={s.title}>Featured Performance</h1>
      <div className={s.content}>
        {image && <Image sizes={sizes} outerWrapperClassName={s.imageWrap} />}
        <div className={s.info}>
          <p className={s.showText}>{title}</p>
          <p className={s.showText}>{location}</p>
          <p className={s.showText}>{formattedDate}</p>
          <div
            className={s.showDesc}
            dangerouslySetInnerHTML={descriptionMarkup()}
          />
          <div className={s.cta}>
            <Link to="/shows">See All</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
