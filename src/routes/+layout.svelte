<script lang="ts">
	import '../app.css';
	import { DocumentAttachmentIcon, Moon02Icon, Sun02Icon } from "hugeicons-svelte";
	import Button from "$lib/components/Button.svelte"

	import { personalInformation } from '$lib/data/personalInformation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let { children } = $props();

	let theme = $state("dark")

	onMount(() => {
		// Set based upon browser setting if no stored preference
		// const systemDark = window.matchMedia("(prefers-color-scheme: dark)")
		// theme = systemDark.matches ? "dark" : "light"		
		
		// Check if previous stored theme
		const storedTheme = localStorage.getItem("theme")

		if (storedTheme) {
			theme = storedTheme
		}
	})


	function openCV() {
		window.open(personalInformation.cv, "_blank")
	}

	function toggleTheme() {
		theme = theme === "dark" ? "light" : "dark"
		
		localStorage.setItem("theme", theme)
	}

</script>

<main class="w-full {theme} h-screen overflow-y-auto overflow-x-hidden bg-background">
	<header class="h-[4rem] box-border w-full px-2 md:px-4 lg:px-6 pt-6 flex items-center justify-end gap-3">
    <Button onclick={openCV} ><DocumentAttachmentIcon size={34} color="rgba(var(--accent))"/> <p class="text-xl">CV</p> </Button>
    <Button onclick={toggleTheme}>
			{#key theme}
				{#if theme === "light"}
					<span transition:fade>
						<Moon02Icon size={34} color="rgba(var(--accent))"/>
					</span>
				{:else}
					<span transition:fade>
						<Sun02Icon size={34} color="rgba(var(--accent))"/>
					</span>
				{/if}
			{/key}
		</Button>
  </header>

	<div class="px-4 md:px-6 lg:px-16">
		{@render children()}
	</div>

	<footer class="py-6 flex items-center justify-center">
		<p class="text-textDim">&copy; 2025 <a class="hover:underline" target="_blank" href="https://github.com/JakePazz">Jake Pazzard</a></p>
	</footer>
</main>