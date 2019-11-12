const BlogTitleToClick = 'New Beginnings'

describe('Blog', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })
  it('Title links to Blogpost', () => {
    cy.findByText(BlogTitleToClick)
      .click()
      .waitForRouteChange()
      .findByText(BlogTitleToClick)
  })
})
