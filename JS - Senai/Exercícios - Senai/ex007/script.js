function classificar(){

  let pontos = Number(document.getElementById("pontos").value);
  
  if(pontos >= 1000){
  resultado.innerText = "Classificação: Mestre";
  }
  else if(pontos >= 500){
  resultado.innerText = "Classificação: Avançado";
  }
  else{
  resultado.innerText = "Classificação: Iniciante";
  }
  
  }