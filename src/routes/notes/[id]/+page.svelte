<script lang="ts">
	import { formatDate } from '$lib/functions/formatDate.js';
	import { PenTool03Icon } from 'hugeicons-svelte';
	import { marked } from 'marked';

  let { data } = $props()
</script>

<section class="generated-notes pt-6 flex flex-col gap-4 m-auto w-[95%] md:w-[70%]">
  <div class="flex flex-col bg-primary/5 rounded-lg px-4 py-4">
    <span class="inline-flex gap-1 items-center">
      <PenTool03Icon color="rgba(var(--accent))" size={18}/>
      <p>{formatDate(data.date)}</p>
    </span>
    <h1 class="text-5xl">{data.title}</h1>
  </div>
  <div>
    {@html marked(data.content)}
  </div>
</section>