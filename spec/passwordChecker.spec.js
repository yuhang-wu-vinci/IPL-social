const { hasMinLength } = require('../passwordChecker');


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