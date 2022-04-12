var aboutTitle=document.querySelector(".About-title");
var links=document.querySelectorAll(".nav-link");
var flexRow=document.querySelectorAll(".flex-row");
var benefits=document.querySelectorAll(".benefits");
var Html=document.getElementById("Html");
var Css=document.getElementById("Css");
var Js=document.getElementById("Js");
var Jq=document.getElementById("Jq");
var Boots=document.getElementById("Bootstrap");
var Ang=document.getElementById("Angular");
var all=document.getElementById("all");
var frontEnd=document.getElementById("front-end");
var backEnd=document.getElementById("back-end");
var fullStack=document.getElementById("full-stack");

all.classList.add("activee");	



window.addEventListener("scroll",function(){
	
console.log(document.body.scrollTop);

if(document.body.scrollTop>300 &&document.body.scrollTop<1560){
	
	
	
    $(".about-title").fadeIn(1000);
     $(".about-title").animate({left: '45%'},1000);    
	$(".flex-row").fadeIn(3000);
	$(".icon").css('transform','rotateX(720deg)');
	//flexRow.style.transform="rotate(360deg)";
	
	for(var i=0;i<flexRow.length;i++){
		
		flexRow[i].style.display="flex";
		
	}
		

    
	
	for(var i=0; i<links.length ;i++){
	links[1].style.color="#e31b6d";	
	links[0].style.color="white";
	links[2].style.color="white";	

		
	}
	
	
	Html.style.width+="70%";
	Css.style.width+="70%";
	Js.style.width+="65%";
	Jq.style.width+="65%";
	Boots.style.width+="60%";
	Ang.style.width+="55%";
	}
	
	
	else if(document.body.scrollTop>1563 && document.body.scrollTop<2300){
	
		
	$(".projects-title").fadeIn(4000);	
		
	for(var i=0; i<links.length ;i++){
	links[2].style.color="#e31b6d";	
	links[1].style.color="white";	
	links[0].style.color="white";	
		
	}
		
		

		

		
		
	all.onclick=function(){
		
	frontEnd.classList.remove("activee");
	backEnd.classList.remove("activee");
	all.classList.add("activee");
	fullStack.classList.remove("activee");
		
	}	
	
		
		
		
	frontEnd.onclick=function(){
		
	frontEnd.classList.add("activee");
	backEnd.classList.remove("activee");
	all.classList.remove("activee");
	fullStack.classList.remove("activee");
		
	}
	
	
	backEnd.onclick=function(){
		
	backEnd.classList.add("activee");
	frontEnd.classList.remove("activee");
	all.classList.remove("activee");
	fullStack.classList.remove("activee");
		
		
		
		
	}
	
	
		
fullStack.onclick=function(){
	
fullStack.classList.add("activee");
frontEnd.classList.remove("activee");
backEnd.classList.remove("activee");
all.classList.remove("activee");
	
	
	
	
	
}
	
		
		
	
		
	 
		

	

	
		
		
		
		
	}
	
	
	
	
	else if(document.body.scrollTop<300){
		

	for(var i=0; i<links.length ;i++){
	links[0].style.color="#e31b6d";	
    links[1].style.color="white";
	links[2].style.color="white";
	links[3].style.color="white";
	links[4].style.color="white";
		
	}
	
	
	
	
	
	}
	
	
	
	
	
	

})