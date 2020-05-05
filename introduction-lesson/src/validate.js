module.exports = {
    usernameTest: function (input) {
        let regex = /^([a-zA-Z0-9]){5,}$/;
        return regex.test(input);
    },
    passwordTest: function (input) {
        let regex = /^[a-zA-Z0-9]{1,8}$/;
        return regex.test(input);
    }
};