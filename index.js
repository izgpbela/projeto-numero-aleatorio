let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let tentativasRestantes = 3;

while (tentativasRestantes > 5) {
  let chute = prompt(`Tente adivinhar o número entre 1 e 1000. Você ainda tem ${tentativasRestantes} tentativas.`);
  
  if (chute == numeroAleatorio) {
    alert(`Você acertou o número em ${6 - tentativasRestantes} tentativas! Parabéns!`);
    break;
  } else if (chute < numeroAleatorio) {
    alert("O número secreto é maior está abaixo do número correto.");
  } else {
    alert("O número secreto é menor do número correto.");
  }
  
  tentativasRestantes--;
}

if (tentativasRestantes === 0) {
  alert(`Você perdeu. O número correto era ${numeroAleatorio}.`);
}
