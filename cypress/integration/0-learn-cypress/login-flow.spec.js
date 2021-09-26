/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */

describe("Positive Test User Login Case", () => {
  it("User visit login page!", () => {
    cy.visit('http://localhost:3000/')
  });
  it('User should see form login', () => {
    cy.get('[ data-qa-id="input-username" ]').should('have.length',1)
    cy.get('[ data-qa-id="input-password" ]').should('have.length',1)
  })
  it('User should see button login', () => {
    cy.get('[ data-qa-id="btn-login" ]').should('have.length',1)
  })
  it('User fill form login', () => {
    cy.get('[ data-qa-id="input-username" ]').type("ablakubluk@yopmail.com")
    cy.get('[ data-qa-id="input-password" ]').type("12345678")
  })
  it('User click button login', () => {
    cy.get('[ data-qa-id="btn-login" ]').click()
  })
  
  it('User should redirect to unit kerja beranda', () => {
    cy.wait(2000)
    cy.url().should('include', '/unitkerja-beranda')
  })
});

describe("Negative Test User Login Case", () => {
  it("User visit login page!", () => {
    cy.visit('http://localhost:3000/')
  });
  it('User should see form login', () => {
    cy.get('[ data-qa-id="input-username" ]').should('have.length',1)
    cy.get('[ data-qa-id="input-password" ]').should('have.length',1)
  })
  it('User should see button login', () => {
    cy.get('[ data-qa-id="btn-login" ]').should('have.length',1)
  })
  it('User fill form login with wrong username', () => {
    cy.get('[ data-qa-id="input-username" ]').type("emailasal@gmail.com")
    cy.get('[ data-qa-id="input-password" ]').type("12345678")
  })
  it('User click button login', () => {
    cy.get('[ data-qa-id="btn-login" ]').click()
  })
  
  it('User should see error message', () => {
    cy.wait(2000)
    cy.get('[ data-qa-id="error-login-message" ]').should('have.length',1)
  })
});