<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import type { Texperience, TexperienceDate } from "$lib/types/experience";
	import { Link01Icon, Location01Icon } from "hugeicons-svelte";

  const { experience }: { experience: Texperience } = $props()

  function formatDate(date: TexperienceDate) {
    if (date.month) {
      const startMonthWritten = new Date(2000, date.month - 1, 1).toLocaleString("default", { month: "short"})
      return `${startMonthWritten}. ${date.year}`
    }

    return date.year
  }

</script>


<Container twStyles="w-[650px] px-6 flex flex-col">
  <div class="inline-flex items-center justify-between">
    <h4 class="text-2xl">{experience.title}</h4>
    <span class="inline-flex items-center gap-1 text-textDim">
      <Location01Icon size={20} color="rgba(var(--accent))"/>
      <a class="font-medium hover:text-accent/80 transition-all" href={experience.organisation.link} target="_blank">{experience.organisation.name}</a>
    </span>
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