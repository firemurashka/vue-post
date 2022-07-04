<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>


<script>
export default {

}
</script>
<style>
.btn {
	margin-top: 15px;
	align-self: flex-end;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 2px solid teal;
}
</style>