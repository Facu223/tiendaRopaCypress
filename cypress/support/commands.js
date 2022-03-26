Cypress.Commands.add("search", (element) => {
  cy.fixture("index.json").then((locator) => {
    cy.get(locator.searchBox).type(element);
    cy.get(locator.searchButton).click();
    cy.get(locator.searchBox).clear();
  });

  cy.fixture("searchResult.json").then((locator) => {
    cy.get(locator.title).should("contain", element);
  });
});

Cypress.Commands.add("noResult", (element) => {
  cy.fixture("index.json").then((locator) => {
    cy.get(locator.searchBox).type(element);
    cy.get(locator.searchButton).click();
    cy.get(locator.searchBox).clear();
  });

  cy.fixture("searchResult.json").then((locator) => {
    cy.get(locator.alert).should("contain", element);
  });
});
