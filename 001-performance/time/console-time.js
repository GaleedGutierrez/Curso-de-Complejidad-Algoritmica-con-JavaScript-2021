function contar(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

console.time("Duración contar");
contar(5);
console.timeEnd("Duración contar");
