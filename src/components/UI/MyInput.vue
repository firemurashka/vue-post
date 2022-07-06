<template>
	<!-- присоединяем к input нашу modelValue с помощью v-bind, v-on - вешаем обработчик события input-->
	<input class="input" :modelValue="value" @input="updateInput" type="text">
</template>


<script>
export default {
	//задаем названиекомпонента  MyInput
	name: "my-input",
	//принимаем modelValue с помощью props
	props: {
		modelValue: [String, Number]
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>
<style>
.input {
	width: 100%;
	border: 1px solid teal;
	margin: 15px 0px 0px 0px;
	padding: 10px 15px;
	outline: none;
}
</style>