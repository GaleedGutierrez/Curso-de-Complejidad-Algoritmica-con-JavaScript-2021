/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

function contar(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

function repetir(arreglo) {
	const arreglo2 = arreglo;

	return arreglo2;
}

function convertirAString(arreglo) {
	const resultado = arreglo.map((item) => item.toString());

	return resultado;
}

function dosDimensiones(value) {
	const x = new Array(value);

	for (let i = 0; i < value; i++) {
		x[i] = new Array(value).fill(0);
	}

	return x;
}

// console.log(convertirAString([1, 2, 3]));
console.log(dosDimensiones(5));
