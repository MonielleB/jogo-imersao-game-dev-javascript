function preload(){
  //Carregando a imagem em uma variavel
  imagemCenario =  loadImage('imagens/cenario/floresta-noite.jpg');
  imagemPersonagem =  loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  fita = loadJSON('fita/fita.json');
  
  somGameOver = loadSound('sons/game-over.mp3');
  somPerdeVida = loadSound('sons/perde-vida.mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  
}
