import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';

const _users =
	JSON.parse(typeof localStorage !== 'undefined' ? localStorage.getItem('users') : null) || [];

const createBoards = () => {
	const boards = writable(_users);
	const { subscribe, reset, update: _update } = boards;

	const updateLocalStorage = (boards) => {
		localStorage.setItem('users', JSON.stringify(boards));
	};

	const add = ({ name, phone, text, guests, value, time }) => {
		// _update((boards) => boards.concat({ id: uuidv4(), name, phone, text, guests, value, time }));
		_update((boards) => {
			const newBoards = boards.concat({ id: uuidv4(), name, phone, text, guests, value, time });
			updateLocalStorage(newBoards);
			return newBoards;
		});
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
