const hasMinLength = (password) => {
    const MIN_LENGTH = 8;
    return password.length >= MIN_LENGTH;
};

const hasSpecialCharacter = (password) => {
    const SPECIAL_CHAR_PATTERN = /[!@#$%^&*(),.?":{}|<>]/;
    return SPECIAL_CHAR_PATTERN.test(password);
};

module.exports = {
    hasMinLength,
    hasSpecialCharacter
};