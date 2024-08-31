<script>
	import { sanitize, tokenize, compute, display } from '$lib/index';

	let value = '2+2';

	$: cleaned = sanitize(value);
	$: result = display(compute(tokenize(sanitize(value))));

</script>

<section class="full md:py">
  <div class="editor" contenteditable="true" bind:innerText={value}>
    Start typing here
  </div>
</section>
<section class="full md:py">
  <output>
    {@html result}
  </output>
</section>

<style>
	section {
    border: 8px dashed var(--c-white);
    padding-top: 10px;
		padding-left: 20px;
		/* width: 30vw; */
		width: 95%;
  }
	section:last-of-type {
		padding-left: 20px;
	}
	.editor {
		height: 100%;
	}
</style>