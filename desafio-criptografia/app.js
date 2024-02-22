
function exibirTextoNaTela(tag, texto,input){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function limparCampo() {
  text = document.querySelector('input');
  text.value = ' ';
}

function encripta(){
  
  const text = document.querySelector('input').value;

  const cripto = text.replaceAll("a","01@").replaceAll("e","*d-").replaceAll("i","|^8").replaceAll("o","/+l").replaceAll("u","*9&");
  exibirTextoNaTela('#paragrafo-saida',cripto);
  
  limparCampo();
}
 function descripta(){
  const textd = document.querySelector('input').value;

   const descripto = textd.replaceAll("01@","a").replaceAll("*d-","e").replaceAll("|^8","i").replaceAll("/+l","o").replaceAll("*9&","u");

   exibirTextoNaTela('#paragrafo-saida',descripto);
   limparCampo();
 }
function copiarTexto(){
const textoCopiar = document.querySelector('#paragrafo-saida').textContent;
console.log(textoCopiar);
  navigator.clipboard.writeText(textoCopiar);
  exibirTextoNaTela('#copiar', textoCopiar);
  alert(`Texto copiado com sucesso! Clique e cole a mesnagem, para descriptografar o texto: ${textoCopiar}`);
}