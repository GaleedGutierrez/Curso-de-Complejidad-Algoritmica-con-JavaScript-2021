// Configuración
interface Contact {
	firstName: string;
	lastName: string;
	number: string;
	likes?: string[];
}

const contacts: Contact[] = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points']
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid']
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin']
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes']
	}
];

function lookUpProfile(name: string, prop: string) {
	// Cambia solo el código debajo de esta línea
	const HAS_NAME = contacts.some((contact) => contact.firstName === name);
	const HAS_PROP = contacts.some(
		(contact) => contact[prop as keyof typeof contact]
	);

	if (!HAS_NAME) return 'No such contact';

	if (!HAS_PROP) return 'No such property';

	const contact = contacts.find((contact) => contact.firstName === name)!;

	return contact[prop as keyof typeof contact];
	// Cambia solo el código encima de esta línea
}

lookUpProfile('Akira', 'likes');
