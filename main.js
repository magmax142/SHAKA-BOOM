x=0;
y=0;
drawCircle=false;
drawRect=false;
recognition=new window.webkitSpeechRecognition()
function start_listen(){
    document.getElementById("status").innerHTML="SYSTEM IS LISTENING PLEASEE SPEAK!!";
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speach has been recognised as "+content;
    if(content=="rectangle"){
        drawRect=true;
    }
    if(content=="circle"){
        drawCircle=true;
    }
}
function setup(){
    canvas=createCanvas(900,600)
}
function draw(){
    if(drawRect==true){
        x=random(900);
        y=random(600);
        rect(x,y,100,200);
        document.getElementById("status").innerHTML="rectangle drawn";
        drawRect=false;
    }
    if(drawCircle==true){
        x=random(900);
        y=random(600);
        radius=random(100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle drawn";
        drawCircle=false;
    }
}