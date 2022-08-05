<!-- MyButton.vue - переиспользуемый компонент MyButton-->

<template>
	<button class="btn">
		<!-- все что мы будем добавлять в my-button - будет попадать в  slot-->
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "my-button"
}
</script>

<style scoped>
.btn {
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 2px solid teal;
	transition: all 0.3s ease 0s;
	cursor: pointer;
}

.btn:hover {
	background: teal;
	color: rgb(255, 255, 255);
}
</style>