<script>
	import { sanitize, tokenize, compute, display } from '$lib/index';

	let value = '2+2';

	$: cleaned = sanitize(value);
	$: result = display(compute(tokenize(sanitize(value))));

</script>

<section class="md:py">
  <div class="editor" contenteditable="true" bind:innerText={value}>
    Start typing here
  </div>
</section>
<section class="md:py">
  <output>
    {@html result}
  </output>
</section>

<style>
	section {
    border: 8px dashed var(--c-white);
  }
	.editor {
		height: 100%;
	}
	.editor:focus {
		outline: none;
	}
	@media (max-width: 811px) {
    section {
			min-height: 35vh;
		}
		section:first {
			/* margin-bottom: 15vh; */
		}
  }
</style>