<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import Button from "$lib/components/Button.svelte";
  import { ArrowDown01Icon, ArrowLeft01Icon, ArrowRight01Icon, Github01Icon, LibraryIcon, Linkedin01Icon, MailAtSign01Icon, Mortarboard02Icon, TaskAdd02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
	import Skill from "$lib/components/Skill.svelte";
	import Experience from "$lib/components/timeline/Experience.svelte";
	import type { Texperience } from "$lib/types/experience";
	import Project from "$lib/components/project/Project.svelte";
	import { openLink } from "$lib/functions/openLink";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

  let { data } = $props();
  let showCopyConfirmation = $state(false)

  function copyEmail() {
    navigator.clipboard.writeText(data.information.email)
    showCopyConfirmation = true

    setTimeout(() => {
      showCopyConfirmation = false
    }, 3000)
  }

  // Timeline left/right button
  let timelineContainer: HTMLDivElement

  let screenMedium = $state(false)

  onMount(() => {
    // Increase scroll width for timeline buttons if screen medium^
    screenMedium = screen.width > 768 ? true : false

    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("!opacity-100")
        }
      })
    })

    const hiddenElements = document.querySelectorAll(".loading-fade-in")
    hiddenElements.forEach((element) => {
      observer.observe(element)
    })
  })

  function scrollLeft() {
    timelineContainer.scrollBy({ left: screenMedium ? -650 : -400, behavior: "smooth" })
  }

  function scrollRight() {
    timelineContainer.scrollBy({ left: screenMedium ? 650 : 400, behavior: "smooth" })
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

  // Sort timeline items chronologically
  data.experiences.sort((a, b) => {

    if (a.start.year !== b.start.year) {
      return a.start.year - b.start.year
    }

    if (a.start.month && b.start.month) {
      return a.start.month - b.start.month
    }

    return 0
  })


  // Good {} functionality
  const hour: number = new Date().getHours()
  const greeting: string = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening"


</script>

<section class="transition-all duration-[1s] loading-fade-in h-[calc(100dvh-4rem)] w-full pt-6 flex flex-col gap-4 opacity-0">

  <div class="pt-16 md:pt-32 lg:pt-44 pb-6 flex-1 flex justify-start items-start flex-col gap-20">
    
    <div class="flex-1">
      <h1 class="text-4xl md:text-5xl text-balance">Good {greeting}, I'm <span class="bg-gradient-to-l from-primary to-accent text-transparent bg-clip-text">Jake Pazzard</span></h1>
      <h5 class="text-lg md:text-xl text-textDim">A student software engineer</h5>
    </div>

    <div class="flex flex-wrap md:flex-nowrap gap-5">
      <Button onclick={() => {copyEmail()}}><p class="text-2xl">Email</p><HugeiconsIcon icon={MailAtSign01Icon} className="text-accent" size={30}/></Button>
      <Button onclick={() => {openLink(data.information.github)}}><p class="text-2xl">GitHub</p><HugeiconsIcon icon={Github01Icon} className="text-accent" size={30}/></Button>
      <Button onclick={() => {openLink(data.information.linkedin)}}><p class="text-2xl">LinkedIn</p><HugeiconsIcon icon={Linkedin01Icon} className="text-accent" size={30}/></Button>
    </div>
    
    <div class="animate-bounce w-full flex items-center justify-center">
      <HugeiconsIcon icon={ArrowDown01Icon} className="text-accent" size={30}/>
    </div>
  </div>
</section>

<section class="transition-all duration-[1s] loading-fade-in flex flex-col md:flex-row justify-center gap-12 w-full mt-16 mb-28 opacity-0">
  <div class="w-full md:w-1/2">
    <Container>
      <p class="pb-8 text-textDim">My name is Jake Pazzard and I am a student from the UK.</p>
      <p class="pb-4 text-textDim">I find myself curious in any technology I can get my digital hands on and enjoy creating solutions that solve people&apos;s problems while utilising modern tools available to us.</p>
      <p class="pb-4 text-textDim">I'm currently studying the <a target="_blank" href="https://qualifications.pearson.com/en/qualifications/t-levels/digital-production-design-and-development.html#%2Ftab-September2023">Digital Production, Design and Development T-Level</a> where I learn more about the core concepts within the digital sector and gain skills in full stack web development. </p>
      <p class="pb-8 text-textDim">When I am not developing you can find me growing my fascination with aviation {@render planeIcon()} or exploring a sandbox game.</p>
      <p class="text-accent italic text-sm">Currently looking for a Degree apprenticeship in technology or a junior software development role.</p>
    </Container>
  </div>
  <div  class="flex flex-col w-full md:w-1/2">
    <h5 class="text-2xl inline-flex gap-2 items-center"><HugeiconsIcon icon={LibraryIcon} className="text-accent" size={30}/> I know</h5>
    <div class="flex-1 flex flex-wrap gap-3">
      {#each data.knownSkills as skill}
        <Skill {skill} />
      {/each}
    </div>
    <h5 class="text-2xl inline-flex gap-2 items-center"><HugeiconsIcon icon={Mortarboard02Icon} className="text-accent" size={30}/> I&apos;m Learning</h5>
    <div class="flex-1 flex flex-wrap gap-3">
      {#each data.learningSkills as skill}
        <Skill {skill} />
      {/each}
    </div>
  </div>
</section>

<section class="transition-all duration-[1s] loading-fade-in flex flex-col gap-12 w-full mb-28 opacity-0">
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-medium">Timeline</h3>
    <div class="inline-flex gap-2 items-center">
      <Button onclick={scrollLeft}><HugeiconsIcon icon={ArrowLeft01Icon} className="text-accent" size={30}/></Button>
      <Button onclick={scrollRight}><HugeiconsIcon icon={ArrowRight01Icon} className="text-accent" size={30}/></Button>
    </div>  
  </div>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
  bind:this={timelineContainer}
  class="flex w-full select-none overflow-x-scroll items-end pb-16 no-scrollbar cursor-grab"
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
    {#each data.experiences as experience, index}
      {@render timelineSection(experience, index)}
    {/each}
  </div>
</section>

<section class="transition-all duration-[1s] loading-fade-in flex flex-col gap-12 w-full mb-28 opacity-0">
  <h3 class="text-3xl font-medium">Projects</h3>
  <div class="flex flex-col gap-32">
    {#each data.projects as project, index}
      <Project {project} knownSkills={data.knownSkills} learningSkills={data.learningSkills} aligned={index % 2 === 0 ? "right" : "left"} />
    {/each}
  </div>
</section>

<!-- Copy confirmation message -->
{#if showCopyConfirmation}
  <div role="alert" transition:fly={{duration: 350, y: 50}} class="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-secondary/30 rounded-lg inline-flex gap-4 px-2 py-4 items-center">
    <HugeiconsIcon icon={TaskAdd02Icon} className="text-accent" size={30}/>
    <p class="text-textDim text-lg">Copied to Clipboard</p>
  </div>
{/if}

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
    <div class="bg-secondary/60 h-1 flex-[2] mb-1 {index === data.experiences.length - 1 ? 'rounded-r-full' : ''}"></div>
  </div>
  
</div>
{/snippet}

{#snippet planeIcon()}
  <span class="inline-flex flex-col justify-center gap-0.5">

    <span class="hover:animate-takeoff">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="24" height="16" color="rgba(var(--accent))" fill="none">
          <path d="M3.82527 12.1661C3.55027 11.9661 3.30027 11.7161 3.00028 10.8411C2.91891 10.6241 2.61139 9.53619 2.35028 8.54109C2.13003 7.7017 1.93377 6.93555 2.02528 6.74109C2.10029 6.54109 2.20027 6.39109 2.52527 6.19109C2.72527 6.06802 3.75027 5.81609 3.95027 5.76609C4.15027 5.71609 4.42526 5.69109 4.65027 5.76609C5.07527 5.84109 5.95027 7.11609 6.17527 7.26609C6.27526 7.36609 6.60027 7.657 6.97527 7.69109C7.25027 7.71609 7.52527 7.64109 7.82528 7.51609C8.10027 7.40151 13.5253 4.76609 14.0253 4.54109C18.1003 2.84109 21.0603 5.63609 21.5103 6.23609C21.9753 6.81609 22.0753 6.99109 21.9503 7.49109C21.7887 8.01609 21.3503 8.11609 21.1003 8.19109C20.8503 8.26609 17.4003 9.19109 16.0503 9.56609C15.7554 9.6621 15.6114 9.85492 15.5753 9.89109C15.4003 10.1411 14.6053 11.8411 14.3803 12.2161C14.2253 12.6161 13.8003 13.1161 13.2503 13.3161C12.6753 13.5161 11.6753 13.7411 11.4503 13.8161C11.2253 13.8911 10.7003 14.0411 10.5253 13.9911C10.3003 13.9411 10.0853 13.7161 10.1853 13.3661C10.2853 13.0161 10.4753 12.0411 10.5003 11.8911C10.5253 11.7411 10.7753 11.1161 10.5003 11.0911C10.4503 11.0161 9.92527 11.2411 9.15027 11.4161C8.57449 11.5782 7.9715 11.7386 7.55027 11.8411C5.92527 12.3161 5.04521 12.4411 4.85027 12.4411C4.47527 12.4411 4.20027 12.3911 3.82527 12.1661Z" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 2" width="24" height="2" color="rgba(var(--accent))" fill="none">
      <path d="M0 0.75H24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  </span>
{/snippet}


<style>
</style>