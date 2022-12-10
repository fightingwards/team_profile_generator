const Manager = require('../lib/Manager');

test("Can set constructor", () => {
    const manager = new Manager('Name', 4, 'test@test.com', 1234);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Can we get office number", () => {
    const manager = new Manager('Name', 4, 'test@test,com', 4321);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Can we get employee role", () => {
    const manager = new Manager('Name', 4, 'test@test.com');
    expect(manager.getRole()).toEqual("Manager");
}); 