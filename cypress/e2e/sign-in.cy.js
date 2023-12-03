describe('The Sign In Page', () => {
  it('successfully loads', () => {
    cy.visit('/sign-in')

    cy.contains('Sign In').should('be.visible')

    cy.get('input[name="username"]')
      .should('have.attr', 'placeholder', 'please input your username')
      .should('be.visible')
    cy.contains('Spaces not allowed').should('be.visible')

    cy.get('input[name="password"]')
      .should('have.attr', 'placeholder', 'please input your password')
      .should('be.visible')
    cy.contains('8~20 non-space characters').should('be.visible')

    cy.get('button[type="submit"]').should('be.visible')

    cy.contains('Sign Up').should('be.visible')
    cy.get('a[href="/sign-up"]').should('be.visible')

    cy.contains('Forget Password').should('be.visible')
    cy.get('a[href="/forget-password"]').should('be.visible')
  })

  it('validate form', () => {
    cy.visit('/sign-in')

    cy.get('button[type="submit"]').click()
    cy.contains('Username is required').should('be.visible')
    cy.contains('Password is required').should('be.visible')

    cy.get('input[name="username"]').type('user name')
    cy.contains('Username should not contain spaces').should('be.visible')
    cy.get('input[name="username"]').clear().type('username')

    cy.get('input[name="password"]').type('1234')
    cy.contains(
      'Please enter a password of 8 to 20 characters. Spaces are not allowed',
    )
    cy.get('input[name="password"]').type('5678')

    cy.get('button[type="submit"]').click()
    cy.contains('Form verification successful!').should('be.visible')
    cy.contains('Username: username').should('be.visible')
    cy.contains('Password: 12345678').should('be.visible')
  })
})
