// Question 2: Promises
const resolvedPromise = () => new Promise((resolve) => {
  setTimeout(() => resolve({ message: 'delayed success!' }), 500);
});

const rejectedPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => reject({ error: 'delayed exception!' }), 500);
});

resolvedPromise().then((result) => console.log(result)).catch(console.error);
rejectedPromise().then(console.log).catch((error) => console.error(error));
