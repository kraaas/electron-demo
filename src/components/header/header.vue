<template>
	<header class="header">
		{{title}}
	</header>
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
<style>
.header {
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border-bottom: 1px solid #dedede;
}
</style>