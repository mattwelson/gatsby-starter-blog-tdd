import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'

import Bio, { PureBio } from './Bio'

describe('PureBio', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PureBio
          author="Test Author"
          social={{ twitter: 'testtwitter.com' }}
          avatar={{
            childImageSharp: { fixed: {} },
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Bio', () => {
  beforeEach(() => {
    StaticQuery.mockImplementation(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: 'Test title',
            author: 'Test Author',
            social: { twitter: 'testtwitter.com' },
          },
        },
        avatar: {
          childImageSharp: { fixed: {} },
        },
      })
    )
  })

  it('renders pure bio', () => {
    const tree = renderer.create(<Bio />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
