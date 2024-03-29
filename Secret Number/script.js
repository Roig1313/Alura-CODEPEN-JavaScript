var numeroSecreto = parseInt(Math.random()* 1000 + 1);
alert (numeroSecreto);


while (numeroSecreto != numeroDigitado){
var numeroDigitado = prompt("Ingrese un número entre 1 y 1000");
  
      if (numeroSecreto == numeroDigitado){
      alert("Acertaste");
    } else if (numeroSecreto > numeroDigitado){
      alert("Te equivocaste, el número secreto es mayor que el numero digitado")
    } else if (numeroSecreto < numeroDigitado){
      alert("Te equivocaste, el número secreto es menor que el numero digitado")
    } 
  
}