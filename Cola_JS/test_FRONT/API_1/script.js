const cepInput = document.querySelector('#CEP');
const ufInput = document.querySelector('#UF');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change',function () {
  const res = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`);
  res.then(function (resposta){
    const body = resposta.json();

    body.then(function (dados){
      ufInput.value = dados.uf;
      cidadeInput.value = dados.localidade;
      ruaInput.value = dados.logradouro;
    });
  });
});
