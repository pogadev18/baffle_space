const functions = require('firebase-functions');

const randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);

  response.send(number.toString());
});

const sayHello = functions.https.onCall((data, context) => {
  return 'hello, sir!';
});

module.exports = {
  randomNumber,
  sayHello,
};
