<script lang="ts">

  const { title, description = null } = $props();

</script>

<svelte:head>
    <title>{title}</title>
    {#if description}
      <meta name="description" content={description}>
    {/if}
</svelte:head>