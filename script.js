//console.log("hello");
//function add(a,b)
//{
//return a + b;
//}
//var result = add(3,8);
//console.log(result);

//1.Print odd numbers in an array


// function oddnum(numbers) {
//   var splitedNumbers = numbers.split(",");
//   console.log(splitedNumbers);
//   var count = splitedNumbers.length;
//   console.log(count);
//   var kResult = []
//   for (let i = 0; i < count; i++) {
//     if (numbers[i] % 2 != 0) {
//       kResult.push(numbers[i]);
//     }
//   }
//   return kResult;
// }
// var numbers = window.prompt('Enter numbers with comm:');
// console.log(numbers);

// console.log(oddnum(numbers));


//1.Print The Odd Numbers in An Array:

//1st Method
//Anonyomus Function

const array = [11, 33, 57, 34, 10];
const result = [];
function odd(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(odd(array));






//IIFT (Immediately Invoked Function Expression)

//2nd Method

(function odd(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      result.push(array[i]);
    }
  }
  console.log(result);
})([12, 13, 14, 15, 16]);




//Arrow Function (ES6)
//3rd Method


const oddnum = (array) => {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(oddnum([12, 23, 34, 45, 56, 67, 98, 21]));








//2.Convert all the strings to title caps in a string array 


//1st Method
//Anonyomus Function


let mymsg = 'convert all string to title caps in a string array';

function titlecase(msg) {
  // let step1 = msg.split(' ');
  // let step2 = step1.map(Word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
  // let step3 = step2.join(' ');
  // console.log(step3);
  var res = [];
  res.push(msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' '));
  return res;
}
console.log(titlecase(mymsg));






//IIFT (Immediately Invoked Function Expression)

//2nd Method


(function titlecase(msg) {
  var result = [];
  {
    result.push(msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' '));
  }

  console.log(result);
})('convert all string to title caps in a string array');



//Arrow Function (ES6)
//3rd Method

let case1 = (titlecase) => {

  var result1 = [];
  result1.push(titlecase.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' '));
  return result1;
};
console.log(case1('convert all string to title caps in a string array'));



// addnum
// function AddNumber() {
//   const input = window.prompt('Enter numbers in comma seprated.')
//   const result = input.split(',')
//     .map(i => parseInt(i))
//     .reduce((a, b) => a + b, 0)
//   return {
//     result,
//     type: typeof input
//   }
// }



//3.Sum of all numbers in an array 





//1st Method
//Anonyomus Function

let sum2 = [12, 23, 45, 67, , 98, 90, 56];

function addsum(accumulator, currentVal) {

  // console.log("previosVal", previousVal);
  // console.log("currentVal", currentVal);

  return accumulator + currentVal;

}
let totalsum2 = sum2.reduce(addsum, 0)

console.log("totalsum 1 is:", totalsum2);








//IIFT (Immediately Invoked Function Expression)

//2nd Method


// let sum = [12,23,45,67,,98,90,56];

// let totalsum = sum.reduce(function (accumulator, currentVal) {

// console.log("previosVal", previousVal);
// console.log("currentVal", currentVal);

//    return accumulator + currentVal

// },0);
// console.log("totalsum 2 is:",totalsum);








//Arrow Function (ES6)
//3rd Method


let sum3 = [12, 23, 45, 67, , 98, 90, 56];


const addsum1 = (accumulator, currentVal) => accumulator + currentVal;

let totalsum3 = sum3.reduce(addsum, 0)

console.log("totalsum 3 is:", totalsum3);







