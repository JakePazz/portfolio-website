<script lang="ts">
  let { children } = $props();

</script>

<button
class="px-4 py-1 bg-primary/5 text-textDim rounded-lg inline-flex gap-2 items-center justify-center"

>
{@render children()}
</button>