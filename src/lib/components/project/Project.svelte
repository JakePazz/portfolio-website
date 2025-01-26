<script lang="ts">
	import type { Tproject } from "$lib/types/project";
	import { CldImage } from "svelte-cloudinary";
	import Container from "../Container.svelte";
	import { formatDate } from "$lib/functions/formatDate";

  const { project }: { project: Tproject } = $props()

</script>

<Container twStyles="flex gap-4">
  <div class="flex-[3]">  
    <CldImage
      src={`projects/${project.imagesFolder}/0`}
      width={1600}
      height={900}
      crop="fill_pad"
      blur="600"
      class="rounded-2xl"
    />
  </div>

  <div class="flex-1">
    <div class="flex gap-2 items-center text-textDim text-sm mb-2 flex-wrap">
      <span class="inline-flex">
        {#if project.start}
          <p>{formatDate(project.start)}</p>
        {/if}

        {#if project.end}
          <p>&NonBreakingSpace;&dash;&NonBreakingSpace;</p>
          <p>{formatDate(project.end)}</p>
        {:else}
          <p>&NonBreakingSpace;&dash;&NonBreakingSpace;Present</p>
        {/if}
      </span>

      {#if project.private}
        <span class="w-2 h-2 bg-secondary rounded-full"></span>
        <p>Private Project</p>
      {/if}
    </div>

    <h4 class="text-3xl text-medium mb-4">{project.title}</h4>

    <p class="text-textDim ">{project.description}</p>

    {#if project.skills}
      
    {/if}
  </div>
</Container>