// import employee constructor
const Employee = require("./Employee");

// engineer constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    getRole () {
        return "Engineer";
    }

    getGithub () {
        return this.github;
    }
}

module.exports = Engineer; 