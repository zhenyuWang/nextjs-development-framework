describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')

    cy.contains('Maybe Your Logo').should('be.visible')

    cy.contains('Sign In').should('be.visible')
    cy.get('a[href="/sign-in"]').should('be.visible')
    cy.contains('Sign Up').should('be.visible')
    cy.get('a[href="/sign-up"]').should('be.visible')

    cy.get('img')
      .should('have.attr', 'src', '/images/avatar.png')
      .should('have.attr', 'alt', 'avatar')
      .should('be.visible')

    cy.contains('Nextjs development framework').should('be.visible')
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
