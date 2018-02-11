import React from 'react'
import s from './bio.module.styl'

const Bio = props => {
  return (
    <div className={s.container}>
      <p className={s.text} dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  )
}

export default Bio
