<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import Button from "$lib/components/Button.svelte";
  import { AirplaneTakeOff01Icon, ArrowDown01Icon, Github01Icon, LibraryIcon, Linkedin01Icon, MailAtSign01Icon, Mortarboard02Icon } from "hugeicons-svelte";
	import PlaneIcon from "$lib/components/PlaneIcon.svelte";
</script>

<div class="h-[calc(100dvh-4rem)] w-full pt-6 flex flex-col gap-4">

  <div class="pt-44 pb-6 flex-1 flex justify-start items-start flex-col gap-20">
    
    <div class="flex-1">
      <h1 class="text-5xl">Good Evening, I'm <span class="bg-gradient-to-l from-primary to-accent text-transparent bg-clip-text">Jake Pazzard</span></h1>
      <h5 class="text-xl text-textDim">A student software engineer</h5>
    </div>

    <div class="flex flex-nowrap gap-5">
      <Button><p class="text-2xl">Email</p><MailAtSign01Icon color="rgba(var(--accent))" size={30}/></Button>
      <Button><p class="text-2xl">GitHub</p><Github01Icon color="rgba(var(--accent))" size={30}/></Button>
      <Button><p class="text-2xl">LinkedIn</p><Linkedin01Icon color="rgba(var(--accent))" size={30}/></Button>
    </div>
    
    <div class="animate-bounce w-full flex items-center justify-center">
      <ArrowDown01Icon color="rgba(var(--accent))" size={30}/>
    </div>
  </div>
</div>

<div class="flex justify-center gap-12 w-full">
  <div class="w-1/2">
    <h3 class="text-2xl pb-3 w-max">Get to know me</h3>
    <Container>
      <p class="pb-8">My name is Jake Pazzard and I am a student from the UK.</p>
      <p class="pb-4">I find myself curious in any technology I can get my digital hands on and enjoy creating solutions that solve people&apos;s problems while utilising modern tools available to us.</p>
      <p class="pb-4">I'm currently studying the <a target="_blank" href="https://qualifications.pearson.com/en/qualifications/t-levels/digital-production-design-and-development.html#%2Ftab-September2023">Digital Production, Design and Development T-Level</a> where I learn more about the core concepts within the digital sector and gain skills in full stack web development. </p>
      <p class="pb-8">When I am not developing you can find me growing my fascination with aviation <PlaneIcon></PlaneIcon> or exploring a sandbox game.</p>
      <p class="text-accent italic text-sm">Currently looking for a Degree apprenticeship in technology or a junior software development role.</p>
    </Container>
  </div>
  <div class="flex flex-col w-1/2">
    <h5 class="text-2xl inline-flex gap-2 items-center"><LibraryIcon color="rgba(var(--accent))" size={30}/> What I know</h5>
    <div class="flex-1">

    </div>
    <h5 class="text-2xl inline-flex gap-2 items-center"><Mortarboard02Icon color="rgba(var(--accent))" size={30}/> What I&apos;m Learning</h5>
    <div class="flex-1">

    </div>
  </div>
</div>