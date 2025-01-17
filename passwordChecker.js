const hasMinLength = (password) => {
    const MIN_LENGTH = 8;
    return password.length >= MIN_LENGTH;
};

const hasSpecialCharacter = (password) => {
    const SPECIAL_CHAR_PATTERN = /[!@#$%^&*(),.?":{}|<>]/;
    return SPECIAL_CHAR_PATTERN.test(password);
};

const hasDigit = (password) => {
    const DIGIT_PATTERN = /\d/;
    return DIGIT_PATTERN.test(password);
};

const isValidPassword = (password) => {
    // Vérifier si le mot de passe contient "IPL" dans n'importe quelle casse
    if (/[iI][pP][lL]/.test(password)) {
        return false;
    }

    return hasMinLength(password) && hasSpecialCharacter(password) && hasDigit(password);
};

module.exports = {
    hasMinLength,
    hasSpecialCharacter,
    hasDigit,
    isValidPassword
};