# Reglas de cocina faciles(para memorizar, que nunca sirven :/)

## -A Numero:

	String:
		a) Representa un numero?: sera ese numero
		b) No representa un numero: NaN
	Boolean
		a) false: 0
		b) true : 1
	
	Null     : 0
	Undefined: NaN

## -A String:

	Es pasar a string

## -A Boolean:

	Numero:
		a) 0          : false
		b) Numero != 0: true
		c) NaN        : false
		c) Infinity   : false
	String:
		a) ""             : false
		b) String no vacio: true (literalmente cualquier cosa, "0", "false", "sadfasfas", "esto es un Boolean false", "undefined")

## -Para saber el tipo del resultado, me fijo:

### De las 4 operaciones(las comunes): +   -   *   / (sin contar, %, >, ==, etc.)

	1) Si es una operacion solo para Numeros(-   *    /): el resultado es Numero(Los dos se pasan a numero) [Que otra cosa mas podria dar uWu]
	2) Si es +:
		a)    Hay un String: el resultado sera String(con lo que los operandos se pasaran a string)
		b) No hay un String: el resultado sera Numero(Los dos operandos se pasan a Numero)

	A) Si es una operacion solo de booleanos (!): el resultado sera Boolean(El operando se pasa a Boolean)

## -Ejemplos:

	1)
		i)
			"5" - true : 4
		 	 5  -  1   : 4
		ii) 
			null - "uWu": NaN
			  0  -  NaN : NaN

	2)
		a)   42  +  "uWu": "42uWu"
		   "42"  +  "uWu": "42uWu" (concatenado)
	
		b) false + null: 0
			 0   +  0  : 0
	A)
		!"uWu": false
		"uWu" -> true
		!true -> false

	Casos Raros)
		1)
			5 > false: true
		2)
			undefined  -  "noUnNumerico": NaN
			   NaN     -      NaN       : NaN
		3) y muchos mas casos raros(==), 
			3 == "03": true
			[] == ![]: true
			null >= 0: true
	



`Pasar a numero : Tipo - 0 (al restar 0, solo los 2 se pasan a numero, restar 0 no cambia el valor de Tipo)`

`Pasar a Boolean: !!Tipo (con el primer !, se pasa a boolean al valor opuesto, con el segundo ! se vuevle al valor correcto)`