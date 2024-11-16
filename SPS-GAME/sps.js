let input,image,randomImage;
let user,computer;

document.getElementById("sps1").onclick=function(){

input=document.getElementById("stone").textContent;
console.log(input);
image=document.getElementById("userimage");
image.src="left-stone.png";
let random=Math.floor((Math.random()*3)+1);
switch(random){
case 1:console.log("STONE");
randomImage=document.getElementById("randomimage");
randomImage.src="right-stone.png";
break;
case 2:console.log("PAPER");
randomImage=document.getElementById("randomimage");
randomImage.src="right-paper.png";
break;
case 3:console.log("SCISSOR");
randomImage=document.getElementById("randomimage");
randomImage.src="right-scissor.png";
break;
default:console.log("range is 1-3");
}
if(input=="STONE"  && random==1){
user="😐 TIE";
computer="😐 TIE";
}
else if(input=="PAPER"  && random==2) {
user="😐 TIE";
computer="😐 TIE";
}
else if(input=="SCISSOR"&& random==3){ 
user="😐 TIE";
computer="😐 TIE";
}
else if(input=="STONE"  && random==2){
    user="LOOSE 😡";
computer="WIN 😎";
    }
else if(input=="PAPER"  && random==3){
    user="LOOSE 😡";
    computer="WIN 😎";
    }
else if(input=="SCISSOR"&& random==1){
    user="LOOSE 😡";
    computer="WIN 😎";
    }
else if(input=="STONE" && random==3) {
    user="WIN 😎";
    computer="LOOSE 😡";
}
else if(input=="PAPER"  && random==1){
    user="WIN 😎";
    computer="LOOSE 😡";
    }
else if(input=="SCISSOR"&& random==2) {
    user="WIN 😎";
    computer="LOOSE 😡";
}
else{ console.log("error");}
document.getElementById("useremoji").textContent=user;
document.getElementById("randomemoji").textContent=computer;
}


document.getElementById("sps2").onclick=function(){

input=document.getElementById("paper").textContent;
console.log(input);
image=document.getElementById("userimage");
image.src="left-paper.png";

let random=Math.floor((Math.random()*3)+1);
switch(random){
case 1:console.log("STONE");
randomImage=document.getElementById("randomimage");
randomImage.src="right-stone.png";
break;
case 2:console.log("PAPER");
randomImage=document.getElementById("randomimage");
randomImage.src="right-paper.png";
break;
case 3:console.log("SCISSOR");
randomImage=document.getElementById("randomimage");
randomImage.src="right-scissor.png";
break;
default:console.log("range is 1-3");
}
if(input=="STONE"  && random==1){
user="😐 TIE";
computer="😐 TIE";}
else if(input=="PAPER"  && random==2) {
user="😐 TIE";
computer="😐 TIE";
 }
else if(input=="SCISSOR"&& random==3){ 
user="😐 TIE";
computer="😐 TIE";
}
else if(input=="STONE"  && random==2){
    user="LOOSE 😡";
computer="WIN 😎";
    }
else if(input=="PAPER"  && random==3){
    user="LOOSE 😡";
    computer="WIN 😎";
    }
else if(input=="SCISSOR"&& random==1){
    user="LOOSE 😡";
    computer="WIN 😎";
    }
else if(input=="STONE" && random==3) {
    user="WIN 😎";
    computer="LOOSE 😡";
}
else if(input=="PAPER"  && random==1){
    user="WIN 😎";
    computer="LOOSE 😡";
    }
else if(input=="SCISSOR"&& random==2) {;
    user="WIN 😎";
    computer="LOOSE 😡";
}
else{ console.log("error");}
document.getElementById("useremoji").textContent=user;
document.getElementById("randomemoji").textContent=computer;
}


document.getElementById("sps3").onclick=function(){

input=document.getElementById("scissor").textContent;
console.log(input);
image=document.getElementById("userimage");
image.src="left-scissor.png";

let random=Math.floor((Math.random()*3)+1);
switch(random){
case 1:console.log("STONE");
randomImage=document.getElementById("randomimage");
randomImage.src="right-stone.png";
break;
case 2:console.log("PAPER");
randomImage=document.getElementById("randomimage");
randomImage.src="right-paper.png";
break;
case 3:console.log("SCISSOR");
randomImage=document.getElementById("randomimage");
randomImage.src="right-scissor.png";
break;
default:console.log("range is 1-3");
}


if(input=="STONE"  && random==1){
user="😐 TIE";
computer="😐 TIE";}
else if(input=="PAPER"  && random==2) {
user="😐 TIE";
computer="😐 TIE";
 }
else if(input=="SCISSOR"&& random==3){ 
user="😐 TIE";
computer="😐 TIE";
}
else if(input=="STONE"  && random==2){
user="LOOSE 😡";
computer="WIN 😎";
    }
else if(input=="PAPER"  && random==3){
    user="LOOSE 😡";
    computer="WIN 😎";
    }
else if(input=="SCISSOR"&& random==1){
    user="LOOSE 😡";
    computer="WIN 😎";
    }
else if(input=="STONE" && random==3) {
    user="WIN 😎";
    computer="LOOSE 😡";
}
else if(input=="PAPER"  && random==1){
    user="WIN 😎";
    computer="LOOSE 😡";
    }
else if(input=="SCISSOR"&& random==2) {
    user="WIN 😎";
    computer="LOOSE 😡";
}
else{ console.log("error");}
document.getElementById("useremoji").textContent=user;
document.getElementById("randomemoji").textContent=computer;
}