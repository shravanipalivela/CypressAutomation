"# CypressAutomation" 

AutomationFramework with Page Object Model,Cypress and JavaScript

# Pre-Requisites
Download node and npm modules
Install cypress on Visual Studio Code.
Set Up Cypress dashboard services to view results.

# Framework Details
#1.Created layered framework considering SOLID principles in mind. 
#2.Page Object Model is used keep the objects(web elements) and related functions(interactions) of a page in one class 
#3.Test data is maintained in testdata.json which give advantages in terms of readability, code minimization, maintenance 

# Advantages
 Its a properly layered framework means every layer has its own functionalities

#Data Layer (fixtures)
	a. Data will be read from fixtures>testdata.json and provide it to the testcases
  b. cypress.json to maintain project config data
  
#testcases (integration>examples)
	a. Main purpose is to perform the tests
	b. support>commands contains all the reusable functions to be used to write testcases
	
			
#pageObjects layer(integration>pageObjects)
    a.The objects(web elements) and related functions(interactions) of a page in one class.
    b.The entire application is divided into different pages with their indivisual page objects and functions.
	 
#test Reports - Cypress dashboard Services gives you results and recordings of tests

#TODOs
Integrate tests with jenkins for CICD - pending
