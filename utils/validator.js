validator.js:
const validator = {
  validateEmail: (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
  validatePassword: (password) => {
    // Password validation logic here
    return password.length >= 8;
  },
  validateUsername: (username) => {
    // Username validation logic here
    return username.length >= 3;
  },
};

module.exports = validator;