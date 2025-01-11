<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="px-6 pt-6">
{@render children()}
</main>