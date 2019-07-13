import React from 'react'
import { format, isAfter } from 'date-fns'
import s from './show.module.styl'

const renderImage = (image, alt) => {
  if (!image) {
    return <div>No Image</div>
  }
  return <img src={image.sizes.src} alt={alt} />
}

const Show = ({ show }) => {
  let {
    title,
    location,
    dateTime,
    image,
    description: { childMarkdownRemark: { html } },
    link
  } = show
  let formattedDate = format(dateTime, 'dddd MMMM Do, YYYY')
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
        {link && (
          <a className={s.link} href={link}>
            Learn More
          </a>
        )}
      </div>
    </div>
  )
}

export default Show
