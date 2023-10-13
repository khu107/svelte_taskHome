<script context="module">
	import { goto } from '$app/navigation';
</script>

<script>
	import logo from '$lib/icons/keyboard_backspace.svg';
	import plus from '$lib/icons/math-plus.svg';
	import minus from '$lib/icons/math-minus.svg';
	import close from '$lib/icons/close.svg';
	import { boards } from '../../lib/store/index.js';
	import Modal from '../../components/modal/Modal.svelte';
	import event_available from '../../lib/icons/event_available.svg';

	let showModal = false;
	let guests = 1;
	let name = '';
	let phone = '';
	let text = '';
	function congratulate(event) {
		event.preventDefault();
		let add = {
			name,
			phone,
			text,
			guests
		};
		boards.add(add);
		name = '';
		phone = '';
		text = '';
		guests = 1;
		goto('/');
	}

	function up() {
		guests += 1;
	}
	function down() {
		if (guests > 1) {
			guests -= 1;
		}
	}
</script>

<main>
	<!-- head -->
	<div class="head">
		<a href="/"><img src={logo} alt="logo" /></a>
		<h1>New Reservation</h1>
		<div>
			<img src={close} alt="close" />
		</div>
	</div>
	<!-- section -->

	<form class="section" on:submit={congratulate}>
		<div class="info">
			<input type="text" bind:value={name} placeholder="Name" />
			<input type="text" bind:value={phone} placeholder="Phone" />
			<button class="modal" type="button" on:click={() => (showModal = true)}>
				<img src={event_available} alt="" />Select Date
			</button>
			<Modal bind:showModal>
				<h1>sdasdasds</h1>
				<input type="date" />
			</Modal>
		</div>
		<!-- guests -->
		<div>
			<div class="guests">
				<div>Guests</div>
				<button type="button" on:click={down} class="minus">
					<img src={minus} alt="ss" />
				</button>
				<h2>{guests}</h2>
				<button type="button" on:click={up} class="plus">
					<img src={plus} alt="ss" />
				</button>
			</div>

			<textarea bind:value={text} cols="30" rows="10" placeholder="Add Note..." />

			<button class="saveBtn" type="submit"> Save </button>
		</div>
	</form>
</main>

<style>
	.info {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}
	.modal {
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-size: 16px;
		background-color: rgb(247, 247, 247);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		border: none;
		border-radius: 10px;
	}
	.saveBtn {
		width: 100%;
		margin-top: 150px;
		height: 100px;
		font-size: 22px;
		color: white;
		background-color: chocolate;
		border: none;
		outline: none;
		border-radius: 15px;
	}
	textarea {
		outline: none;
		margin-top: 30px;
		padding: 20px 0px 0px 10px;
		width: 98%;
		height: 200px;
		resize: none;
		border: 0.5px solid rgb(234, 234, 234);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
	.section {
		padding: 0 30px;
	}
	.plus {
		padding: 10px;
		border: none;
		border-radius: 10px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	.minus {
		padding: 10px;
		border: none;
		border-radius: 10px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	.guests {
		display: flex;
		align-items: center;
		margin-top: 40px;
		gap: 30px;
	}
	input {
		outline: none;
		padding: 20px;
		font-size: 16px;
		border-radius: 10px;
		border: 1px solid rgb(234, 234, 234);
	}
	.head {
		padding: 0px 20px;
		background: white;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	main {
		background: white;
		height: 100vh;
	}
	a {
		padding: 5px 25px;
		border-radius: 10px;
		text-decoration: none;
		color: red;
		background-color: white;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
</style>
