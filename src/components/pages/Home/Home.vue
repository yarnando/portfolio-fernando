<template>
	<section class="p-5 flex flex-col sm:flex-row">
		<div class="w-full sm:w-1/3 rounded overflow-hidden shadow-lg">
			<img class="w-full h-auto object-cover" src="@/assets/img/profile.png" alt="Foto de Fernando Silva Santos">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">Fernando Silva Santos</div>
				<p class="text-gray-700 text-base">
				Desenvolvedor Front-end/mobile há 5 anos
				</p>
			</div>
		</div>
		<div class="flex flex-col flex-1 sm:w-2/3">
			<div class="py-4 sm:p-6">
				<div>
					<h3 class="font-bold text-xl mb-2">Formação</h3>
				</div>
				<div class="">
					<div class="border-gray-400 border-b rounded p-3">
						<h4 class="sm:mb-2">Colégio Luso Carioca - Ensino médio + técnico de informática</h4>
						<span>
							Status: Completo
						</span>
					</div>
					<div class="border-gray-400 border-b rounded p-3">
						<h4 class="sm:mb-2">Estácio de Sá - Análise e Desenvolvimento de sistemas</h4>
						<span>
							Status: Cursando (3 de 5 períodos)
						</span>
					</div>
				</div>
			</div>
			<div class="py-4 sm:p-6">
				<div>
					<h3 class="font-bold text-xl mb-2">Habilidades</h3>
				</div>
				<div class="pl-5">
					<span>HTML5</span>
					<div class="border sm:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-4/5 h-3"></div>
					</div>
					<span>CSS3</span>
					<div class="border sm:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-4/5 h-3"></div>
					</div>
					<span>Javascript(ES6+)</span>
					<div class="border sm:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-11/12 h-3"></div>
					</div>
					<span>Vuejs</span>
					<div class="border sm:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-11/12 h-3"></div>
					</div>
					<span>VueX</span>
					<div class="border sm:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-11/12 h-3"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style>

</style>