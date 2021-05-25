export const replaceEspeciais = (str) => {
  if (str === null) {
    return '';
  }

  const especiais = [
    { char: '', base: /[./_@+=() R$-]/g },
  ];

  return especiais.reduce((str, letter) => str.replace(letter.base, letter.char), str);
};
