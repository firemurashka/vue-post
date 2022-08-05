<!-- MyDialog.vue - - переиспользуемый компонент MyDialog-->

<template>
	<!-- если show = true? то диалоговое окно будет видно -->
	<div class="dialog" v-if="show" @click.stop="hideDialog">
		<div class="dialog__content" @click.stop>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin"

export default {
	name: "my-dialog",
	mixins: [toggleMixin],
	mounted() {
		console.log('mixin mounted');
	}
	/* 	props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			hideDialog() {
				this.$emit('update:show', false)
			}
		} */
}
</script>

<style scoped>
.dialog {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	display: flex;
}

.dialog__content {
	margin: auto;
	background-color: #fff;
	border-radius: 12px;
	min-height: 50px;
	min-width: 300px;
	padding: 20px;
}
</style>

