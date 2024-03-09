export default {
  generateNewPassword: function () {
    const numbers = '0123456789';
    const smallCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const bigCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()';
    return (
      numbers.charAt(Math.floor(Math.random() * 10)) +
      smallCharacters.charAt(Math.floor(Math.random() * 26)) +
      numbers.charAt(Math.floor(Math.random() * 10)) +
      bigCharacters.charAt(Math.floor(Math.random() * 26)) +
      smallCharacters.charAt(Math.floor(Math.random() * 26)) +
      specialCharacters.charAt(Math.floor(Math.random() * 10)) +
      bigCharacters.charAt(Math.floor(Math.random() * 26)) +
      numbers.charAt(Math.floor(Math.random() * 10))
    );
  },
  randomIntegerOtp: function () {
    return Math.floor(1000 + Math.random() * 9000);
  }
};
