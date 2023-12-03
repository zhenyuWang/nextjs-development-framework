describe('The Forget Password Page', () => {
  it('successfully loads', () => {
    cy.visit('/forget-password')
    cy.contains('Forget Password').should('be.visible')

    cy.get('input[name="email"]')
      .should('have.attr', 'placeholder', 'please input your email')
      .should('be.visible')
    cy.contains('The email you used to register your account').should(
      'be.visible',
    )

    cy.get('input[name="verificationCode"]')
      .should('have.attr', 'placeholder', 'verification code')
      .should('be.visible')
    cy.contains('Six-digit number').should('be.visible')

    cy.get('button[type="submit"]').should('be.visible')

    cy.contains('Sign In').should('be.visible')
    cy.get('a[href="/sign-in"]').should('be.visible')
  })

  it('validate form', () => {
    cy.visit('/forget-password')
    cy.get('button[type="submit"]').click()
    cy.contains('Email is required').should('be.visible')
    cy.contains('verification code is required').should('be.visible')

    cy.get('input[name="email"]').type('test')
    cy.contains('The email is incorrect').should('be.visible')
    cy.get('input[name="email"]').type('@test.com')

    cy.get('input[name="verificationCode"]').type('123')
    cy.contains('The verification code is incorrect')
    cy.get('input[name="verificationCode"]').type('456')

    cy.get('button[type="submit"]').click()
    cy.contains('Form verification successful!').should('be.visible')
    cy.contains('Email: test@test.com').should('be.visible')
    cy.contains('Verification Code: 123456').should('be.visible')
  })
})
