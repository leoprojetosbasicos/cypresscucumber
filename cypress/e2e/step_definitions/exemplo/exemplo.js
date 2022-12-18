/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import locators from "../../../support/locators"

/*OBS o objetivo e demonstrar apenas o conhecimento sobre os comandos PARTE RELATIVA como ORGANIZACAO ou IDEIAS de teste etc NAO E O MEU FOCO 
aqui o foco E APENAS EM COISAS OBEJTIVAS*/

let check;

Given(/^Que usuario está no site de treinamento$/, () => {
	cy.visit("/")
});

When(/^Usuario escolher o radio "([^"]*)"$/, (valor) => {
	check = valor
	switch(check){
		case '1':
			cy.get(locators.radiobutton.opcao1).click()
		break;
		case '2':
			cy.get(locators.radiobutton.opcao2).click()
		break;
		case '3':
			cy.get(locators.radiobutton.opcao3).click()
		default:
		break;	
	}
});

Then(/^A opcao desejada deve estar checada$/, () => {
	switch(check){
		case '1':
			cy.get(locators.radiobutton.opcao1).should('be.checked')
		break;
		case '2':
			cy.get(locators.radiobutton.opcao2).should('be.checked')
		break;
		case '3':
			cy.get(locators.radiobutton.opcao3).should('be.checked')
		default:
		break;
	}
});