<script lang="ts">
  let { children, onclick, twStyles = "" } = $props();

</script>

<button
onclick={onclick}
class={`
px-4 py-1 bg-primary/5 text-textDim rounded-lg inline-flex gap-2 items-center justify-center
hover:text-text hover:bg-primary/20 hover:scale-105
transition ease-in-out duration-300
${twStyles}
`}
>
{@render children()}
</button>