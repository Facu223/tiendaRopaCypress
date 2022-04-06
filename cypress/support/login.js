Cypress.Commands.add("wrongEmail", (email, password, result) => {
    cy.fixture("login.json").then((locator) => {
      cy.get(locator.loginButton).click();
      cy.get(locator.email).type(email);
      cy.get(locator.password).type(password);
      cy.get(locator.submitButton).click();
      cy.get(locator.result).should("contain", result);
    });
  });