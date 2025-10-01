// Step 2: Creating a Class
class Employees {
    constructor (name, deparment) {
        this.name = name
        this.deparment = deparment
    }
    describe () {
        `${this.name} works in the ${this.deparment}.`
    }
} 
// Step 3: Creating a subclass
class Manager extends Employees {
    constructor (name, deparment, teamSize) {
        super (name, deparment)
        this.teamSize = teamSize
    }
    describe () {
        `${this.name} is the manager for the ${this.deparment} and has a team size of ${this.teamSize}.`
    }
}