<svelte:head>
  <link rel="stylesheet" href="style.css" />
  <title>Mathpad</title>
</svelte:head>

<main>
  <header class="flex row">
    <hgroup>
      <div class="large title white">Mathpad</div>
      <nav>
        <a href="/" class="orange">[ Home ]</a>
        <a href="/about" class="orange">[ About ]</a>
      </nav>
    </hgroup>

    <a class="green" target="_blank" href="https://github.com/ianfabs/mathpad"
      >[github://ianfabs/mathpad]</a
    >
  </header>
  <slot></slot>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr minmax(250px, 85vh);
    margin-left: 20px;
    padding-left: 20px;
    margin-right: 20px;
    width: 95%;
  }
  header {
    grid-column: 1 / span 2;
    /* background-color: #333; */
    color: white;
    padding: 10px;
    justify-content: space-between;
  }
  
</style>
