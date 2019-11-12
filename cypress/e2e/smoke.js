describe('Blog', () => {
  it('Title links to Blogpost', () => {
    cy.visit('/')
      .findByText(/new\sbeginnings/i)
      .click()
  })
})
