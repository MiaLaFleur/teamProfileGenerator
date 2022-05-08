const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Mia LaFleur', '12345678', 'miajl@yahoo.com', 'Southern Methodist University');

    expect(intern.name).toEqual('Mia LaFleur');
    expect(intern.id).toEqual('12345678');
    expect(intern.email).toEqual('miajl@yahoo.com');
    expect(intern.school).toEqual('Southern Methodist University');
});

test("gets Intern's school", () => {
    const intern = new Intern('Mia LaFleur', '12345678', 'miajl@yahoo.com', 'Southern Methodist University');

    expect(intern.getSchool()).toEqual('Southern Methodist University');
});

test("gets Intern's role", () => {
    const intern = new Intern('Mia LaFleur', '12345678', 'miajl@yahoo.com', 'Southern Methodist University');

    expect(intern.getRole()).toEqual('Intern');
});
