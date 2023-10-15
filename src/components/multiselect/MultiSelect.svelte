<script lang="ts">
	import MultiSelect from 'svelte-multiselect';

	export let select = ['husan', 'asadbek'];
	let selected;
</script>

<MultiSelect
	id="fav-languages"
	options={select}
	placeholder="Take your pick..."
	bind:selected
	let:idx
	let:option
>
	<!-- <LanguageSlot {idx} {option} gap="1ex" /> -->
</MultiSelect>

<style>
</style>
