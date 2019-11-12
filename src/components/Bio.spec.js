import React from 'react'
import renderer from 'react-test-renderer'

import { PureBio } from './Bio'

describe('PureBio', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PureBio
          author="Test Author"
          social={{ twitter: 'testtwitter.com' }}
          avatar={{
            childImageSharp: { fixed: '' },
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
