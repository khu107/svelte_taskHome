<script>
	import { boards } from '../lib/store/index.js';
	import Card from '../components/card/Card.svelte';
	import close from '../lib/icons/close.svg';
</script>

<header>
	<a href="/addPage">+ New Reservation</a>
	<h1>Reservation</h1>
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
