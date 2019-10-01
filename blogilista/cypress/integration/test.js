describe('Bloglist app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('login page can be opened', function() {
    cy.contains('log in to application')
  })

  it('click login button without username and password', function() {
    cy.contains('login')
      .click()
    cy.contains('wrong password')
  })

  it('user can login with correct password and username', function () {
    cy.contains('log in to application')

    cy.get('#username')
      .type('root')
    cy.get('#password')
      .type('password')
    cy.contains('login')
      .click()

    cy.contains('root is logged in')
  })

})
