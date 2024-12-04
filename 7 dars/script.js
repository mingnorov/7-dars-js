//let name =['berik', 'murot', 'ramz'];
//alert(name[0]);
//alert(name[1]);
//alert(name[2] = 'Javlon');
//alert(name[3] = 'doni');
//alert([name.at(-1)]);//oxrini sozini chiqaradi

//metodlar //
// pop//
//let name =['berik', 'murot', 'ramz'];
//alert(name.pop()); //ohirdigini ochiradi
//alert(name);

//push// qoshish oxirgi elementni

//let name =['berik', 'murot', 'ramz'];
//name.push ('Javlon');
//alert(name);

//shift// oldingi elementni ochirvoradi

//let name =['berik', 'murot', 'ramz'];
//alert(name.shift())

//unshift oldida element qoshish

//et name =['berik', 'murot', 'ramz'];
//ame.unshift('javlon');
//lert(name);

//zadacha

// let name =['doni'];
// name.push ('shaxlo', 'aziza', 'muslima');
// name.unshift ('zulayho', 'soliha', 'fotima');
// alert(name);

//2 zadacha

// let numbers = [5, 10, 15, 20, 25];
// let admin = numbers.indexOf(15);
// alert(admin); 

// 3 zadacha

// let abc = ["a", "b", "c"];
// alert(abc.join('-'));

// join qoshib tere qoshib beraadi 

const numbers = [2, 4, 9, 10, 45, 67, 8, 90];
const evenNumbers = [];
let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
  i++;
}
console.log("Juft sonlar:", evenNumbers);