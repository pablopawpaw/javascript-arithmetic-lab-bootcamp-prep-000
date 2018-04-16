console.log(1 + 80)
console.log(60 - 40)
console.log(2 * 3.4)
console.log(5.0 / 2.5)

var number = 5
number++
console.log(number)
number--
console.log(number)

number = 5
number += 3
console.log(number)
number -= 2
console.log(number)
number *= 10
console.log(number)
number /= 5 
console.log(number)

var number = 10
function add5() {
  number +=5
}
function divideBy3() {
  number /=3
}
divideBy3()
console.log(number)
add5()
console.log(number)
number = 10
add5()
console.log(number)
divideBy3()
console.log(number)

console.log(parseInt('2',10))
console.log(parseFloat('80.123999'))