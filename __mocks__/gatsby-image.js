const React = require('react')

module.exports = jest.fn().mockImplementation(
  // mocking the gatsby-image Image tag
  // fixed is not a valid prop for `img`
  ({ fixed, ...rest }) =>
    React.createElement('img', {
      ...rest,
    })
)
