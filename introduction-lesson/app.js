const data = require('./src/identity')
const { usernameTest, passwordTest } = require('./src/validate')

for (key in data) {
    console.log(data[key])
}
console.log('Validate username : ', usernameTest('arkademytest'))
console.log('Password username : ', passwordTest('arkademy'))