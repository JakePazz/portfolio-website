<script lang="ts">
  import { page } from "$app/state"
	import Button from "$lib/components/Button.svelte";
	import { RefreshIcon } from "hugeicons-svelte";
</script>


<section class="h-[calc(100dvh-4rem)] w-full pt-6 justify-center items-center flex flex-col">
  <h1 class="text-6xl text-accent font-medium">{page.status}</h1>
  <span class="w-24 h-1 bg-accent/30 mb-6"></span>
  <p class="text-2xl font-medium text-textDim">'{page.error?.message}'</p>
  <p class="text-textDim italic mb-8">If this issue persists, please contact me <a class="font-medium transition-all  hover:text-accent" href="mailto:contact@jakepazzard.dev">here</a></p>
  <Button onclick={() => {document.location.href = "/"}}><RefreshIcon class="animate-pulse" strokeWidth={2} color="rgba(var(--accent))" size={30}/> Refresh</Button>
</section>