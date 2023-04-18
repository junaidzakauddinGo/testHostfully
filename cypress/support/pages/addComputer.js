export class computer{
	getAddNewComputerButton(){
		return cy.get('#add')
	}
	getPageTitle(){
		return cy.get('#main > h1')
	}
	getComputerName(){
		return cy.get('.clearfix').eq(0)
	}
	getIntroducedDate(){
		return cy.get('.clearfix').eq(1)
	}
	getDiscontinuedDate(){
		return cy.get('.clearfix').eq(2)
	}
	getCompany(){
		return cy.get('.clearfix').eq(3)
	}
	getSubmitButton(){
		return cy.get('[type="submit"]')
	}
	getCancelButton(){
		return cy.get('a.btn')
	}
	getURL(){
		return cy.url()
	}
}
export const computerPOM = new computer();
