describe('My First Test', () => {
    it('Visits site', () => {
        cy.visit('https://sapr.mil')

        cy.contains('Reports').click()

        // should be a new URL which includes '?q=reports'
        cy.url().should('include', '?q=reports')
    })
})