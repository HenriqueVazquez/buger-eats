describe('home page', function () {

  it('app deve estar online', function () {

    // cy.viewport(1440, 900)
    cy.visit('/')
    cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

  })

})