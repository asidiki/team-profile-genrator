const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

//employee object
test('creates employee object', ()=> {
    const employee = new Employee('Ansab', 30, 'ansab@sidiki.io')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});