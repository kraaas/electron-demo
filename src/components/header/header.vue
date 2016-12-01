<template>
	<section class="container">
		<h1>{{title}}</h1>
	</section>
</template>
<script>
export default {
	data: () => {
		return {
			title: 'Electron demo'
		}
	}
}
</script>
<style lang="sass">
	.container {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items:center;
	}
</style>