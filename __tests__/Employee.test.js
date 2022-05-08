const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Dave Davis', '48592376', 'dave.davis@gmail.com');

    expect(employee.name).toEqual('Dave Davis');
    expect(employee.id).toEqual('48592376');
    expect(employee.email).toEqual('dave.davis@gmail.com');
});

test("gets the employee's name", () => {
    const employee = new Employee('Dave Davis', '48592376', 'dave.davis@gmail.com');

    expect(employee.getName()).toBe('Dave Davis');
});

test("gets the employee's id", () => {
    const employee = new Employee('Dave Davis', '48592376', 'dave.davis@gmail.com');

    expect(employee.getId()).toBe('48592376');
});

test("gets the employee's email", () => {
    const employee = new Employee('Dave Davis', '48592376', 'dave.davis@gmail.com');
    
    expect(employee.getEmail()).toBe('dave.davis@gmail.com');
});

test("gets the employee's role", () => {
    const employee = new Employee('Dave Davis', '48592376', 'dave.davis@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});