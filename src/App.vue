<template>
  	<div id="app">
		<div class="min-h-screen flex flex-col items-center  bg-gray-200 py-6">
			<Header/>
			<main class="w-3/4 rounded overflow-hidden shadow-lg border border-gray-300">
				<router-view />
			</main>		
		</div>
  	</div>
</template>

<script>
import Header from './components/shared/Header/Header.vue'
export default {
	components: {
		Header
	}
}
</script>