describe('My First Test', () => {
    it('Visits site', () => {
        cy.visit('https://dacipad.whs.mil')

        cy.contains('Contact').click()

        // should be a new URL which includes '?q=reports'
        cy.url().should('include', '/contact')
    })
})