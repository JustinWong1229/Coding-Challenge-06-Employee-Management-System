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

    const emp1 = new Employee ("Tim", "Finace")
    const emp2 = new Employee ("Jackson","IT")
    const emp3 = new Employee ("Jen", "Biology")


    

    const man1 = new Manager ("Rick", "Finace", 7)
    const man2 = new Manager ("Peter", "IT", 5)
    const man3 = new Manager ("Adrian", "Biology", 6)


// Step 5: Creating another class
class Company {
    constructor() {
        this.employees = []

    }
    addEmployee(employees) {
        return this.employees.push(employees)
    }

    listEmployees() {
        for (const emp of this.employees) {
            console.log(emp.describe());
            
            
        }
    }
}



// Step 6: Instantiating a class
const company = new Company ()
company.addEmployee(emp1)
company.addEmployee(emp2)
company.addEmployee(emp3)
company.addEmployee(man1)
company.addEmployee(man2)
company.addEmployee(man3)

company.listEmployees();



