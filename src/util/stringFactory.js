export const replaceEspecials = (str) => {
  if (str === null) {
    return '';
  }

  const especials = [
    { char: '', base: /[./_@+=() R$-]/g },
  ];

  return especials.reduce((str, letter) => str.replace(letter.base, letter.char), str);
};
