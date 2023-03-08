<script lang="ts">

	import Header from '$lib/Header.svelte';
  import PlanCards from '$lib/PlanCards.svelte';
	import { onMount } from 'svelte';


	onMount(async() => {
		navigator.getInstalledRelatedApps().then(app => {
			console.log(app)
		}).catch(err => {
			console.log(err)
		})
		if ("getInstalledRelatedApps" in navigator) {

			// const relatedApps: any = await navigator.getInstalledRelatedApps();
			// relatedApps.forEach((app: any) => {
			// 	console.log(app.id, app.platform, app.url);
			// });
		}
	});
	
	const name = "Lukas";

</script>

<div class="w-full h-full flex flex-col px-3 space-y-12">
	<Header />
	<div class="flex flex-col ml-3 text-lg font-medium">
		<div>Hallo {name} 🫵</div>
		<div class="text-[#999999] text-base">Es gibt einen neuen Plan <br /> für morgen</div>
	</div>
	<div class="flex flex-1 flex-col space-y-3">
		<PlanCards />
	</div>
</div>

