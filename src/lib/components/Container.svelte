<script lang="ts">
  const { children, twStyles = "" } = $props()

</script>

<div class={["rounded-xl bg-primary/5 px-4 py-5", twStyles]}>
  {@render children()}
</div>