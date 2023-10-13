<script>
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	export let options;
	export let value;
	export let onDateSelect;

	function handleDateSelect(selectedDates) {
		const selectedDate = selectedDates[0];
		onDateSelect(selectedDate);
	}
</script>

<main>
	<Flatpickr {options} bind:value on:change={handleDateSelect} />
</main>

<style>
	main {
		margin-top: 100px;
	}
</style>
