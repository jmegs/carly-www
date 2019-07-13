import React from 'react'
import { format, isAfter } from 'date-fns'
import s from './showList.module.styl'

import Show from '../Show'

// Template
const ShowList = props => {
  const { shows } = props
  return (
    <div className={s.wrapper}>
      <h1>All Shows</h1>
      <div className={s.grid}>
        {shows.map((show, idx) => {
          return <Show show={show} key={idx} />
        })}
      </div>
    </div>
  )
}

export default ShowList
