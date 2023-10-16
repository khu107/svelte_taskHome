<script>
	export let item;
	let dateValue = new Date(item.value).toLocaleString('en-US', { month: 'long', day: 'numeric' });
	import { boards } from '../../lib/store/index.js';
	import phone from '../../lib/icons/phone.svg';
	import event_available from '../../lib/icons/event_available.svg';
	import group from '../../lib/icons/group.svg';
	import edit from '../../lib/icons/edit.svg';
	import trash from '../../lib/icons/trash.svg';
	import { goto } from '$app/navigation';

	const handleDelete = () => {
		boards.remove(item.id.toString());
		const storedData = JSON.parse(localStorage.getItem('users')) || [];
		const updatedData = storedData.filter((board) => board.id !== item.id);
		localStorage.setItem('users', JSON.stringify(updatedData));
	};

	const handleEdit = () => {
		goto(`/editPage?id=${item.id}`);
	};
	const handleEditKeyPress = (event) => {
		event.preventDefault();

		if (event.key === 'Enter') {
			handleEdit();
		}
	};
	console.log(item);
</script>

<div class="card" on:click={handleEdit} on:keydown={handleEditKeyPress} tabindex="0" role="button">
	<!-- name -->
	<div class="name">
		<h3>{item.name}</h3>
		<div class="name_phone">
			<img src={phone} alt="" />
			<div>{item.phone}</div>
		</div>
	</div>
	<!-- date -->
	<div class="date">
		<div>
			<img src={event_available} alt="event_available" />
		</div>
		<div>{dateValue},</div>
		<div>
			{item.time?.hours < 10 ? `0${item.time?.hours}` : item.time?.hours}:{item.time?.minutes < 10
				? `0${item.time?.minutes}`
				: item.time?.minutes}
			{item.time?.period}
		</div>
	</div>
	<div class="guests">
		<div>
			<img src={group} alt="group" />
		</div>
		<div>{item.guests}</div>
	</div>
	<div class="table">
		<div>Reserved Table 7 Floor 1</div>
	</div>
	<div style="height: 50px" class="text">
		<div>{item.text ? item.text : ''}</div>
		<img style={`display: ${item.text ? 'block' : 'none'}`} src={edit} alt="edit" />
	</div>
	<div class="Btn">
		<button on:click={handleDelete}><img src={trash} alt="trash" /></button>
		<button>Seated</button>
	</div>
</div>

<style>
	.Btn {
		margin-top: 25px;
		display: flex;
		gap: 25px;
	}
	button {
		cursor: pointer;
		padding: 0px 10px;
		border: none;
		color: white;
		background-color: white;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
			rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
	}
	.Btn button:last-child {
		font-size: 16px;
		width: 100%;
		padding: 18px;
		background-color: chocolate;
	}

	.text {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-top: 15px;
	}
	.table {
		margin-top: 10px;
	}
	.guests {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-top: 15px;
	}
	.date {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-top: 15px;
	}
	.name_phone {
		display: flex;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
			rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
		padding: 15px 15px;
		border-radius: 20px;
		gap: 6px;
		width: 130px;
	}

	.name {
		display: flex;
		align-items: center;
		gap: 15px;
	}
	h3 {
		margin: 0;
	}

	.card {
		padding: 20px;
		width: 280px;
		background-color: white;
		height: 300px;
		border-radius: 15px;
	}
</style>
