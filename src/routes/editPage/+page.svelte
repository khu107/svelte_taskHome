<script context="module">
	import { goto } from '$app/navigation';
</script>

<script>
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');

	import { boards } from '../../lib/store/index.js';
	import logo from '../../lib/icons/keyboard_backspace.svg';
	import plus from '$lib/icons/math-plus.svg';
	import minus from '$lib/icons/math-minus.svg';
	import close from '$lib/icons/close.svg';
	import event_available from '../../lib/icons/event_available.svg';
	import Modal from '../../components/modal/Modal.svelte';
	import Datepickr from '../../components/flatpickr/Datepickr.svelte';
	import Time from '../../components/timeCicker/Time.svelte';
	import trash from '../../lib/icons/trash.svg';

	let item = $boards.find((item) => item.id === id);
	console.log(item.id);

	let selectedDate;
	function handleDateSelect(date) {
		selectedDate = date;
	}
	let options = {
		altInput: true,
		altFormat: 'F j',
		dateFormat: 'Y-m-d'
	};

	function handleTimeChange(event) {
		time = event.detail;
	}
	let modal;
	let time = item.time;
	let name = item.name;
	let guests = item.guests;
	let phone = item.phone;
	let text = item.text;
	let value = item.value;
	const onEdit = (event) => {
		event.preventDefault();
		boards.edit(id, {
			name,
			text,
			phone,
			guests,
			value
		});
		goto('/');
	};
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
		<h1>Edit Reservation</h1>
		<div>
			<img src={close} alt="close" />
		</div>
	</div>
	<!-- section -->

	<form class="section">
		<div class="info">
			<input id="name" bind:value={name} type="text" placeholder="Name" required />
			<input id="phone" bind:value={phone} type="text" placeholder="Phone" required />
			<button class="modal" type="button" on:click={() => modal.show()}>
				<img src={event_available} alt="event_available" />{new Date(value).toLocaleString(
					'en-US',
					{ month: 'long', day: 'numeric' }
				)},
				{time.hours < 10 ? `0${time.hours}` : time.hours}:{time.minutes < 10
					? `0${time.minutes}`
					: time.minutes}
				{time.period}
			</button>
			<Modal bind:this={modal}>
				<Datepickr style={'padding: 20px'} {options} bind:value onDateSelect={handleDateSelect} />
				<Time
					bind:hours={time.hours}
					bind:minutes={time.minutes}
					bind:period={time.period}
					on:timeChanged={handleTimeChange}
				/>
				<div class="modalbtn">
					<button class="modaldelete" type="button" on:click={() => modal.hide()}>
						<img src={trash} alt="" />
					</button>
					<button class="modalsave" type="button" on:click={() => modal.hide()}>Save</button>
				</div>
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

			<textarea cols="30" rows="10" bind:value={text} placeholder="Add Note..." />

			<button on:click={onEdit} class="saveBtn" type="submit"> Save </button>
		</div>
	</form>
</main>

<style>
	.modalbtn {
		display: flex;
		gap: 10px;
	}
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
	.modalsave {
		width: 75%;
		margin-top: 20px;
		height: 70px;
		font-size: 22px;
		color: white;
		background-color: chocolate;
		border: none;
		outline: none;
		border-radius: 15px;
	}
	.modaldelete {
		width: 25%;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
			rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
		margin-top: 20px;
		height: 70px;
		font-size: 22px;
		color: white;
		background: transparent;
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
