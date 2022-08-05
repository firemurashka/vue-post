<!-- App.vue - главный компонент - точка входа -->

<!-- template - разметка страницы - структура нашего компонента -->
<template>
	<my-navbar></my-navbar>
	<!--главный компонент -App-->
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
/* импорт компонента MyNavbar */
import MyNavbar from "@/components/MyNavbar";

export default {
	components: {
		MyNavbar
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}
</style>
