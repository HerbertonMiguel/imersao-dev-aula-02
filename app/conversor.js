function Converter (){

  const valorElemento = document.getElementById("valor");
  
  const valor = valorElemento.value;

  const valorEmDolar = parseFloat(valor);
  console.log(valorEmDolar);

  const valorEmReal = valorEmDolar * 5;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = "o resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}