/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */

/**
	* Complejidad Temporal -> O(n^2)
	* Complejidad Espacial -> O(n)
	* Espacio Auxiliar = O(n) - O(5) -> O(1)
*/

function selectionSort(arreglo: unknown[][]) { // O(n)
	const longitud = arreglo.length; // O(1)

	for (let i = 0; i < longitud; i++) { // O(1)
		let minimum = i; // O(1)

		for (let j = i + 1; j < longitud; j++) { // O(1)
			if (arreglo[j] < arreglo[minimum]) { // O(1)
				minimum = j;
			}
		}

		if (minimum !== i) { // O(1)
			const temporal = arreglo[i]; // O(1)

			arreglo[i] = arreglo[minimum];
			arreglo[minimum] = temporal;
		}
	}

	return arreglo;
}
