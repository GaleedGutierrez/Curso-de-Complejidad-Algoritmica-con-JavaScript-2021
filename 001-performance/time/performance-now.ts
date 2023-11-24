function contar(n: number) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

const START = performance.now();

contar(5);

const END = performance.now();
const TIME = END - START;

console.log(`El algoritmo contar ha durado: ${TIME}ms.`);
