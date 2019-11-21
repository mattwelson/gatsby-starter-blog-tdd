import React from 'react'
import { action } from '@storybook/addon-actions'
import { PureBio } from './Bio'

export default {
  title: 'Bio',
}

export const pureBio = () => (
  <PureBio
    author="Test Author"
    social={{ twitter: 'testtwitter.com' }}
    avatar={{
      childImageSharp: {
        fixed: {
          src: 'https://www.fillmurray.com/50/50',
        },
      },
    }}
  />
)
