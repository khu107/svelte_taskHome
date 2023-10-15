<script>
	import up from '../../lib/icons/chevron-up.svg';
	import down from '../../lib/icons/chevron-down.svg';
	import alarm from '../../lib/icons/alarm_on.svg';
	import { createEventDispatcher } from 'svelte';
	export let hours = 0;
	export let minutes = 0;
	export let period = 'AM';

	const dispatch = createEventDispatcher();
	function handleIncrement(type) {
		if (type === 'hours' && hours < 12) {
			hours += 1;
		} else if (type === 'minutes' && minutes < 59) {
			minutes += 1;
		} else if (type === 'period') {
			period = period === 'AM' ? 'PM' : 'AM';
		}
		dispatch('timeChanged', { hours, minutes, period });
	}

	function handleDecrement(type) {
		if (type === 'hours' && hours > 0) {
			hours -= 1;
		} else if (type === 'minutes' && minutes > 0) {
			minutes -= 1;
		} else if (type === 'period') {
			period = period === 'AM' ? 'PM' : 'AM';
		}
		dispatch('timeChanged', { hours, minutes, period });
	}
</script>

<div style={'display:flex; gap:15px'}>
	<img src={alarm} alt="alarm" />
	<div class="time">
		{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes}
		{period}
	</div>
</div>
<div class="wrap">
	<div class="hour">
		<button type="button" on:click={() => handleIncrement('hours')}>
			<img src={up} alt="up" />
		</button>
		<div class="hourdiv">{hours < 10 ? `0${hours}` : hours}</div>
		<button type="button" on:click={() => handleDecrement('hours')}>
			<img src={down} alt="down" />
		</button>
	</div>
	<div>:</div>
	<div class="hour">
		<button type="button" on:click={() => handleIncrement('minutes')}>
			<img src={up} alt="up" />
		</button>
		<div class="hourdiv">{minutes < 10 ? `0${minutes}` : minutes}</div>
		<button type="button" on:click={() => handleDecrement('minutes')}>
			<img src={down} alt="down" />
		</button>
	</div>
	<div>:</div>
	<div class="hour">
		<button type="button" on:click={() => handleIncrement('period')}>
			<img src={up} alt="up" />
		</button>
		<div class="hourdiv">{period}</div>
		<button type="button" on:click={() => handleDecrement('period')}>
			<img src={down} alt="down" />
		</button>
	</div>
</div>

<style>
	.wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		gap: 20px;
	}
	.time {
		border: 2px solid black;
		font-weight: bold;
		width: 70%;
		padding-left: 20px;
		padding: 15px;
		border-radius: 10px;
	}
	.hour {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	button {
		border: none;
		background: transparent;
	}

	.hourdiv {
		font-size: 30px;
		font-weight: bold;
	}
</style>
