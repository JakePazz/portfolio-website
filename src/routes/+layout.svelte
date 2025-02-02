<script lang="ts">
	import '../app.css';
	import { DocumentAttachmentIcon, Home09Icon, Moon02Icon, Sun02Icon } from "hugeicons-svelte";
	import Button from "$lib/components/Button.svelte"
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	
	let { children, data } = $props();

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
		window.open(data.information.cv, "_blank")
	}

	function toggleTheme() {
		theme = theme === "dark" ? "light" : "dark"
		
		localStorage.setItem("theme", theme)
	}

</script>

<main class="w-full {theme} h-screen overflow-y-auto overflow-x-hidden bg-background">
	<header class="h-[4rem] box-border w-full px-2 md:px-4 lg:px-6 pt-6 flex items-center justify-end gap-3">
		{#if page.route.id !== "/"}
			<Button onclick={() => {goto("/")}}><Home09Icon size={34} color="rgba(var(--accent))"/></Button>
			<div class="flex-1"></div>
		{/if}
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