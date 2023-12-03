describe('The Sign Up Page', () => {
  it('successfully loads', () => {
    cy.visit('/sign-up')

    cy.contains('Sign Up').should('be.visible')

    cy.get('input[name="email"]')
      .should('have.attr', 'placeholder', 'please input your email')
      .should('be.visible')
    cy.contains('The email you used to register your account').should(
      'be.visible',
    )

    cy.get('input[name="password"]')
      .should('have.attr', 'placeholder', 'please input your password')
      .should('be.visible')
    cy.contains('8~20 non-space characters').should('be.visible')

    cy.get('button[type="submit"]').should('be.visible')

    cy.contains('Sign In').should('be.visible')
    cy.get('a[href="/sign-in"]').should('be.visible')
  })

  it('validate form', () => {
    cy.visit('/sign-up')

    cy.get('button[type="submit"]').click()
    cy.contains('Email is required').should('be.visible')
    cy.contains('Password is required').should('be.visible')

    cy.get('input[name="email"]').type('test')
    cy.contains('The email is incorrect').should('be.visible')
    cy.get('input[name="email"]').type('@test.com')

    cy.get('input[name="password"]').type('1234')
    cy.contains(
      'Please enter a password of 8 to 20 characters. Spaces are not allowed',
    )
    cy.get('input[name="password"]').type('5678')

    cy.get('button[type="submit"]').click()
    cy.contains('Form verification successful!').should('be.visible')
    cy.contains('Email: test@test.com').should('be.visible')
    cy.contains('Password: 12345678').should('be.visible')
  })
})
