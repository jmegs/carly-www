import React from "react"
import Youtube from "react-youtube"
import getVideoId from "get-video-id"

import s from "./video.module.styl"

class Videos extends React.Component {
  state = {
    showAll: false
  }

  toggleShowMore = () => {
    const { showAll } = this.state
    this.setState({ showAll: !showAll })
  }

  render() {
    let { showAll } = this.state
    let videos = showAll ? this.props.videos : this.props.videos.slice(0, 4)

    return (
      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.title}>Videos</h1>
          <div className={s.grid}>
            {videos.map((item, idx) => {
              let id = getVideoId(item.videoUrl).id
              return (
                <div key={idx} className={s.video}>
                  <div className={s.video__container}>
                    <Youtube videoId={id} className={s.video__inner} />
                  </div>
                  <h3 className={s.video__title}>{item.title}</h3>
                  <p className={s.video__subtitle}>{item.subtitle}</p>
                </div>
              )
            })}
          </div>
          <div className={s.cta}>
            <span onClick={() => this.toggleShowMore()}>
              {showAll ? "Show Less" : "Show More"}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Videos
