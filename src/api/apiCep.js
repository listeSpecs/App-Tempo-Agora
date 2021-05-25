const apiCep = (cep) => fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then((resp) => resp.json())
  .then((data) => data);

export default apiCep;
