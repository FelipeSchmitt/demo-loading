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

/**** Configura para que essa função execute somente uma vez na página, de forma a garantir com que o primeiro titulo do slide seja carregado e não acarrete um bug na apresentação */
var pos = 0

var clicado = false;
function title_solution_demo(){
	if(clicado == false){
        clicado = true;
		console.log(clicado)
		document.getElementById("text-top").innerHTML = title_demo[0]
    }
}

function gslider_preview(){
	gslider()
}



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

/**clicar e ativar botao***/
