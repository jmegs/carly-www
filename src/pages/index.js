import React from 'react'

import Nav from '../components/Nav'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Videos from '../components/Videos'
import Upcoming from '../components/Upcoming'

const IndexPage = ({ data }) => {
  let home = data.allContentfulHomePage.edges[0].node
  let bioText = home.bio.childMarkdownRemark.html
  let videos = data.contentfulVideoList.videos
  let featured = data.allContentfulFeaturedPerformance.edges[0].node.featured
  let { contactMe, email, resume } = home
  return (
    <div>
      <Nav message={contactMe} email={email} resume={resume} />
      <Header
        name={home.name}
        tagline={home.tagline}
        img={home.headshot.sizes}
      />
      <Bio text={bioText} />
      <Videos videos={videos} />
      <Upcoming next={featured} />
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
          resume {
            file {
              url
            }
          }
        }
      }
    }
    contentfulVideoList {
      videos {
        videoUrl
        title
        subtitle
      }
    }
    allContentfulFeaturedPerformance {
      edges {
        node {
          featured {
            title
            location
            dateTime
            link
            image {
              sizes(maxWidth: 720) {
                src
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`
