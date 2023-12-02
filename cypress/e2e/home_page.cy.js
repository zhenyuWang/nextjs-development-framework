describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Maybe Your Logo')
    cy.contains('Sign In')
    cy.contains('Sign Up')

    cy.get('img')
      .should('have.attr', 'src', '/images/avatar.png')
      .should('have.attr', 'alt', 'avatar')

    cy.contains('Nextjs development framework')
  })
  it('custom command', () => {
    cy.login('login name', 'login password').then((response) => {
      expect(response).to.equal('login name login password')
    })
  })
  it('screenshot', () => {
    cy.visit('/')
    cy.matchImageSnapshot('home-page')
  })
})
