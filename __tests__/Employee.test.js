const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

//employee object
test('creates employee object', ()=> {
    const employee = new Employee('Ansab', 30, 'ansab@sidiki.io')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

//getName
test('get employee name', ()=> {
    const employee = new Employee('Ansab', 30, 'ansab@sidiki.io')
    expect(employee.getName()).toEqual(expect.any(String));
});

//getId
test('get employee id', ()=> {
    const employee = new Employee('Ansab', 30, 'ansab@sidiki.io')
    expect(employee.getId()).toEqual(expect.any(Number));
});

//getEmail
test('get employee email', ()=> {
    const employee = new Employee('Ansab', 30, 'ansab@sidiki.io')
    expect(employee.getEmail()).toEqual(expect.any(String));
});

//getRole
test('get employee role', ()=> {
    const employee = new Employee('Ansab', 30, 'ansab@sidiki.io')
    expect(employee.getRole()).toEqual('Employee');
});