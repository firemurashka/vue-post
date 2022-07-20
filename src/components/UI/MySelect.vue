<template>
	<!-- двухстороннее связывание -->
	<!-- директива  v-model - передаем  modelValue -->
	<!-- modelValue принимаем как props -->
	<select :value="modelValue" @change="changeOption">
		<!-- пустой option неактивный - его не возможно выбрать -->
		<option disabled value="">Выберите из списка</option>
		<!-- итерация по массиву в цикле for -->
		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.name }}
		</option>

	</select>
</template>


<script>
export default {
	name: 'my-select',
	props: {
		/* ожидаем modelValue */
		modelValue: {
			type: String,
		},
		/* 2-й пропс options */
		options: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		changeOption(event) {
			this.$emit('update:modelValue', event.target.value);
		}
	}
}
</script>



<style>
</style>