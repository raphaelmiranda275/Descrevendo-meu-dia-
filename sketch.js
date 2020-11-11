var tela = 0
var x = 40
var y = 195
var opcao = 1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  if(tela==0){
    menu()
  }
    if(tela==1){
    background(200, 20, 200);
    fill(255, 204, 0);
    textSize(26);
    text("INICIANDO O JOGO",75,100);
  }
  if(tela==2){
    background(10, 200, 200);
    fill('rgba(100%,0%,100%,0.5)');
    textSize(26);
    text("MANUAL",140,100);
  }
 if(tela==3){
    background(10, 200, 200);
    fill("red");
    textSize(26);
    text("CRÉDITOS",135,100);
  }
}  
  // CONSTRUINDO MENU
  
function menu(){  
  fill(50)
  rect(x, y, 300, 40);
  fill('rgb(0,255,0)');
  textSize(26);
  text("DESCREVENDO MEU DIA!!!",30,60);
  fill(255,204,0);
  textSize(22);
  text("JOGAR - Pressione J", 45, 220);
  text("MANUAL - Pressione M",45,260);
  text("CRÉDITOS - Pressione C",45,300);
          
    //CRÉDITOS    
    if(key=="c"){
      tela=3;
    }
    
    //JOGAR
     if(key=="j"){
      tela=1;
    }
    
        //MANUAL
     if(key=="m"){
      tela=2;
    }
}
    
function keyPressed(){
 if(key=="ArrowUp" && y>220){
   y=y-38;
   opcao=opcao-1;
   console.log(opcao);
 }
   
  if(key=="ArrowDown" && y<250){
    y=y+38;
    opcao=opcao+1;
    console.log(opcao);
  }
  if(key=="Enter"){
    tela=opcao
  }
  if(key=="Escape"){
    tela=0
  }
}
