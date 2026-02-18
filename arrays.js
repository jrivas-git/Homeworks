const myArray = [1, 2, 3]

myArray.push(4)
console.log(myArray)

const lastItem = myArray.pop()
console.log(lastItem, myArray)

myArray.unshift(0)
console.log(myArray)

const firstItem = myArray.shift()
console.log(firstItem, myArray)

const myArray2 = [4, 5, 6]
const myArray3 = myArray.concat(myArray2)
console.log(myArray3)

const slicedArray = myArray3.slice(1, 4)
console.log(slicedArray)

const splicedArray = [...myArray3]
splicedArray.splice(2, 1, 99)
console.log(splicedArray)

const mappedArray = myArray3.map(x => x * 2)
console.log(mappedArray)

const filteredArray = myArray3.filter(x => x > 3)
console.log(filteredArray)

const foundItem = myArray3.find(x => x > 4)
console.log(foundItem)

const foundIndex = myArray3.findIndex(x => x > 4)
console.log(foundIndex)

const areEvery = myArray3.every(x => x > 0)
console.log(areEvery)

const areSome = myArray3.some(x => x > 5)
console.log(areSome)

const reducedValue = myArray3.reduce((acc, x) => acc + x, 0)
console.log(reducedValue)

console.log(myArray3.includes(3))

console.log(myArray3.indexOf(2))
console.log(myArray3.lastIndexOf(2))

console.log(myArray3.join(", "))

const reversedArray = [...myArray3].reverse()
console.log(reversedArray)

const unorderedArray = [3, 1, 4, 2]
unorderedArray.sort((a, b) => a - b)
console.log(unorderedArray)

const nestedArray = [1, [2, [3, 4]]]
const flatArray = nestedArray.flat(2)
console.log(flatArray)

myArray3.forEach(x => console.log(x))

const mySecondArray = myArray
mySecondArray.push(10)
console.log(myArray, mySecondArray)

const myThirdArray = [...myArray]
myThirdArray.push(20)
console.log(myArray, myThirdArray)