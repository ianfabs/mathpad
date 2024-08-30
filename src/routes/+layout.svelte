<svelte:head>
  <link rel="stylesheet" href="style.css" />
  <title>Mathpad</title>
</svelte:head>

<main>
  <header>
    <div class="large title white">Calculator</div>
    <nav>
      <a href="/" class="green">[ Home ]</a>
      <a href="/about" class="blue">[ About ]</a>
    </nav>
  </header>
	<slot></slot>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr minmax(250px, 85vh);
    column-gap: 4ch;
	}
  header {
    grid-column: 1 / span 2;
    background-color: #333;
    color: white;
    padding: 10px;
  }
	section {
		border: 1px solid white;
    padding: 10px;
	}
</style>