describe('ui-test', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testlibcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('attempt-four-test-lib-component').should('exist');
  });
});
