# workshop-cypress-e2e

## Before starting

### Prerequisites

You are going to need NodeJs v8+ installed on your machine along with Yarn (you can also use npm instead).

### Install

Clone the project locally and install dependencies:

`yarn` or `npm install`

### Run example website locally

To take a look at the website, start a local dev server by typing:

`yarn serve` or `npm run dev`

And visit `http://localhost:8080` in your browser.

### Run your end-to-end tests

To open Cypress and run your e2e tests, type in a terminal:

`yarn test:e2e` or `npm run test:e2e`

After starting Cypress will listen to your files update and automatically restart your tests.

## Test 1

### Scenario

* Visit homepage
* Click on product button
* Check if page title contains "Products"
* Click on first product "add to cart" button
* Check if card navigation link cointains "1" product
* Click on cart navigation link
* Check if page title contains "Cart"
* Check if one item is in the cart
* Check if the first product title is "Product 1"
* Click on first cart item remove button
* Check if cart is empty
* Check if contain the message "YOUR CART IS EMPTY"

### Cypress syntax used in this test

* [.visit()](https://docs.cypress.io/api/commands/visit.html#Syntax)
* [.get()](https://docs.cypress.io/api/commands/get.html#Syntax)
* [.click()](https://docs.cypress.io/api/commands/click.html#Syntax)
* [.should()](https://docs.cypress.io/api/commands/should.html#Syntax)

## Test 2: Form testing

### Scenario
* Visit contact page

__Case form valid:__
* Type "Firstname" in firstname input
* Type "Lastname" in lastname input
* Type "email@domain.com" in email input
* Click on submit button
* Check if submit form message exists and contain "The form has been submitted"

__Case fisrtname required:__
* Type "Lastname" in lastname input
* Type "email@domain.com" in email input
* Click on submit button
* Check if firstname error message exists and contain "The firstname field is required."

__Case lastname required:__
* Type "Firstname" in firstname input
* Type "email@domain.com" in email input
* Click on submit button
* Check if lastname error message exists and contain "The lastname field is required."

__Case email required:__
* Type "Firstname" in firstname input
* Type "Lastname" in lastname input
* Click on submit button
* Check if email error message exists and contain "The email field is required."

__Case email pattern:__
* Type "Firstname" in firstname input
* Type "Lastname" in lastname input
* Type "email" in email input
* Click on submit button
* Check if submit form message exists and contain "The email field must be a valid email."

### Cypress syntax used in this test

* [.visit()](https://docs.cypress.io/api/commands/visit.html#Syntax)
* [.get()](https://docs.cypress.io/api/commands/get.html#Syntax)
* [.click()](https://docs.cypress.io/api/commands/click.html#Syntax)
* [.should()](https://docs.cypress.io/api/commands/should.html#Syntax)
* [.type()](https://docs.cypress.io/api/commands/type.html#Syntax)

## Test 3: "Before each"

### Scenario

## Scenario

* Visit page product
* Add product 2
* Add product 5 twice
* Add product 1
* Add product 6
* Check if card navigation link cointains "1" product
* Remove product 2

__Case 1:__
* Check that "Product 2" is not in the list

__Case 2:__
* Check that cart has 3 items

__Case 3:__
* Check that "Product 5" has an amount of 2
