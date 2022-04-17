const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates engineer object', ()=> {
    const engineer = new Engineer('Ansab', 30, 'ansab@sidiki.io', 'asidiki')
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

//getGitHub
test('engineer github string', ()=> {
    const engineer = new Engineer('Ansab', 30, 'ansab@sidiki.io', 'asidiki')
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//getRole
test('gets employee role', () => {
    const engineer = new Engineer('Ansab', 30, 'ansab@sidiki.io', 'asidiki');

    expect(engineer.getRole()).toEqual("Engineer");
});