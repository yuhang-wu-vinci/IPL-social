const hasMinLength = (password) => {
    const MIN_LENGTH = 8;
    return password.length >= MIN_LENGTH;
};



module.exports = {
    hasMinLength,
    hasSpecialCharacter
};