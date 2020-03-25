/******************
 * YOUR CODE HERE *
 ******************/
const triple = function(num){
  return num * 3
}

const tripleAll = function(array){
  return array.map(triple)
}

const getNegativeValue = function(num){
  return num > 0 ? -1 * num : num

}

const negativeValues = function(array){
  return array.map(getNegativeValue)
}

const makeQuestion = function(str){
  return str + '?'
}

const questionings = function(array){
  return array.map(makeQuestion)
}

const getInitials = function(str){
  for (let i = 0;i < str.length; i++){
    return str[0]+str[str.indexOf(' ')+1]
  }
}

const changeToInitials = function(array){
  return array.map(getInitials)
}

const doubleIfEven = function(num){
  return num % 2 === 0 ? num *2 : num
}

const doubleEven = function(array){
  return array.map(doubleIfEven)
}

const titleCase = function(str){
  let result = ''
  for (let i = 0;i < str.length; i++){
    result+=(i===0 ? str[i].toUpperCase(): str[i].toLowerCase())
}return result
}

const titleCaseNames = function(array){
  return array.map(titleCase)
}

const doubleEveryOther = function(array){
  let result = []
  for (let i = 0;i < array.length; i++){
    result.push(i % 2 ===0 || i ===0 ? array[i]: array[i]*2)
} return result
}
// const doubleEveryOther =function(array){

//   return array.map(doubleIfEven(array.index)

// }
/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
