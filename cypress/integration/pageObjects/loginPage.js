class loginPage
{
    visit()
    {
        cy.loadApp(Cypress.env('url'))
    }

    enterUsername(user)
    {
        cy.get(".form-control[type='email']").should('be.visible').should('be.enabled').type(user)
        cy.log("entered the username")
    }

    enterPassword(pass)
    {
        cy.get(".form-control[type='password']").should('be.visible').should('be.enabled').type(pass)
        cy.log("entered the password")
    }

    clickSubmit()
    {
     cy.get("button[type=submit]").should('be.enabled').click()
     cy.log("submitted the username and password")
     cy.wait(10000)
    }
}

export default loginPage