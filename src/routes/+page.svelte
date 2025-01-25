<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import Button from "$lib/components/Button.svelte";
  import { ArrowDown01Icon, ArrowLeft01Icon, ArrowRight01Icon, Github01Icon, LibraryIcon, Linkedin01Icon, MailAtSign01Icon, Mortarboard02Icon } from "hugeicons-svelte";
	import PlaneIcon from "$lib/components/PlaneIcon.svelte";
	import Skill from "$lib/components/Skill.svelte";
  import { knownSkills, learningSkills } from "$lib/data/skills"
  import { personalInformation } from "$lib/data/personalInformation"
  import { experiences } from "$lib/data/experiences"
	import Experience from "$lib/components/timeline/Experience.svelte";
	import type { Texperience } from "$lib/types/experience";

  function copyEmail() {
    navigator.clipboard.writeText(personalInformation.email)
  }

  function openLink(link: string | URL) {
    window.open(link, "_blank")
  }

  let timelineContainer: HTMLDivElement

  // Timeline left/right button
  function scrollLeft() {
    timelineContainer.scrollBy({ left: -650, behavior: "smooth" })
  }

  function scrollRight() {
    timelineContainer.scrollBy({ left: 650, behavior: "smooth" })
  }

  // Timeline click and drag horizontal scroll
  let isDown = false;
  let startX: number;
  let scrollingLeft: number;

  function handleMouseDown(event: MouseEvent) {
    isDown = true;

    startX = event.pageX - timelineContainer.offsetLeft;
    scrollingLeft = timelineContainer.scrollLeft;
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDown) return
    
    event.preventDefault()

    const x = event.pageX - timelineContainer.offsetLeft
    const walk = (x - startX) * 1
    timelineContainer.scrollLeft = scrollingLeft - walk
  }

</script>

<section class="h-[calc(100dvh-4rem)] w-full pt-6 flex flex-col gap-4">

  <div class="pt-44 pb-6 flex-1 flex justify-start items-start flex-col gap-20">
    
    <div class="flex-1">
      <h1 class="text-5xl">Good Evening, I'm <span class="bg-gradient-to-l from-primary to-accent text-transparent bg-clip-text">Jake Pazzard</span></h1>
      <h5 class="text-xl text-textDim">A student software engineer</h5>
    </div>

    <div class="flex flex-nowrap gap-5">
      <Button onclick={() => {copyEmail()}}><p class="text-2xl">Email</p><MailAtSign01Icon color="rgba(var(--accent))" size={30}/></Button>
      <Button onclick={() => {openLink(personalInformation.github)}}><p class="text-2xl">GitHub</p><Github01Icon color="rgba(var(--accent))" size={30}/></Button>
      <Button onclick={() => {openLink(personalInformation.linkedin)}}><p class="text-2xl">LinkedIn</p><Linkedin01Icon color="rgba(var(--accent))" size={30}/></Button>
    </div>
    
    <div class="animate-bounce w-full flex items-center justify-center">
      <ArrowDown01Icon color="rgba(var(--accent))" size={30}/>
    </div>
  </div>
</section>

<section class="flex justify-center gap-12 w-full mt-16 mb-28">
  <div class="w-1/2">
    <Container>
      <p class="pb-8 text-textDim">My name is Jake Pazzard and I am a student from the UK.</p>
      <p class="pb-4 text-textDim">I find myself curious in any technology I can get my digital hands on and enjoy creating solutions that solve people&apos;s problems while utilising modern tools available to us.</p>
      <p class="pb-4 text-textDim">I'm currently studying the <a target="_blank" href="https://qualifications.pearson.com/en/qualifications/t-levels/digital-production-design-and-development.html#%2Ftab-September2023">Digital Production, Design and Development T-Level</a> where I learn more about the core concepts within the digital sector and gain skills in full stack web development. </p>
      <p class="pb-8 text-textDim">When I am not developing you can find me growing my fascination with aviation <PlaneIcon></PlaneIcon> or exploring a sandbox game.</p>
      <p class="text-accent italic text-sm">Currently looking for a Degree apprenticeship in technology or a junior software development role.</p>
    </Container>
  </div>
  <div class="flex flex-col w-1/2">
    <h5 class="text-2xl inline-flex gap-2 items-center"><LibraryIcon color="rgba(var(--accent))" size={30}/> I know</h5>
    <div class="flex-1 flex flex-wrap gap-3">
      {#each knownSkills as skill}
        <Skill {skill} />
      {/each}
    </div>
    <h5 class="text-2xl inline-flex gap-2 items-center"><Mortarboard02Icon color="rgba(var(--accent))" size={30}/> I&apos;m Learning</h5>
    <div class="flex-1 flex flex-wrap gap-3">
      {#each learningSkills as skill}
        <Skill {skill} />
      {/each}
    </div>
  </div>
</section>

<section class="flex flex-col gap-12 w-full mb-28 ">
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-medium">Timeline</h3>
    <div class="inline-flex gap-2 items-center">
      <Button onclick={scrollLeft}><ArrowLeft01Icon color="rgba(var(--accent))" size={30}/></Button>
      <Button onclick={scrollRight}><ArrowRight01Icon color="rgba(var(--accent))" size={30}/></Button>
    </div>  
  </div>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
  bind:this={timelineContainer}
  class="flex w-full select-none overflow-x-scroll pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab"
  onmousedown={handleMouseDown}
  onmouseleave={() => {
    isDown = false
  }}
  onmouseup={() => {
    isDown = false
  }}
  onmousemove={handleMouseMove}
  role="list"
  >
    {#each experiences as experience, index}
      {@render timelineSection(experience, index)}
    {/each}
  </div>
</section>

<section>
  <h3 class="text-3xl font-medium">Projects</h3>

</section>

<!-- Snippets -->

{#snippet timelineSection(experience: Texperience, index: number)}
<div class="h-full flex flex-col">
  <div class="px-6">
    <Experience {experience} />
  </div>

  <!-- Timeline line -->
  <div class="flex w-full items-end">
    <!-- Line -->
    <div class="bg-secondary/60 h-1 flex-1 mb-1 {index === 0 ? 'rounded-l-full' : ''}"></div>

    <!-- Marker and vertical line -->
    <div class="flex flex-col items-center">
      <div class="bg-secondary h-8 w-1"></div>
      <div class="bg-secondary h-3 w-3 rounded-full"></div>
    </div>

    <!-- Line -->
    <div class="bg-secondary/60 h-1 flex-[2] mb-1 {index === experiences.length - 1 ? 'rounded-r-full' : ''}"></div>
  </div>
  
</div>
{/snippet}

<style>
  .active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
</style>