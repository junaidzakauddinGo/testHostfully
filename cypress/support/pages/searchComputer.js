export class search{
	getSearchField(){
		return cy.get('form')
	}
	getRowCount(){
		cy.get('tbody tr').each(($row) => {
			cy.wrap($row) 
			.find('td')
			.eq(0) 
			.invoke('text') 
			.should('contain', 'Acer')
		});
	}  
	getCompareCount(){
		cy.get('table tbody tr').its('length') .then((rowCount) => {
			cy.get('#main h1').invoke('text').then((text) => {
			const num = text.split(" ")[0]
			cy.wrap(num).as('num')
			cy.get('@num').should('contain', rowCount)
			})
		});
	}
}
  export const searchPOM = new search();