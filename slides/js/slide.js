/*** Lazy Page */

document.querySelector("div.fa-chevron-left").style.visibility="hidden"
document.querySelector("div.fa-chevron-right").style.visibility="hidden"
document.querySelector("div.carousel__lista").style.visibility="hidden"
document.getElementById("text-top").innerHTML="Loading..."

function ExibirOverlayerLoading(){
	document.body.innerHTML="Loading..."
	loading = document.body.style.visibility="visible"
	document.body.style.justifyContent="center"
}

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
	});
});


/** Programar tempo em que botão é desabilitado para passagem de slides. unidade de medida = segundos **/

/** Programar tempo em que botão é desabilitado para passagem de slides. **/
var pos = 0
var clicado = false
function title_solution_demo(){
    if(clicado == false){
        clicado = true;
	document.getElementById("text-top").innerHTML = title_demo[pos]
    }
}
function title_solution_demo_prev(){
	pos -=1 

	document.getElementById("btn_disable_prev").disabled = true;
	document.getElementById("btn_disable_next").disabled = true;
		setTimeout(time_btn_disable, 50)
}
function title_solution_demo_next(){
	pos +=1 

	document.getElementById("btn_disable_prev").disabled = true;
	document.getElementById("btn_disable_next").disabled = true;
		setTimeout(time_btn_disable, 50)
}

function time_btn_disable(){
	document.getElementById("btn_disable_prev").disabled = false;
	document.getElementById("btn_disable_next").disabled = false;
}


function gslider_preview(){
	setTimeout(gslider, 100)
}



var pos = 0
function gslider(){
var pos_dot = 0
var glider_dots = document.getElementById("glider-dots")
var glider_dot = glider_dots.children[0].className
var searched = document.getElementById("text-top")
while(pos_dot < 30){
	if(glider_dots.children[pos_dot].className == "glider-dot active"){
		searched.innerHTML = title_demo[pos_dot]
		break
	}else{
		pos_dot += 1
	}
}

}





















document.addEventListener('keyup', function(e) {
	gslider_preview
		var btn_prev = document.getElementById("btn_disable_prev")
		var btn_next = document.getElementById("btn_disable_next")
    	switch (e.keyCode) {
		case 37:
			btn_prev.click()
			break
        case 39:
            btn_next.click()
			break
		}
});


window.onload = function () { 
	setTimeout(show_lazy, 400)
	
}



function show_lazy(){
	document.querySelector("div.fa-chevron-left").style.visibility="visible"
	document.querySelector("div.fa-chevron-right").style.visibility="visible"
	document.querySelector("div.carousel__lista").style.visibility="visible"
	document.getElementById("text-top").innerHTML = title_demo[0]
}
