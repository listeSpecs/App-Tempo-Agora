export const regex = {
  not_digits: /[^0-9]+/gi,
  postal: /^(\d{5})-?(\d{1,3})/,
};

export const cep = (val) => val
  .replace(regex.not_digits, '')
  .substr(0, 8)
  .replace(regex.postal, '$1-$2');
