describe('Test 1', () => {
  it('Add a product to the cart and remove it', () => {
    // Visit homepage
    cy.visit('/')

    // Click on product button
    cy.get('[data-cy="products-btn"]')
      .click()

    // Check if page title contains "Products"
    cy.get('[data-cy="page-title"]')
      .should('contain', 'Products')

    // Click on first product "add to cart" button
    cy.get('[data-cy="addtocart-btn-1"]')
      .click()

    // Check if card navigation link contains "1" product
    cy.get('[data-cy="nav-cart"]')
      .should('contain', 'Cart (1)')

    // Click on cart navigation link
    cy.get('[data-cy="nav-cart"]')
      .click()

    // Check if page title contains "Cart"
    cy.get('[data-cy="page-title"]')
      .should('contain', 'Cart')

    // Check if one item is in the cart
    cy.get('[data-cy=cart-item]')
      .should('have.length', 1)

    // Check if the first product title is "Product 1"
    cy.get('[data-cy=cart-item]')
      .should('contain', 'Product 1')

    // Click on first cart item remove button
    cy.get('[data-cy=cart-item] [data-cy="remove-btn"]')
      .click()

    // Check if cart is empty
    cy.get('[data-cy="cart-list"]')
      .should('not.exist')

    // Check if contain the message "YOUR CART IS EMPTY"
    cy.get('[data-cy="card-empty-msg"]')
      .should('exist')
      .should('contain', 'YOUR CART IS EMPTY')
  })
})
