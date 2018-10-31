describe('Test 2', () => {
  beforeEach(() => {
    // Visit contact page
    cy.visit('/contact')
  })

  it('Valid form', () => {
    // Type "Firstname" in firstname input
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    // Type "Lastname" in lastname input
    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    // Type "email@domain.com" in email input
    cy.get('[data-cy="form-input-email"]')
      .type('email@domain.com')

    // Click on submit button
    cy.get('[data-cy="form-submit-btn"]')
      .click()

    // Check if submit form message exists and contain "The form has been submitted"
    cy.get('[data-cy="form-msg-success"]')
      .should('exist')
      .should('contain', 'The form has been submitted')
  })

  it('Firstname required message', () => {
    // Type "Lastname" in lastname input
    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    // Type "email@domain.com" in email input
    cy.get('[data-cy="form-input-email"]')
      .type('email@domain.com')

    // Click on submit button
    cy.get('[data-cy="form-submit-btn"]')
      .click()

    // Check if firstname error message exists and contain "The firstname field is required."
    cy.get('[data-cy="form-input-msg-firstname"]')
      .should('exist')
      .should('contain', 'The firstname field is required.')
  })

  it('Lastname required message', () => {
    // Type "Firstname" in firstname input
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    // Type "email@domain.com" in email input
    cy.get('[data-cy="form-input-email"]')
      .type('email@domain.com')

    // Click on submit button
    cy.get('[data-cy="form-submit-btn"]')
      .click()

    // Check if lastname error message exists and contain "The lastname field is required."
    cy.get('[data-cy="form-input-msg-lastname"]')
      .should('exist')
      .should('contain', 'The lastname field is required.')
  })

  it('Email required message', () => {
    // Type "Firstname" in firstname input
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    // Type "Lastname" in lastname input
    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    // Click on submit button
    cy.get('[data-cy="form-submit-btn"]')
      .click()

    // Check if email error message exists and contain "The email field is required."
    cy.get('[data-cy="form-input-msg-email"]')
      .should('exist')
      .should('contain', 'The email field is required.')
  })

  it('Email pattern message', () => {
    // Type "Firstname" in firstname input
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    // Type "Lastname" in lastname input
    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    // Type "email" in email input
    cy.get('[data-cy="form-input-email"]')
      .type('email')

    // Click on submit button
    cy.get('[data-cy="form-submit-btn"]')
      .click()

    // Check if submit form message exists and contain "The email field must be a valid email."
    cy.get('[data-cy="form-input-msg-email"]')
      .should('exist')
      .should('contain', 'The email field must be a valid email.')
  })
})
