import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';

const _users = [
	{ id: 1, name: 'Planning', phone: '01043879779', text: 'salom', guests: 6 },
	{ id: 2, name: 'In Progress', phone: '01043879779', text: 'salom', guests: 4 },
	{ id: 3, name: 'All Done', phone: '01043879779', text: 'salom', guests: 3 },
	{ id: 4, name: 'All Done', phone: '01043879779', text: 'salom', guests: 5 }
];

const createBoards = () => {
	const boards = writable(_users);
	const { subscribe, reset, update: _update } = boards;

	const add = ({ name, phone, text, guests }) => {
		_update((boards) => boards.concat({ id: uuidv4(), name, phone, text, guests }));
	};

	const remove = (id) => {
		_update((boards) => boards.filter((board) => board.id !== id));
	};

	return { subscribe, reset, add, remove };
};

export const boards = createBoards();
