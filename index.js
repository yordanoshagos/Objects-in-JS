// 1. update employe list
function Employee(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}
   
let employees = [
    new Employee("Nebu", "designer", 40000),
    new Employee("Merry", "developer", 62000),
    new Employee("Mahi", "developer", 68000),
    new Employee("Sami", "manager", 72000),
    new Employee("Yordi", "developer", 65000)
];

function salaryIncreased(employees){
    for (let employee of employees){
          if (employee.position == "developer"){
           employee.salary += employee.salary*0.1
          }
      }
      return employees
  }
  console.log(salaryIncreased(employees))

console.log('  ');

// 2. Filter and Sort Products
const products = [
    { name: "RAM", price: 1200, inStock: true },
    { name: "Speaker", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Wifi cable", price: 10, inStock: false }
];

function sortedProducts(products){
    return products
            .filter(product => product.inStock)
            .sort((a,b)=> a.price - b.price);
}
console.log(sortedProducts(products));

console.log('  ');


// 3. Grades Object with Pass or Fail
const grades = {
    Louie: [95, 74, 82],
    Sari: [70, 55, 60],
    Fana: [92, 78, 85],
    Ruby: [53, 66, 58]
}

function studentsAverage(grades){
    for (let student in grades){
        let scores = grades[student];
        let average = scores.reduce((acc, cv) => acc + cv)/ scores.length;
        let studentResult = average >  70 ? "Pass" : "Fail" ;

        console.log(`${student}: Avrage: ${average} and the student: ${studentResult}`);    
    }
}
studentsAverage(grades);
console.log('  ');

// 4. User Constructor and Deactivation
function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}
let users = [
    new User("merry1223", "merry@mail.com", true),
    new User("nebu21", "nebu@mail.com", true),
    new User("melat719", "melat@mail.com", false),
    new User("sari23", "sari@mail.com", true),
    new User("dave567", "dave@mail.com", false)
];

users.forEach(user => {
    if (user.isActive) {
        console.log(user.username);
    }
});

console.log('  ');
// 5. Filter Destinations by distance and budget
const destinations = [
    { name: "Paris", distance: 500, budgetRequired: 1500 },
    { name: "Netherlands", distance: 1800, budgetRequired: 800 },
    { name: "Johannesburg", distance: 400, budgetRequired: 650 },
    { name: "New York", distance: 800, budgetRequired: 850 },
    { name: "Amsterdam", distance: 300, budgetRequired: 500 }
];
function findsAffordableDestination(maxDistance, maxBudget) {
    const result = destinations.filter(destin =>
        destin.distance <= maxDistance && destin.budgetRequired <= maxBudget
    );
    return result.length > 0 ? result : "No destinations available for your budget and distance";
}
console.log("Affordable Destinations:", findsAffordableDestination(1000, 1000));
