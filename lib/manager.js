// importing Employee constructor 
const Employee = require("./Employee");

// manager constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
      }
}

module.exports = Manager; 