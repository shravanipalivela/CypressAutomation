class boardsPage
{
  clickCreateboard()
  {
    cy.contains('Create Board').click()
    cy.wait(10000)
  }

  enterBoardname(boardname)
  {
    cy.get(".form-control[placeholder='Session Name']").type(boardname)
    cy.log("board name is entered ")
  }

  selectboardtype(boardtype)
  {
    cy.get('.custom-select').first().select(boardtype)
    cy.log("board type is entered ")
  }
  
  clickbuttoncreateboard()
  {
  cy.get('button:contains("Create Board")').click()
  }

}

export default boardsPage