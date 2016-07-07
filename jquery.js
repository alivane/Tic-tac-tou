$(document).ready(function(){
	var i = 0 
	var boton = $("button").on("click",function(){
			console.log("hola") ;
			$(this).off("click");
			for(i = boton[i] ; i <= 9; i++){
				if(i%2===0){
					console.log("es par");
				}else{
					console.log("es impar");
				}
				break;
			}

	});

	;
		







});