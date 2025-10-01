// Step 2: Creating a Class
class Employee {
    constructor (name, department) {
        this.name = name
        this.department = department
    }
    describe () {
      return  `${this.name} works in the ${this.department} department.`;
    }
} 
// Step 3: Creating a subclass
class Manager extends Employee {
    constructor (name, department, teamSize) {
        super (name, department)
        this.teamSize = teamSize
    }
    describe () {
       return `${this.name} is the manager of the ${this.department} department, and has a team size of ${this.teamSize}.`
    }
}
// Step 4: Creating Instances 
const employees = [
    new Employee ("Tim", "Finnace"),
    new Employee ("Jackson","IT"),
    new Employee ("Jen", "Biology"),
];
for (const emp of employees) {
    console.log(emp.describe());
    
}
const managers = [
    new Manager ("Rick", "Finnace", 7),
    new Manager ("Peter", "IT", 5),
    new Manager ("Adrian", "Biology", 6),
];
for (const man of managers) {
    console.log(man.describe());
    
}