/// <reference types="cypress" />

describe("AHUB", () => {
  beforeEach(() => {});

  it("ABRIR HOME E CHECK SE EXISTE POP E TECH E LINK", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.contains("A HUB É POP");
    cy.wait(400);
    cy.contains("A HUB É TECH");
    cy.wait(400);
    cy.contains("QUERO FAZER PARTE");
    cy.wait(400);
    cy.get(".discord_btn")
      .invoke("attr", "href")
      .then((href) => {
        cy.get(`[href="${href}"]`).should("have.length", 3);
      });
  });

  it("ABRIR PAGINA DO DISCORD", () => {
    cy.visit("/");
    cy.get(".discord_btn").click();
    // Convite Inválido
  });

  it("ABRIR BLOG", () => {
    cy.visit("/");
    cy.get('[href="https://blog.ahub.tech/"]').click();
  });

  it("ABRIR GITHUB ", () => {
    cy.visit("/");
    cy.get('[href="https://github.com/aHub-Tech"]').click();
  });
});
