<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { formatDate } from "$lib/functions/formatDate";
	import type { Texperience } from "$lib/types/experience";
	import { Link01Icon, Location01Icon } from "hugeicons-svelte";

  const { experience }: { experience: Texperience } = $props()
</script>


<Container twStyles="w-[400px] md:w-[650px] px-6 flex flex-col">
  <div class="inline-flex flex-col items-start md:items-center md:flex-row-reverse justify-between">
    <span class="inline-flex items-center gap-1 text-textDim">
      <Location01Icon size={20} color="rgba(var(--accent))"/>
      <a class="font-medium text-nowrap hover:text-accent/80 transition-all" href={experience.organisation.link} target="_blank">{experience.organisation.name}</a>
    </span>
    <h4 class="text-2xl text-balance">{experience.title}</h4>
  </div>
  <p class="text-textDim mb-6 ">{experience.description}</p>
  
  <ul class="ml-8 mb-6 list-disc marker:text-accent">
    {#each experience.keyPoints as point}
      <li class="text-textDim">{point}</li>
    {/each}
  </ul>


  <div class="flex justify-between items-end w-full flex-1">

    <ul class="inline-flex items-center gap-2 text-accent/60 text-sm">
      {#if experience.links}
        {#each experience.links as link}
          <a class="inline-flex items-center hover:text-accent/90 transition-all" href={link.url} target="_blank">{link.title} <Link01Icon size={16} strokeWidth={2}/> </a>
        {/each}
      {/if}
    </ul>

    <div class="text-textDim flex text-sm italic">
      <!-- {date} - {date OR 'present'} -->
      {#if experience.start}
        <p>{formatDate(experience.start)}</p>
      {/if}

      {#if experience.end}
        <p>&NonBreakingSpace;&dash;&NonBreakingSpace;</p>
        <p>{formatDate(experience.end)}</p>
      {:else}
        <p>&NonBreakingSpace;&dash;&NonBreakingSpace;Present</p>
      {/if}
      
    </div>
  </div>
</Container>