console.log('index.js');

// cia sukeliam savo funkcijas

// audrius fn start
const calcMultiplyArr = (numArr) => {
  const result = numArr.reduce((acu, num) => num * acu);
  return result;
};
// audrius fn end

// marius fn start
const sum3 = (a, b, c) => {
  const sum = a + b + c;
  console.log('sum: ', sum);
  return sum;
};
// marius fn end

// tadas fn start
function multiply(a, b) {
  return a * b;
}
// tadas fn end

// rokas fn start
function sum(a, b, c) {
  console.log(`skaiciu suma yra ${a + b + c}`);
  return a + b + c;
}
// rokas fn end


// aleksandra fn start
function average(a, b, c) {
  return (a + b + c) / 3;
}
// aleksandra fn end