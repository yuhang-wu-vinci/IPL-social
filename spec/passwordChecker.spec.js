const { hasMinLength } = require('../passwordChecker');
const { hasSpecialCharacter } = require('../passwordChecker');
const { hasDigit } = require('../passwordChecker');
const { isValidPassword } = require('../passwordChecker');


//test de la taille du mdp
describe('hasMinLength', () => {
  it('devrait retourner true pour un mot de passe d\'une longueur supérieure ou égale à 8', () => {
    expect(hasMinLength('Valid123!')).toBe(true);
  });

  it('devrait retourner false pour un mot de passe d\'une longueur inférieure à 8', () => {
    expect(hasMinLength('Short1!')).toBe(false);
  });

  it('devrait retourner true pour un mot de passe exactement de 8 caractères', () => {
    expect(hasMinLength('12345678')).toBe(true);
  });

  it('devrait retourner false pour un mot de passe vide', () => {
    expect(hasMinLength('')).toBe(false);
  });
});


//test a un character spécial
describe('hasSpecialCharacter', () => {
    it('devrait retourner true si le mot de passe contient un caractère spécial', () => {
      expect(hasSpecialCharacter('Valid123!')).toBe(true);
    });
  
    it('devrait retourner false si le mot de passe ne contient pas de caractère spécial', () => {
      expect(hasSpecialCharacter('Valid123')).toBe(false);
    });
  
    it('devrait retourner true si le mot de passe contient plusieurs caractères spéciaux', () => {
      expect(hasSpecialCharacter('Valid!@#123')).toBe(true);
    });
  
    it('devrait retourner false pour un mot de passe vide', () => {
      expect(hasSpecialCharacter('')).toBe(false);
    });
  
    it('devrait retourner true si le mot de passe commence par un caractère spécial', () => {
      expect(hasSpecialCharacter('!Valid123')).toBe(true);
    });
  
    it('devrait retourner true si le mot de passe se termine par un caractère spécial', () => {
      expect(hasSpecialCharacter('Valid123!')).toBe(true);
    });
  });

//test a un chiffre
describe('hasDigit', () => {
  it('devrait retourner true si le mot de passe contient un chiffre', () => {
    expect(hasDigit('Valid123!')).toBe(true);
  });

  it('devrait retourner false si le mot de passe ne contient pas de chiffre', () => {
    expect(hasDigit('Valid!')).toBe(false);
  });

  it('devrait retourner true si le mot de passe contient plusieurs chiffres', () => {
    expect(hasDigit('Valid123')).toBe(true);
  });

  it('devrait retourner false pour un mot de passe vide', () => {
    expect(hasDigit('')).toBe(false);
  });

  it('devrait retourner true si le mot de passe commence par un chiffre', () => {
    expect(hasDigit('1Valid!')).toBe(true);
  });

  it('devrait retourner true si le mot de passe se termine par un chiffre', () => {
    expect(hasDigit('Valid!1')).toBe(true);
  });
});


// test mot de passe est valide
describe('isValidPassword', () => {
  it('devrait retourner true pour un mot de passe valide', () => {
    expect(isValidPassword('Valid123!')).toBe(true);
  });

  it('devrait retourner false si le mot de passe est trop court', () => {
    expect(isValidPassword('Short1!')).toBe(false);
  });

  it('devrait retourner false si le mot de passe n\'a pas de caractère spécial', () => {
    expect(isValidPassword('Valid123')).toBe(false);
  });

  it('devrait retourner false si le mot de passe n\'a pas de chiffre', () => {
    expect(isValidPassword('Valid!@')).toBe(false);
  });

  it('devrait retourner false si le mot de passe contient "IPL"', () => {
    expect(isValidPassword('IPLP@ssword123')).toBe(false);
  });

  it('devrait retourner true pour un mot de passe avec des caractères spéciaux, des chiffres et une longueur suffisante', () => {
    expect(isValidPassword('Passw0rd!')).toBe(true);
  });

  it('devrait retourner false pour un mot de passe vide', () => {
    expect(isValidPassword('')).toBe(false);
  });

  it('devrait retourner true pour un mot de passe avec des caractères spéciaux et des chiffres au début et à la fin', () => {
    expect(isValidPassword('!Passw0rd!')).toBe(true);
  });
});