let test = "hhhhhellohhhh"

console.log(test.slice(0,5))
console.log(test.slice(10,test.length))

let firstHalf = test.slice(0,5)
let replace = "ass"
let secondHalf = test.slice(10,test.length)
console.log(test)
console.log(firstHalf + replace + secondHalf)