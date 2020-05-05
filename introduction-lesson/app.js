const identity = require('./src/identity')
const { usernameTest, passwordTest } = require('./src/validate')

console.log(identity)
console.log(usernameTest('arkademytest'))
console.log(passwordTest('arkademy'))