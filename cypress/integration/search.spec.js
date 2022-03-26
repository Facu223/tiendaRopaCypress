describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("search for elements with multiple results", () => {
    cy.search("dress")
    cy.search("hat")
  });

  it("search for elements with no results", () => {
    cy.noResult("qwerty")
    cy.noResult("hola")
    cy.noResult("como te va")
  });
});
