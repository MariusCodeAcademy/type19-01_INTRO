const calcMultiplyArr = (numArr) => {
  const result = numArr.reduce((acu, num) => num * acu);
  return result;
};

calcMultiplyArr([2, 4, 6]);
