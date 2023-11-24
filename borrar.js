const contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"]
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"]
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"]
	}
];

function lookUpProfile(name, prop) {
	// Cambia solo el código debajo de esta línea
	const HAS_NAME = contacts.some((contact) => contact.firstName === name);
	const HAS_PROP = contacts.some((contact) => contact[prop]);

	if (!HAS_NAME) return "No such contact";

	if (!HAS_PROP) return "No such property";

	const contact = contacts.find((contact) => contact.firstName === name);

	return contact[prop];
	// Cambia solo el código encima de esta línea
}

lookUpProfile("Akira", "likes");
