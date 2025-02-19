<script lang="ts">
	import { formatDate } from '$lib/functions/formatDate.js';
  import { HugeiconsIcon } from "@hugeicons/svelte"
	import { PenTool03Icon } from '@hugeicons/core-free-icons';
	import { marked } from 'marked';
	import Seo from '$lib/components/Seo.svelte';

  let { data } = $props()
</script>

<Seo title={`${data.title} Notes | Jake Pazzard`} description={`Notes on '${data.title}' written by Jake Pazzard at month and year ${formatDate(data.date)}.`} />

<section class="generated-notes pt-6 flex flex-col gap-4 m-auto w-[95%] md:w-[70%]">
  <div class="flex flex-col bg-primary/5 rounded-lg px-4 py-4">
    <span class="inline-flex gap-1 items-center">
      <HugeiconsIcon className="text-accent" icon={PenTool03Icon} size={18}/>
      <p>{formatDate(data.date)}</p>
    </span>
    <h1 class="text-5xl">{data.title}</h1>
  </div>
  <div>
    {@html marked(data.content)}
  </div>
</section>
