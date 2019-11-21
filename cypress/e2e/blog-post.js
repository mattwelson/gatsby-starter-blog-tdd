describe('Blog Post', () => {
  // Not: Will break when we change the posts around, just change to new post with
  // headers
  it('Autolink headers', () => {
    cy.visit('/hi-folks/')
      .get('a[href="#a-live-code-sample"]')
      .click()
      .url()
      .should('contain', '#a-live-code-sample')
  })
})
