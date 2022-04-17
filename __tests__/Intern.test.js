const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates intern object', ()=> {
    const intern = new Intern('Ansab', 30, 'ansab@sidiki.io', 'MSU');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('get school name', ()=> {
    const intern = new Intern('Ansab', 30, 'ansab@sidiki.io', 'MSU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role', ()=> {
    const intern = new Intern('Ansab', 30, 'ansab@sidiki.io', 'MSU');
    expect(intern.getRole()).toEqual("Intern");
});