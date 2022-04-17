const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates Manager object', ()=> {
    const manager = new Manager('Ansab', 30, 'ansab@sidiki.io', 11312);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

//getRole
test('get role', ()=> {
    const manager = new Manager('Ansab', 30, 'ansab@sidiki.io', 11312);
    expect(manager.getRole()).toEqual("Manager");
})