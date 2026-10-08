// Question 1: ES6 features
const lowerCaseWords = (values) => new Promise((resolve, reject) => {
  if (!Array.isArray(values)) {
    reject(new TypeError('Input must be an array'));
    return;
  }
  resolve(values.filter((value) => typeof value === 'string').map((word) => word.toLowerCase()));
});

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
  .then((words) => console.log(words))
  .catch((error) => console.error(error.message));
