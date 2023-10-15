<script>
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import today from '../../lib/icons/today.svg';
	export let options;
	export let value;
	export let onDateSelect;

	function handleDateSelect(selectedDates) {
		const selectedDate = selectedDates[0];
		onDateSelect(selectedDate);
	}
	console.log(value);
</script>

<div class="wrap">
	<img src={today} alt="" />
	<Flatpickr style="padding: 20px !important" {options} bind:value on:change={handleDateSelect} />
</div>

<style>
	.wrap {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-top: 10px;
		margin-bottom: 20px;
	}
</style>
