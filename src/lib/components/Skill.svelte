<script lang="ts">
	import type { Tskill } from "$lib/types/skill";

  const { skill }: {skill: Tskill} = $props()
</script>

<div class="relative inline-block">
  <button
  onclick={() => {
    window.open(skill.link, "_blank")
  }}
  aria-label={skill.name}
  class="
  bg-secondary/15 rounded-lg px-2 py-2 inline-flex items-center justify-center gap-3
  transition-all
  hover:scale-105 hover:cursor-pointer hover:bg-secondary/25
  ">
    <i class="text-5xl {skill.deviconName}"></i>
  </button>
</div>