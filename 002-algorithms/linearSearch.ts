/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */

/**
	* Complejidad Temporal -> O(n)
	* Complejidad Espacial -> O()
*/
function linearSearch(arreglo: unknown[], clave: unknown) {
	for (let indice = 0; indice < arreglo.length; indice++) { // O(n)
		if (arreglo[indice] === clave) { // O(1)
			return indice; // O(1)
		}
	}

	return -1; // O(1)
}
