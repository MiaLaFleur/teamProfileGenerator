const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Jide Adesanya', '93405723', 'JAdesanya@gmail.com', 'JideAde');

    expect(engineer.name).toEqual('Jide Adesanya');
    expect(engineer.id).toEqual('93405723');
    expect(engineer.email).toEqual('JAdesanya@gmail.com');
    expect(engineer.github).toEqual('JideAde');
});

test("gets Engineer's gitub", () => {
    const engineer = new Engineer('Jide Adesanya', '93405723', 'JAdesanya@gmail.com', 'JideAde');

    expect(engineer.getGithub()).toEqual('JideAde');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer('Jide Adesanya', '93405723', 'JAdesanya@gmail.com', 'JideAde');

    expect(engineer.getRole()).toEqual('Engineer');
});

