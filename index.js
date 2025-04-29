// 1. update employe list
function Employee(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}
   
let employees = [
    new Employee("Nebu", "designer", 50000),
    new Employee("Merry", "developer", 60000),
    new Employee("Mahi", "developer", 65000),
    new Employee("Sami", "manager", 70000),
    new Employee("Yordi", "developer", 55000)
];

function salaryIncreased(employees){
    return employees.map(employee=>{
          if (employee["position"]=="developer"){
             return employee.salary=employee.salary+(employee.salary*0.1)
          }
          else{
              return employee.salary
          }
      })
  }
  console.log(salaryIncreased(employees))
  console.log(employees)


console.log('  ');

// 2. Filter and Sort Products
const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
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
    new User("alice123", "alice@mail.com", true),
    new User("bob456", "bob@mail.com", true),
    new User("charlie789", "charlie@mail.com", true),
    new User("dana234", "dana@mail.com", true),
    new User("edward567", "edward@mail.com", true)
];

users.forEach(user => {
    user.isActive = Math.random() > 0.5;
});
console.log("Active Users:");
users.forEach(user => {
    if (user.isActive) {
        console.log(user.username);
    }
});


// 5. Filter Destinations by Distance and Budget
const destinations = [
    { name: "Paris", distance: 1000, budgetRequired: 1200 },
    { name: "Rome", distance: 800, budgetRequired: 900 },
    { name: "London", distance: 1500, budgetRequired: 1100 },
    { name: "Berlin", distance: 600, budgetRequired: 700 },
    { name: "Amsterdam", distance: 400, budgetRequired: 600 }
];
function findAffordableDestinations(maxDistance, maxBudget) {
    const result = destinations.filter(dest =>
        dest.distance <= maxDistance && dest.budgetRequired <= maxBudget
    );
    return result.length > 0 ? result : "No destinations available under your budget and distance";
}
console.log("Affordable Destinations:", findAffordableDestinations(1000, 1000));
