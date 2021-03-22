describe('test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testappcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('attempt-four-test-app-component').should('exist');
  });
});
