/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */

/**
	* Complejidad Temporal -> O(n^2)
	* Complejidad Espacial -> O()
*/

function selectionSort(arreglo: unknown[][]) {
	const longitud = arreglo.length; // O(1)

	for (let i = 0; i < longitud; i++) { // O(n^2)
		let minimum = i; // O(1)

		for (let j = i + 1; j < longitud; j++) { // O(n)
			if (arreglo[j] < arreglo[minimum]) { // O(1)
				minimum = j; // O(1)
			}
		}

		if (minimum !== i) { // O(1)
			const temporal = arreglo[i]; // O(1)

			arreglo[i] = arreglo[minimum]; // O(1)
			arreglo[minimum] = temporal; // O(1)
		}
	}

	return arreglo; // O(1)
}
