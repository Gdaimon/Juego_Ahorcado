var boton;
var cuadro;
window.onload = function ()
	{
	boton = document.getElementById ( 'btn' );
	boton.onclick = function presion ()
		{
		alert ( 'hola' );

		//innerHTML = document.write ( 'Hola <b>Mundo</b>' );
		}
	cuadro = document.getElementById ( 'dv' );
	cuadro.onmouseover = "this.style.backgroundColor='red'";
	}
