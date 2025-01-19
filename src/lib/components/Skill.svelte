<script lang="ts">
	import type { Tskill } from "$lib/types/skill";
	import { fade } from "svelte/transition";

  const { skill }: {skill: Tskill} = $props()

  let hovering = $state(false)

</script>

<div class="relative inline-block">
  <button
  onmouseenter={() => {
    hovering = true
  }}

  onmouseleave={() => {
    hovering = false
  }}
  onclick={() => {
    window.open(skill.link, "_blank")
  }}
  aria-label={skill.name}
  class="
  bg-secondary/15 rounded-lg px-2 py-2 inline-flex items-center justify-center gap-3
  transition-all
  hover:scale-105 hover:cursor-pointer hover:bg-secondary/25
  ">
    {#if !hovering}
      <i class="text-5xl {skill.deviconName}"></i>
    {:else}
      <i class="text-5xl {skill.deviconName}" ></i>  
      <p>{skill.name}</p>
    {/if}
    
  </button>

  <!-- {#if hovering}
    <div class="absolute top-full left-0 bg-secondary/15 rounded-lg p-2 mt-2" transition:fade >{skill.name}</div>  
  {/if} -->
</div>