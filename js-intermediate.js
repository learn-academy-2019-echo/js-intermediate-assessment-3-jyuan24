// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(`
Problem 1
`)

var getFib = () => {
  let fibo =[]
  let fiboValue = 1
  for (let i = 0; i < 10; i++) {
    if (i === 0) {
      fibo.push(fiboValue)
    }
    else {
      fibo.push(fiboValue)
      fiboValue = fiboValue + fibo[i-1]
    }
  }
  return fibo
}
console.log(getFib())



// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.
console.log(`
Problem 2
`)

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

var oddChecker = (array) => {
  let newArr = array.filter(element => typeof(element) === "number" && element % 2 !== 0)
  return newArr
}
console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))



// 3. Given the object below, complete the console.log to find specific information:
console.log(`
Problem 3
`)

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])



// 4. Write a function that takes in an array and returns an array in reverse order.
console.log(`
Problem 4
`)

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

var arrayReverse = (array) => {
  let newArr = array.reverse()
  return newArr
}
console.log(arrayReverse(originalArray1))
console.log(arrayReverse(originalArray2))



// 5. Write the code that would make this test pass.
console.log(`
Problem 5
`)

// describe("multTwo", () => {
//     test ("returns an array with all the numbers multiplied by two", () => {
//         expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
//         expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
//         expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

var multTwo = (array) => {
  let newArr = array.map(element => element * 2)
  return newArr
}
console.log(multTwo([3,4,5]))
console.log(multTwo([23,-9,0]))
console.log(multTwo([4.5,-4.5,12]))



// 6. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.
console.log(`
Problem 6
`)

var ourString = "Hello Learn Students!"
// Expected output: 3

var letterCounter = (string) => {
  let array = string.split('')
  let newArr = array.filter(element => element.toLowerCase() === "l")
  return newArr.length
}
console.log(letterCounter(ourString))



// 7. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
console.log(`
Problem 7
`)

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

var middleLetters = (string) => {
  if (string.length % 2 !== 0) {
    let index = Math.floor(string.length / 2)
    return string[index]
  }
  else {
    let index1 = (string.length / 2) - 1
    let index2 = string.length / 2
    return string[index1] + string[index2]
  }
}
console.log(middleLetters(middleLetters1))
console.log(middleLetters(middleLetters2))



// 8. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
console.log(`
Problem 8
`)

var spheres = {
  rad1: 5,
  rad2: 10,
  rad3: 20
}
var areaSphere = (radius) => {
  return (4 * Math.PI * Math.pow(radius, 2))
}
console.log(areaSphere(spheres.rad1))
console.log(areaSphere(spheres.rad2))
console.log(areaSphere(spheres.rad3))



// 9. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.
console.log(`
Problem 9
`)

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

function specsAre({specs: {doors: quantity, transmission: stickOrAuto}}) {
  return `${quantity}, ${stickOrAuto}`
}
console.log(specsAre(myCar))



// 10. STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
console.log(`
Problem 10
`)

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

var accumArray = (array) => {
  let newArr = []
  if (array.length === 0) {
  }
  else {
    newArr.push(array[0])
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i] + newArr[i-1])
    }
  }
  return newArr
}
console.log(accumArray(numbersToAdd1))
console.log(accumArray(numbersToAdd2))
console.log(accumArray(numbersToAdd3))