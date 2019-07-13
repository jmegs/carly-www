import React from 'react'
import Image from 'gatsby-image'
import { format, isAfter } from 'date-fns'
import s from './showList.module.styl'

const renderImage = (image, alt) => {
  if (!image) {
    return <div>No Image</div>
  }
  return <img src={image.sizes.src} alt={alt} />
}
// Template
const ShowList = props => {
  const { shows } = props
  return (
    <div className={s.wrapper}>
      <h1>All Shows</h1>
      <div className={s.grid}>
        {shows.map((show, idx) => {
          const {
            title,
            location,
            dateTime,
            image,
            description: { childMarkdownRemark: { html } },
            link
          } = show
          const formattedDate = format(dateTime, 'dddd MMMM Do, YYYY')
          let now = Date.now()
          return (
            <div className={s.entry}>
              <div className={s.imageWrap}>{renderImage(image, title)}</div>
              <div className={s.text}>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShowList
