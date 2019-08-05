function fecha(){
	var hora = new Date().getHours();
	var i;
	if(hora<19){
		document.getElementById('fondo_index').style.background="#fff3e0";
	}
	else{
		document.getElementById('fondo_index').style.background="#332B00";
		for(i=0;i<=11;i++){
			document.getElementsByClassName("menu_color_1")[i].style.backgroundColor="#BC7C3C";	
		}
		document.getElementById('footer1').style.background="#BC7C3C";
	}
}

function fecha1(){
	var hora = new Date().getHours();
	var i;
	if(hora<19){
		document.getElementById('fondo_hobbies').style.background="#e3f2fd";
	}
	else{
		document.getElementById('fondo_hobbies').style.background="#000033";
		for(i=0;i<=11;i++){
			document.getElementsByClassName("menu_color_2")[i].style.backgroundColor="#1D4873";	
		}
		document.getElementById('footer2').style.background="#1D4873";
	}
}

function fecha2(){
	var hora = new Date().getHours();
	var i;
	if(hora<19){
		document.getElementById('fondo_habilidades').style.background="#fce4ec";
	}
	else{
		document.getElementById('fondo_habilidades').style.background="#7E7276";
		for(i=0;i<=11;i++){
			document.getElementsByClassName("menu_color_3")[i].style.backgroundColor="#483648";	
		}
		document.getElementById('footer3').style.background="#483648";
	}
}

function fecha3(){
	var hora = new Date().getHours();
	var i;
	if(hora<19){
		document.getElementById('fondo_formacion').style.background="#ffebee ";
	}
	else{
		document.getElementById('fondo_formacion').style.background="#B2A4A6";
		for(i=0;i<=11;i++){
			document.getElementsByClassName("menu_color_4")[i].style.backgroundColor="#4C0000 ";	
		}
		document.getElementById('footer4').style.background="#4C0000";
	}
}

function fecha4(){
	var hora = new Date().getHours();
	var i;
	if(hora<19){
		document.getElementById('fondo_experiencia').style.background="#e8f5e9  ";
	}
	else{
		document.getElementById('fondo_experiencia').style.background="#004000 ";
		for(i=0;i<=11;i++){
			document.getElementsByClassName("menu_color_5")[i].style.backgroundColor="#335933  ";	
		}
		document.getElementById('footer5').style.background="#335933 ";
	}
}

function fecha5(){
	var hora = new Date().getHours();
	var i;
	if(hora<19){
		document.getElementById('fondo_contacto').style.background="#ffffff  ";
	}
	else{
		document.getElementById('fondo_contacto').style.background="#ffffff ";
		for(i=0;i<=11;i++){
			document.getElementsByClassName("menu_color_6")[i].style.backgroundColor="#B20000   ";	
		}
		document.getElementById('footer6').style.background="#B20000  ";
	}
}




