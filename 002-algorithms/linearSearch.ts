/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */

/**
	* Complejidad Temporal -> O(n)
	* Complejidad Espacial -> O(n)
	* Espacio Auxiliar = Complejidad Espacial - Espacio de entrada -> O(n) - O(1) -> O(1)
*/
function linearSearch(arreglo: unknown[], clave: unknown) { // O(n)
	for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
		if (arreglo[indice] === clave) { // O(1)
			return indice; // O(1)
		}
	}

	return -1; // O(1)
}
