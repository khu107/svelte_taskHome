<script>
	import { boards } from '../lib/store/index.js';
	import Card from '../components/card/Card.svelte';
	import close from '../lib/icons/close.svg';
</script>

<header>
	<a href="/addPage">+ New Reservation</a>
	<div class="length">
		<h1>Reservation</h1>
		<div style={`display: ${$boards.length === 0 ? 'none' : 'block'}`}>
			<div class="lengthnum">
				{$boards.length === 0 ? '' : $boards.length}
			</div>
		</div>
	</div>
	<div>
		<img src={close} alt="close" />
	</div>
</header>
<div class="card">
	{#each $boards as board (board.id)}
		<Card item={board} />
	{/each}
</div>

<style>
	.lengthnum {
		background-color: chocolate;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		border-radius: 50%;
		color: white;
	}
	.length {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.card {
		display: grid;
		padding: 10px 20px;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 20px;
	}
	header {
		padding: 0px 20px;
		background: white;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	a {
		padding: 15px 25px;
		border-radius: 10px;
		border: none;
		font-size: 16px;
		text-decoration: none;
		outline: none;
		color: red;
		background-color: white;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
</style>
