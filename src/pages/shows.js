import React from "react"
import Nav from "../components/Nav"
import ShowList from "../components/ShowList"

const mockData = {
  title: "Name of a Show",
  dateTime: "whatever",
  location: "Manhattan School of Music",
  description:
    "Carly was selected to perform as a semifinalist in the 20th annual Lotte Lenya Competition, where she won a prize of $500. Not bad for belting so early in the morning!"
}

export default ({ props, data }) => {
  console.log(data.showEdges)
  const shows = data.showEdges.edges.map(e => e.node)
  return (
    <div>
      <Nav />
      <ShowList shows={shows} />
    </div>
  )
}

export const query = graphql`
  query ShowsQuery {
    showEdges: allContentfulPerformance(
      sort: { fields: [dateTime], order: DESC }
    ) {
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
          link
        }
      }
    }
  }
`
