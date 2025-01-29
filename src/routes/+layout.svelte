<script lang="ts">
	import '../app.css';
	import { DocumentAttachmentIcon, Sun02Icon } from "hugeicons-svelte";
	import Button from "$lib/components/Button.svelte"

	import { personalInformation } from '$lib/data/personalInformation';

	let { children } = $props();

	function openCV() {
		window.open(personalInformation.cv, "_blank")
	}

</script>

<main class="w-full">
	<header class="h-[4rem] box-border w-full px-6 pt-6 flex items-center justify-end gap-3">
    <Button onclick={openCV} ><DocumentAttachmentIcon size={34} color="rgba(var(--accent))"/> <p class="text-xl">CV</p> </Button>
    <Button onclick={() => {}}><Sun02Icon size={34} color="rgba(var(--accent))"/></Button>
  </header>

	<div class="px-16">
		{@render children()}
	</div>

	<footer class="py-6 flex items-center justify-center">
		<p class="text-textDim">&copy; 2025 <a class="hover:underline" target="_blank" href="https://github.com/JakePazz">Jake Pazzard</a></p>
	</footer>
</main>