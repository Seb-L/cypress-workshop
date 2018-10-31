describe('Test 2', () => {
  beforeEach(() => {
    // Visit page product
    cy.visit('/products')

    // Add product 2
    cy.get('[data-cy="addtocart-btn-2"]')
      .click()

    // Add product 5 twice
    cy.get('[data-cy="addtocart-btn-5"]')
      .click()
      .click()

    // Add product 1
    cy.get('[data-cy="addtocart-btn-1"]')
      .click()

    // Add product 6
    cy.get('[data-cy="addtocart-btn-6"]')
      .click()

    // Check if card navigation link cointains "1" product
    cy.get('[data-cy="nav-cart"]')
      .click()

    // Remove product 2
    cy.contains('Product 2')
      .closest('[data-cy^="cart-item-"]')
      .find('[data-cy^="remove-btn-"]')
      .click()
  })

  it('Product 2 should not be visible in cart anymore', () => {
    // Check that "Product 2" is not in the list
    cy.contains('Product 2')
      .should('not.exist')
  })

  it('Should have 3 products in cart', () => {
    // Check that cart has 3 items
    cy.get('[data-cy^="cart-item-"]')
      .should('have.length', 3)
  })

  it('Should have 2x "Product 5" in cart', () => {
    // Check that "Product 5" has an amount of 2
    cy.contains('Product 5')
      .closest('[data-cy^="cart-item-"]')
      .find('[data-cy^="item-ammount-"]')
      .should('contain', 'X2')
  })
})
