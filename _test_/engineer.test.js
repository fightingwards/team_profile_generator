const Engineer = require("../lib/Engineer");

test("Can set constructor", () => {
    const engineer = new Engineer('Name', 4, 'test@test.com', 'testGitHub');
    expect(engineer.github) .toEqual(expect.any(String));
});

test("Can we get github", () => {
    const engineer = new Engineer('Name', 4, 'test@test.com', 'testGitHub');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("Can we get employee role", () => {
    const engineer = new Engineer('Name', 4, 'test@test.com', 'testGitHub');
    expect(engineer.getRole()).toEqual("Engineer");
});