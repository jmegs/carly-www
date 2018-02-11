import React from 'react'

import Nav from '../components/Nav'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Videos from '../components/Videos'
import Upcoming from '../components/Upcoming'

const IndexPage = ({ data }) => {
  let home = data.allContentfulHomePage.edges[0].node
  let bioText = home.bio.childMarkdownRemark.html
  let videos = data.allContentfulVideo.edges.map(e => e.node)
  let upcoming = data.allContentfulPerformance.edges.map(e => e.node)
  return (
    <div>
      <Nav />
      <Header
        name={home.name}
        tagline={home.tagline}
        img={home.headshot.sizes}
      />
      <Bio text={bioText} />
      <Videos videos={videos} />
      <Upcoming next={upcoming[0]} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    allContentfulHomePage {
      edges {
        node {
          name
          tagline
          headshot {
            sizes(maxWidth: 720) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
          bio {
            childMarkdownRemark {
              html
            }
          }
          contactMe
          email
        }
      }
    }

    allContentfulVideo(sort: { fields: [updatedAt] }) {
      edges {
        node {
          videoUrl
          title
          subtitle
        }
      }
    }
    allContentfulPerformance(sort: { fields: [dateTime] }) {
      edges {
        node {
          title
          location
          dateTime
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
