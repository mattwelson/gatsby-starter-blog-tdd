import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

export const PureBio = ({ author, social, avatar }) => (
  <div
    style={{
      display: `flex`,
      marginBottom: rhythm(2.5),
    }}
  >
    <Image
      fixed={avatar.childImageSharp.fixed}
      alt={author}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
    />
    <p>
      Written by <strong>{author}</strong> who lives and works in Minneapolis
      building silly things.
      {` `}
      <a href={`https://twitter.com/${social.twitter}`}>
        You should follow him on Twitter
      </a>
    </p>
  </div>
)

PureBio.propTypes = {
  author: PropTypes.string.isRequired,
  social: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
  }).isRequired,
  avatar: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fixed: PropTypes.shape(),
    }),
  }),
}

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return <PureBio author={author} social={social} avatar={data.avatar} />
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
