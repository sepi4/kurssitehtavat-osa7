describe('Bloglist app', function() {

  // describe('login tests', function() {
  //   beforeEach(function() {
  //     cy.visit('http://localhost:3000')
  //   })

  //   it('login page can be opened', function() {
  //     cy.contains('log in to application')
  //   })

  //   it('click login button without username and password', function() {
  //     cy.contains('login')
  //       .click()
  //     cy.contains('wrong password')
  //   })

  //   it('user can login with correct password and username', function () {
  //     cy.contains('log in to application')

  //     cy.get('#username')
  //       .type('root')
  //     cy.get('#password')
  //       .type('password')
  //     cy.contains('login')
  //       .click()

  //     cy.contains('root is logged in')
  //   })
  // })



  describe('after login test', function() {
    // delete all blogs and login as root user
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3003/api/testing/reset')

      cy.visit('http://localhost:3000')
      cy.contains('log in to application')

      cy.get('#username')
        .type('root')
      cy.get('#password')
        .type('password')
      cy.contains('login')
        .click()
    })

    function createBlog() {
      cy.get('#new-blog-btn')
        .click()
      cy.contains('create new blog')

      const title = `title ${Math.random()}`
      const author = `author ${Math.random()}`
      const url = `url ${Math.random()}`

      cy.get('#title-input')
        .type(title)
      cy.get('#author-input')
        .type(author)
      cy.get('#url-input')
        .type(url)
      cy.get('#create-btn')
        .click()
      return title
    }


    it('test new comment creation', function() {
      createBlog()

      cy.get('.segment > .ui > .item > a')
        .click()

      const comment = `comment ${Math.random()}`

      cy.get('input')
        .type(comment)
      cy.contains('add comment')
        .click()

      cy.contains(comment)
    })

    it('new comment creation', function() {
      createBlog()
      cy.get(':nth-child(2) > a')
        .click()

      cy.contains('root')
      cy.contains('1')
    })

  })
})
