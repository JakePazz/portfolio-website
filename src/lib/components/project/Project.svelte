<script lang="ts">
	import type { Tproject } from "$lib/types/project";
	import { CldImage } from "svelte-cloudinary";
	import Container from "../Container.svelte";
	import { formatDate } from "$lib/functions/formatDate";
	import Button from "../Button.svelte";
	import { ArrowLeft01Icon, ArrowRight01Icon, Github01Icon, Globe02Icon, Notebook01Icon, Notebook02Icon } from "hugeicons-svelte";
	import { fly } from "svelte/transition";

  // Data
  import { knownSkills, learningSkills } from "$lib/data/skills"
	import Skill from "../Skill.svelte";
	import { openLink } from "$lib/functions/openLink";

  const skills = knownSkills.concat(learningSkills)


  const { project, aligned = "right" }: { project: Tproject, aligned: "left" | "right" } = $props()

  let hoveringImage: boolean = $state(false)
  let imagesContainer: HTMLDivElement

  function nextImageIndex() {
    const scrollDistance = imagesContainer.offsetWidth
    imagesContainer.scrollBy({ left: scrollDistance, behavior: "smooth"})
  }

  function prevImageIndex() {
    const scrollDistance = imagesContainer.offsetWidth
    imagesContainer.scrollBy({ left: -scrollDistance, behavior: "smooth"})
  }

  let expanded: boolean = $state(false)
  let translate: string = $state(aligned === "left" ? "translate-x-1/3" : "-translate-x-1/3")
 
  function toggleExpand() {
    if (translate === "") {
      translate = (aligned === "left" ? "translate-x-1/3" : "-translate-x-1/3")
    } else {
      translate = ""
    }
    expanded ? expanded = false : expanded = true
  }

</script>

<!-- {aligned === "left" ? "translate-x-1/3" : "-translate-x-1/3"} -->

<Container  twStyles="flex gap-4 {translate} {aligned === "left" ? "flex-row-reverse" : ""} transition-all">
  <div
  role="group"
  class="relative flex-[3] max-w-fit flex items-center"
  onmouseenter={() => {hoveringImage = true}}
  onmouseleave={() => {hoveringImage = false}}
  >
    {#if hoveringImage && project.imagesCount > 1}
      <span transition:fly={{duration: 200, x: -20}} class="absolute top-1/2 left-4 z-20">
        <Button onclick={prevImageIndex}><ArrowLeft01Icon color="rgba(var(--accent))" size={30}/></Button>
      </span>
    {/if}
    
    <div bind:this={imagesContainer} class="flex overflow-x-scroll snap-mandatory no-scrollbar ">
      {#each Array(project.imagesCount) as _, index}
        <CldImage
          src={`portfolio/projects/${project.imagesFolder}/${index}`}
          width={1600}
          height={900}
          crop="scale"
          class="rounded-3xl transition-all z-10 {hoveringImage ? "" : "blur-sm"}"
        />
      {/each}
    </div>

    {#if hoveringImage && project.imagesCount > 1}
      <span transition:fly={{duration: 200, x: 20}} class="absolute top-1/2 right-4 z-20">
        <Button onclick={nextImageIndex}><ArrowRight01Icon color="rgba(var(--accent))" size={30}/></Button>
      </span>
    {/if}
  </div>

  <div class="flex-1 flex flex-col ">
    <div class="flex gap-2 items-center text-textDim text-sm mb-2 flex-wrap">
      
      {#if aligned === "left"}
        {@render expansionArrow()}
      {/if}
      
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
        <p>Private</p>
      {/if}

      {#if aligned === "right"}
        {@render expansionArrow()}
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

    {#if project.links}
      <div class="flex-1 flex justify-end flex-col gap-2 items-{aligned === "left" ? "start" : "end"}">
        {#if project.links.github}
          <Button onclick={() => openLink(project.links!.github!)}><Github01Icon color="rgba(var(--accent))" size={32}/></Button>
        {/if}
        {#if project.links.liveSite}
          <Button onclick={() => openLink(project.links!.liveSite!)}><Globe02Icon color="rgba(var(--accent))" size={32}/></Button>
        {/if}
        {#if project.links.readMore}
          <Button onclick={() => openLink(project.links!.readMore!)}><Notebook02Icon color="rgba(var(--accent))" size={32}/></Button>
        {/if}
      </div>
    {/if}
  </div>
</Container>


{#snippet expansionArrow()}

  {#if aligned === "right"}
    <!-- Forces expansion arrow to end -->
    <div class="flex-1"></div>
  {/if}

  <Button onclick={toggleExpand}>
    {#if aligned === "left"}
      <ArrowLeft01Icon class="transition-all duration-[5000] {expanded ? "rotate-180" : "animate-pulse"}" color="rgba(var(--accent))" size={30}/>
    {:else}
      <ArrowRight01Icon class="transition-all {expanded ? "rotate-180" : "animate-pulse"}" color="rgba(var(--accent))" size={30}/>
    {/if}
  </Button>
{/snippet}