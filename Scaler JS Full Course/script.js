// const isEven = (x) => {
//     return x%2 === 0;
// }

// const checkEven = (evenFn, num) => {
//     const isNumEven = evenFn(num);
//     if (isNumEven) console.log(`${num} is even`);
//     else console.log(`${num} is not even`);
// }

// // call the function
// checkEven(isEven, 10);

// const transactions = [1000, 2000, 3000, 4000, -898, 3800, -4500]

// const depositedAmount = transactions.filter((amount) => {
//     return amount > 0;
// })

// console.log(depositedAmount);

// const nums = [2, 3, 4, 8, 10, 12];

// // we want to get the product of each element in the array
// const product = nums.reduce((prod, x)=>{
//     // return the product of each elt
//     return prod*x;
// }, 1);

// console.log(product);

// const result = [1, 2, 3, 4, 5]
//   .filter(n => n % 2 === 0)
//   .map(n => n * 2)
//   .join(', ');

// console.log(result);

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

// // From the transactions array, calculate the total deposited amount
// // First filter out the positive elements from the array and then sum them up : filter and reduce
// const depositedAmount = transactions.filter((transaction) => {
//     return transaction > 0;
// }).reduce(function(sum, amount){
//     return sum + amount;
// }, 0)

// console.log(depositedAmount);

// method inheritance

// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     // welcome method
//     welcome() {
//         console.log(`Welcome ${this.name} !`);
//     }
// };

// class Teacher extends Person {
//     constructor(_name, _age, _department) {
//         super(_name, _age);
//         this.department = _department;
//     }
// };

// let Teacher1 = new Teacher('Mark Twain', 23, 'CSE');

// Teacher1.welcome();

// For Detailed Notes - Refer Notebook.