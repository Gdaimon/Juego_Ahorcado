/**
 * Created by Dark_Klitos on 9/10/14.
 */

var palabra = "Estequiometria";
var hombre, Letr, espacio;
//this es las variables locales de la clase , accesibles en toda la clase


var Ahorcado = function ( con )
	{
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
	this.dibujar ();

	};


Ahorcado.prototype.dibujar = function ()
	{
	var dibujo = this.contexto;
	dibujo.beginPath (); //Inicia el Dibujo
	dibujo.moveTo ( 150, 100 ); //Ubica el Mouse en esta posicion (x,y)
	dibujo.lineTo ( 150, 50 ); //Indica los movimiento por donde va a pasar la linea
	dibujo.lineTo ( 400, 50 ); //Indica los movimiento por donde va a pasar la linea
	dibujo.lineTo ( 400, 350 ); //Indica los movimiento por donde va a pasar la linea
	dibujo.lineTo ( 300, 350 ); //Indica los movimiento por donde va a pasar la linea
	dibujo.lineTo ( 480, 350 ); //Indica los movimiento por donde va a pasar la linea
	dibujo.lineWidth = 15; //Indica el ancho de la linea
	dibujo.strokeStyle = "brown"; //Indica el Color del Trazo tambien se puede Hexadesimal
	dibujo.stroke (); //Traza la Linea
	dibujo.closePath (); //Cierra el dibujo

	if ( this.intentos > 0 )
		{
		//Intentos igual a 1 --> Rostro
		dibujo.beginPath ();
		dibujo.arc ( 150, 140, 40, 0, Math.PI * 2, false );
		dibujo.lineWidth = 8;
		dibujo.strokeStyle = "black";
		dibujo.stroke ();
		dibujo.closePath ();
		if ( this.intentos > 1 )
			{
			//Intentos Igual a 2 --> Torso
			dibujo.beginPath ();
			dibujo.moveTo ( 150, 180 );
			dibujo.lineTo ( 150, 270 );
			dibujo.lineWidth = 8;
			dibujo.strokeStyle = "black";
			dibujo.stroke ();
			dibujo.closePath ();
			if ( this.intentos > 2 )
				{
				//Intentos Igual a 3 --> Manos
				dibujo.beginPath ();
				dibujo.moveTo ( 120, 220 );
				dibujo.lineTo ( 150, 182 );
				dibujo.lineTo ( 180, 220 );
				dibujo.lineWidth = 8;
				dibujo.strokeStyle = "black";
				dibujo.stroke ();
				dibujo.closePath ();
				if ( this.intentos > 3 )
					{
					//Intentos Igual a 4 --> Piernas
					dibujo.beginPath ();
					dibujo.moveTo ( 120, 300 );
					dibujo.lineTo ( 150, 270 );
					dibujo.lineTo ( 180, 300 );
					dibujo.lineWidth = 8;
					dibujo.strokeStyle = "black";
					dibujo.stroke ();
					dibujo.closePath ();
					if ( this.intentos > 4 )
						{
						//Intentos Igual a 5 --> Esta Muerto
						dibujo.beginPath ();
						//Ojo Izquierdo
						dibujo.moveTo ( 125, 120 );
						dibujo.lineTo ( 145, 145 );
						dibujo.moveTo ( 145, 120 );
						dibujo.lineTo ( 125, 145 );
						dibujo.lineWidth = 8;
						dibujo.strokeStyle = "blue";
						dibujo.stroke ();

						//Ojo Derecho
						dibujo.moveTo ( 155, 120 );
						dibujo.lineTo ( 175, 145 );
						dibujo.moveTo ( 175, 120 );
						dibujo.lineTo ( 155, 145 );
						dibujo.lineWidth = 8;
						dibujo.strokeStyle = "blue";
						dibujo.stroke ();

						dibujo.closePath ();
						}
					}
				}

			}


		}
	};

Ahorcado.prototype.trazar = function ()
	{
	this.intentos++;
	if ( this.intentos >= this.maximo )
		{
		this.vivo = false;
		alert ( "Estas Muerto, Perdiste!!!" );
		}
	this.dibujar ();

	};

function iniciar ()
	{

	Letr = document.getElementById ( "letra" );
	var b = document.getElementById ( "boton" );
	var canvas = document.getElementById ( "c" );
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext ( "2d" );
	hombre = new Ahorcado ( contexto );

	//Convierte la palabra en Mayusculas
	palabra = palabra.toUpperCase ();

	//declara un Array con n
	espacio = new Array ( palabra.length );


	//Agregar una funcion que se dispare al dar Click al Boton
	b.addEventListener ( "click", agregarLetra );

	//	espacio[1] = "P";
	//	espacio[3] = "O";

	mostrarPista ( espacio );

	//	hombre.trazar ();
	//	hombre.trazar ();
	//	hombre.trazar ();
	//	hombre.trazar ();
	//hombre.trazar ();


	}

function agregarLetra ()
	{
	var letra = Letr.value;
	Letr.value = "";
	letra = letra.toUpperCase ();

	mostrarPalabra ( palabra, hombre, letra );
	}

function mostrarPalabra ( palabra, ahorcado, letra )
	{
	var encontrado = false;
	var letra = letra.toUpperCase ();
	var p;
	//la p es el numero de cada posicion en la palabra, osea es el iterador
	for ( p in palabra )
		{
		//		alert ( palabra[p] );
		if ( letra == palabra[ p ] )
			{
			espacio[ p ] = letra;
			encontrado = true;

			}
		}
	mostrarPista ( espacio );
	//Si no lo encontre
	if ( !encontrado )
		{
		ahorcado.trazar ();
		}
	if ( !ahorcado.vivo )
		{
		//Mostrar la Palabra entera
		//		mostrarPista ( espacio );
		}

	}

function mostrarPista ( espacio )
	{
	var pista = document.getElementById ( "pista" );
	var texto = "";
	var largo = espacio.length;
	for ( var i = 0; i < largo; i++ )
		{
		//Si la posicion no esta vacia, entonces asignele el valor de la posicion
		if ( espacio[ i ] !== undefined )
			{
			texto = texto + espacio[ i ] + " ";
			}
		else
			{
			//Si la posicion esta vacia, entonces asignele un guion bajo y espacio
			texto += "_ ";
			}

		}
	//Actualizo el Html
	pista.innerText = texto;


	}

function foco ( i )
	{
	document.getElementById ( i );

	}