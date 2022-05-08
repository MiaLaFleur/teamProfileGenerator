const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Brittney Britton', '39482756', 'bbritton@yahoo.com', '9034567734');

    expect(manager.name).toEqual('Brittney Britton');
    expect(manager.id).toEqual('39482756');
    expect(manager.email).toEqual('bbritton@yahoo.com');
    expect(manager.officeNumber).toEqual('9034567734');
});

test("gets manager's role", () => {
    const manager = new Manager('Brittney Britton', '39482756', 'bbritton@yahoo.com', '9034567734');

    expect(manager.getRole()).toBe('Manager');
});