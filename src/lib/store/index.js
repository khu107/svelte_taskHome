import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';

const _users = [
	{ id: '1', name: 'Planning', phone: '01043879779', text: 'salom', guests: 6, value: 'Oct 10' },
	{ id: '2', name: 'Planning', phone: '01043879779', text: 'salom', guests: 2, value: 'Oct 10' }
];

const createBoards = () => {
	const boards = writable(_users);
	const { subscribe, reset, update: _update } = boards;

	const add = ({ name, phone, text, guests, value }) => {
		_update((boards) => boards.concat({ id: uuidv4(), name, phone, text, guests, value }));
	};

	const remove = (id) => {
		_update((boards) => boards.filter((board) => board.id !== id));
	};
	const edit = (id, { name, phone, text, guests, value }) => {
		_update((boards) =>
			boards.map((board) =>
				board.id === id ? { ...board, name, phone, text, guests, value } : board
			)
		);
	};

	return { subscribe, reset, add, remove, edit };
};

export const boards = createBoards();
