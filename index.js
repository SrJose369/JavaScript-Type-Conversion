const num = 2;
const str = "3";
const bol = false;

// Numero
// String
// Boolean
// Null
// Undefined

console.log("Number---------------");
console.log("Number", num, str,       "        :", num + str);
console.log("Number", num, bol,       "    :",     num + bol);
console.log("Number", num, null,      "     :",    num + null);
console.log("Number", num, undefined, ":",         num + undefined);

console.log("String---------------");
console.log("String", str, num,       "        :", str + num);
console.log("String", str, bol,       "    :",     str + bol);
console.log("String", str, null,      "     :",    str + null);
console.log("String", str, undefined, ":",         str + undefined);

console.log("Boolean---------------");
console.log("Boolean", bol, num,       "        :", bol + num);
console.log("Boolean", bol, str,       "        :", bol + str);
console.log("Boolean", bol, null,      "     :",    bol + null);
console.log("Boolean", bol, undefined, ":",         bol + undefined);

console.log("\nPasar a Number");
console.log("String   ", "",       "         :", Number(""));
console.log("String   ", "0",       "        :", Number("0"));
console.log("String   ", "1",       "        :", Number("1"));
console.log("String   ", "513333",  "   :",      Number("513333"));
console.log("String   ", "uWu",     "      :",   Number("uWu"));
console.log("Boolean  ", true,      "     :",    Number(true));
console.log("Boolean  ", false,     "    :",     Number(false));
console.log("Null     ", null,      "     :",    Number(null));
console.log("Undefined", undefined, ":",         Number(undefined));

console.log("\nPasar a Boolean");
console.log("Number   ", 34,        "       :",   Boolean(34));
console.log("Number   ", 0,         "        :",  Boolean(0));
console.log("Number   ", -15,       "      :",    Boolean(-15));
console.log("String   ", "0",       "        :",  Boolean("0"));
console.log("String   ", "43",      "       :",   Boolean("43"));
console.log("String   ", "",        "         :", Boolean(""));
console.log("String   ", "uWu",     "      :",    Boolean("uWu"));
console.log("Null     ", null,      "     :",     Boolean(null));
console.log("Undefined", undefined, ":",          Boolean(undefined));

const msj = `

Reglas de cocina faciles(para memorizar, que nunca sirven :/)

-A Numero:
	String:
		a) Representa un numero?: sera ese numero
		b) No representa un numero: NaN
	Boolean
		a) false: 0
		b) true : 1
	
	Null     : 0
	Undefined: NaN

-A String:
	Es pasar a string

-A Boolean:
	Numero:
		a) 0          : false
		b) Numero != 0: true
		c) NaN        : false
		c) Infinity   : false
	String:
		a) ""             : false
		b) String no vacio: true (literalmente cualquier cosa, "0", "false", "sadfasfas", "esto es un Boolean false", "undefined")

De las 4 operaciones(las comunes): +   -   *   / (sin contar, %, >, ==, etc.)

Para saber el tipo del resultado, me fijo:

1) Si es una operacion solo para Numeros(-   *    /): el resultado es Numero(Los dos se pasan a numero) [Que otra cosa mas podria dar uWu]
2) Si es +:
	a)    Hay un String: el resultado sera String(con lo que los operandos se pasaran a string)
	b) No hay un String: el resultado sera Numero(Los dos operandos se pasan a Numero)

A) Si es una operacion solo de booleanos (!): el resultado sera Boolean(El operando se pasa a Boolean)


Ejemplos:

1) "5" - true : 4
	 "5" -> 5
	true -> 1
	5 - 4 = 1

2)
	a) 42 + "uWu": "42uWu"
		42 -> "42"
	    	  "uWu"
		"42" concatenado "uWu" = "42uWu"
	
	b) false + null: 0
		flase -> 0
		 null -> 0
		 0 + 0 = 0

-Pasar a numero : Tipo - 0 (al restar 0, solo los 2 se pasan a numero, restar 0 no cambia el valor de Tipo)

-Pasar a Boolean: !!Tipo (con el primer !, se pasa a boolean al valor opuesto, con el segundo ! se vuevle al valor correcto)

`;