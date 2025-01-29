<script lang="ts">
	import type { Tproject } from "$lib/types/project";
	import { CldImage } from "svelte-cloudinary";
	import Container from "../Container.svelte";
	import { formatDate } from "$lib/functions/formatDate";
	import Button from "../Button.svelte";
	import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-svelte";
	import { fly } from "svelte/transition";

  // Data
  import { knownSkills, learningSkills } from "$lib/data/skills"
	import Skill from "../Skill.svelte";

  const skills = knownSkills.concat(learningSkills)


  const { project }: { project: Tproject } = $props()

  let hoveringImage: boolean = $state(false)

</script>

<Container twStyles="flex gap-4">
  <div
  role="group"
  class="relative flex-[3] max-w-fit"
  onmouseenter={() => {hoveringImage = true}}
  onmouseleave={() => {hoveringImage = false}}
  >
    {#if hoveringImage}
      <span transition:fly={{duration: 200, x: -20}} class="absolute top-1/2 left-4 z-20">
        <Button onclick><ArrowLeft01Icon color="rgba(var(--accent))" size={30}/></Button>
      </span>
    {/if}
    <CldImage
      src={`portfolio/projects/${project.imagesFolder}/0`}
      width={1600}
      height={900}
      crop="fill_pad"
      class="rounded-3xl transition-all z-10 {hoveringImage ? "" : "blur-sm"}"
    />
    {#if hoveringImage}
      <span transition:fly={{duration: 200, x: 20}} class="absolute top-1/2 right-4 z-20">
        <Button onclick><ArrowRight01Icon color="rgba(var(--accent))" size={30}/></Button>
      </span>
    {/if}
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

    <h4 class="text-3xl mb-4">{project.title}</h4>

    <p class="text-textDim ">{project.description}</p>

    {#if project.skills}
      <h5 class="text-2xl mt-6 font-medium">Skills</h5>
      <div class="flex flex-wrap gap-2">
        {#each project.skills as projectSkill}
          {#if skills.find((skill) => skill.id === projectSkill)}
            <Skill skill={skills.find((skill) => skill.id === projectSkill)!!} />
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</Container>