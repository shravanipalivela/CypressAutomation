
import loginPage from '../pageObjects/loginPage'
import boardsPage from '../pageObjects/boardsPage'
import cardPage from '../pageObjects/cardPage'

describe("SmokeTests", () => {
  
  beforeEach(function() {
    
     cy.fixture('testdata').then((data)=>{
        this.data=data
     })
    
  })
 
  it("Load and Login to application", function() {
    
    const lp = new loginPage()
    
    lp.visit()
    cy.title().should('eq','Login – Sprint Boards')
    cy.log("Application loaded.......")

    lp.enterUsername(this.data.username)
   
    lp.enterPassword(this.data.password)
    lp.clickSubmit()

    cy.title().should('eq',this.data.homepagetitle)
    cy.log("Login Page loaded.........")
  })

  
    it("Validate Create Board", function() {
      
      const lp = new loginPage()
      lp.visit()
      cy.title().should('eq','Login – Sprint Boards')
      lp.enterUsername(this.data.username)
      lp.enterPassword(this.data.password)
      cy.server()
      cy.route('/boards', []).as('getboards')
      lp.clickSubmit()
      cy.title().should('eq',this.data.homepagetitle)
      // cy.wait(10000)
      cy.wait('@getboards')
      
      const bp = new boardsPage()
      cy.log("user is logged in to the page....")
      cy.route('/boards/create', []).as('getboards')
      bp.clickCreateboard()
    
      
      cy.url().should('eq', 'https://sprintboards.io/boards/create')
      cy.get("h1.font-weight-normal").should('have.text', 'Create a Board')
      cy.log("Create dashboard form is open.....")
      cy.wait('@createboards')
      //cy.wait(10000)
    
      bp.enterBoardname(this.data.boardName)
      bp.selectboardtype(this.data.boardType)
      bp.clickbuttoncreateboard()

      cy.on('window:alert',(str) => {
      expect(str).to.equal('Created')
      })
      cy.url().should('eq', 'https://sprintboards.io/boards/create')
      cy.wait(10000)
      cy.log("dashboard is created successfully")
  })

  it("Validate add what went well card",  function() {

    const cp = new cardPage()
    
    cp.addcardsuccess()
    cy.get("#add-card-modal").should('be.visible')
    cp.entercardTitlesuccess(this.data.wentWellTitle)
    cp.entercarddescription(this.data.wentWellDescription)
    cp.submitcardsuccess()
    
    cy.get("h6[class*='bg-success']").first().should('have.text', this.data.wentWellTitle)
    cy.get("div>p").first().invoke('text').should('include', this.data.wentWellDescription) 
    cy.log("added what went well card")
  })

  it("Validate add what did not go well card",  function(){
    
    const cp = new cardPage()
    cp.addcarddanger()
    cy.get("#add-card-modal").should('be.visible')
    cp.entertitledanger(this.data.didnotWellTitle)
    cp.submitcarddanger()
    
    cy.get("h6[class*='bg-danger']").last().should('have.text', this.data.didnotWellTitle)
    cy.get("p[class='text-secondary font-italic']").invoke('text').should('include', 'No description provided.') 
    cy.log("added what did not go well card")
  })
 
  it("Validate Like a card", () => {
    const cp = new cardPage()
    cy.get("button[data-placement='bottom']").first().invoke('text').should('include','0') 
    cp.likeacard()
   
    cy.get("button[data-placement='bottom']").first().invoke('text').should('include','1') 
    cy.log("liked a card")
  })
  
  it("Validate Delete card", () => {
    
    const cp = new cardPage()
    
    cp.clickdelete()
    cp.deletecard()
  
    cy.get("h6[class*='bg-danger']").last().should('not.exist');
    cy.log("Deleted a card")
  })


  //cypress run --record --key 7c9e0b7b-4517-4b79-a958-6970f0a80fa8
});