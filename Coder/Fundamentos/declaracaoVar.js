//sobre uso de var
//criação de variavel fora de uma função, seu escopo é global
//evite uso de variavel em escopo global, pois pode ser alterada facilmente
function teste() {
  var local = 123;
  console.log("dentro da função:", local);
}
teste();
