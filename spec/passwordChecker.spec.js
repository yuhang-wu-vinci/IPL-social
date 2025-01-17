const { hasMinLength } = require('../passwordChecker');
const { hasSpecialCharacter } = require('../passwordChecker');


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