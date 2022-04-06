describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login with wrong email", () => {
    cy.wrongEmail("Robertito", "other", "Invalid email address")
  });
});
