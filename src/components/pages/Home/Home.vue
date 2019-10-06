<template>
	<section class="p-5 flex flex-col md:flex-row">
		<div class="w-full md:w-1/3 rounded overflow-hidden shadow-lg">
			<img class="w-full h-auto object-cover" src="@/assets/img/profile.png" alt="Foto de Fernando Silva Santos">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">Fernando Silva Santos</div>
				<p class="text-gray-700 text-base">
				Desenvolvedor Front-end/mobile há 5 anos. Trabalha atualmente na Prefeitura do Rio de Janeiro, onde atua na manutenção e criação de sistemas para a àrea da saúde do Município.
				</p>
			</div>
		</div>
		<div class="flex flex-col flex-1 md:w-2/3">
			<div class="py-3 md:px-6">
				<div>
					<h3 class="font-bold text-xl mb-2">Redes Sociais</h3>
				</div>
				<div class="text-sm">
					<span class="text-gray-700 font-bold p-3"> <a target="_blank" class="hover:underline hover:opacity-75" href="https://github.com/yarnando">GitHub</a>
					</span>
					/
					<span class="text-gray-700 font-bold p-3"> <a target="_blank" class="hover:underline hover:opacity-75" href="https://www.linkedin.com/in/fernando-silva-santos-b40ab710b/">LinkedIn</a>
					</span>
				</div>
			</div>		
			<div class="py-3 md:px-6">
				<div>
					<h3 class="font-bold text-xl mb-2">Formação</h3>
				</div>
				<div class="text-sm">
					<div class="border-gray-400 border-b rounded px-3 pb-3">
						<h4 class="md:mb-2">Colégio Luso Carioca - Ensino médio + técnico de informática</h4>
						<span>
							Status: Completo
						</span>
					</div>
					<div class="rounded px-3 pt-3">
						<h4 class="md:mb-2">Estácio de Sá - Análise e Desenvolvimento de sistemas</h4>
						<span>
							Status: Cursando (3 de 5 períodos)
						</span>
					</div>
				</div>
			</div>
			<div class="py-3 md:px-6">
				<div>
					<h3 class="font-bold text-xl mb-2">Habilidades</h3>
				</div>
				<div class="pl-5">
					<span>HTML5</span>
					<div class="border md:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-5/6 h-3"></div>
					</div>
					<span>CSS3</span>
					<div class="border md:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-5/6 h-3"></div>
					</div>
					<span>Javascript(ES6+)</span>
					<div class="border md:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-11/12 h-3"></div>
					</div>
					<span>Vue.js + VueX</span>
					<div class="border md:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-11/12 h-3"></div>
					</div>
					<span>React + Redux</span>
					<div class="border md:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-4/5 h-3"></div>
					</div>
					<span>React Native + Redux</span>
					<div class="border md:mb-2 border-gray-500 rounded-full">
						<div class="rounded-full bg-green-500 w-4/5 h-3"></div>
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