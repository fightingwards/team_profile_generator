const Employee = require("../lib/Employee");

test("Can set constructor", () => {
    const employee = new Employee('Name', 4, 'test@test.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Can we get employee name", () => {
    const employee = new Employee('Name', 4, 'test@test.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("Can we get employee ID", () => {
    const employee = new Employee('Name', 4, 'test@test.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("Can we get employee email", () => {
    const employee = new Employee('Name', 4, 'test@test.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("Can we get employee role", () => {
    const employee = new Employee('Name', 4, 'test@test.com');
    expect(employee.getRole()).toEqual("Employee");
}); 