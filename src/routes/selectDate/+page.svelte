<script>
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	let selectedDate = new Date();

	let options = {
		altInput: true,
		altFormat: 'F j',
		dateFormat: 'Y-m-d'
	};
</script>

<main>
	<Flatpickr {options} bind:value={selectedDate} />
	<p>{selectedDate.toString().slice(3, 10)}</p>
</main>
