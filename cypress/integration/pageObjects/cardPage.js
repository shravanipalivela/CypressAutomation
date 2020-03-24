class cardPage
{
    addcardsuccess()
    {
        cy.get("svg[data-icon='plus-square']").first().click()
    }

    entercardTitlesuccess(title)
    {
        cy.get("input[placeholder='Required']").type(title)
    }

    entercarddescription(description)
    {
        cy.get("textarea[placeholder='Optional']").type(description)
    }

    submitcardsuccess()
    {
        cy.get("button[type='Submit']").should('be.enabled').click()
    }
    
addcarddanger()
{
    cy.get("button[class='btn btn-link text-danger ml-2 p-1']").last().click()
}

entertitledanger(didnotWellTitle)
{
    cy.get("input[placeholder='Required']").type(didnotWellTitle)
}
    
submitcarddanger()
{
    cy.get("button[type='Submit']").should('be.enabled').click()
}

likeacard()
{
    cy.get("svg[data-icon='thumbs-up']").first().should('be.visible').should('be.enabled').click()  
    cy.wait(2000) 
}
    
  clickdelete()  
  {
    cy.get("svg[class='svg-inline--fa fa-times-circle fa-w-16 mr-2']").last().should('be.visible').should('be.enabled').click()
  }
deletecard()
{
    cy.get("div[class*='modal-title']").invoke('text').should('eq','Delete Card')
    cy.get("p[class='mb-0']").invoke('text').should('eq','Are you sure you want to continue?')
    cy.get("button[class='btn btn-danger']").should('be.enabled').click()
    cy.wait(3000)
} 
   
}

export default cardPage