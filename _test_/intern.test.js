const Intern = require("../lib/Intern");
  
test("Can set constructor", () => {
    const intern = new Intern('Name', 4, 'test@test.com', 'school');
    expect(intern.school) .toEqual(expect.any(String));
});

test("Can we get interns school", () => {
    const intern = new Intern('Name', 4, 'test@test.com', 'school');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("Can we get role", () => {
    const intern = new Intern('Name', 4, 'test@test.com', 'school');
    expect(intern.getRole()).toEqual("Intern");
}); 