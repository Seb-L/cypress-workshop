describe('Test 2', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('Valid form', () => {
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    cy.get('[data-cy="form-input-email"]')
      .type('email@domain.com')

    cy.get('[data-cy="form-submit-btn"]')
      .click()

    cy.get('[data-cy="form-msg-success"]')
      .should('exist')
      .should('contain', 'The form has been submitted')
  })

  it('Firstname required message', () => {
    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    cy.get('[data-cy="form-input-email"]')
      .type('email@domain.com')

    cy.get('[data-cy="form-submit-btn"]')
      .click()

    cy.get('[data-cy="form-input-msg-firstname"]')
      .should('exist')
      .should('contain', 'The firstname field is required.')
  })

  it('Lastname required message', () => {
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    cy.get('[data-cy="form-input-email"]')
      .type('email@domain.com')

    cy.get('[data-cy="form-submit-btn"]')
      .click()

    cy.get('[data-cy="form-input-msg-lastname"]')
      .should('exist')
      .should('contain', 'The lastname field is required.')
  })

  it('Email required message', () => {
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    cy.get('[data-cy="form-submit-btn"]')
      .click()

    cy.get('[data-cy="form-input-msg-email"]')
      .should('exist')
      .should('contain', 'The email field is required.')
  })

  it('Email pattern message', () => {
    cy.get('[data-cy="form-input-firstname"]')
      .type('Firstname')

    cy.get('[data-cy="form-input-lastname"]')
      .type('Lastname')

    cy.get('[data-cy="form-input-email"]')
      .type('email')

    cy.get('[data-cy="form-submit-btn"]')
      .click()

    cy.get('[data-cy="form-input-msg-email"]')
      .should('exist')
      .should('contain', 'The email field must be a valid email.')
  })
})
