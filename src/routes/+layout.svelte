<svelte:head>
  <link rel="stylesheet" href="style.css" />
  <title>Mathpad</title>
</svelte:head>

<main class="pad">
  <header class="flex">
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
  <section id=slot>
    <slot></slot>
  </section>
</main>

<style>
  :global(body > div) {
    height: 100%;
  }
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
    height: 100%;
    min-height: 90vh;
  }
  header {
    grid-column: 1 / span 2;
    /* background-color: #333; */
    color: white;
    padding: 10px;
    justify-content: space-between;
  }
  #slot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    #slot {
      flex-direction: row;
    }
  }
  @media (max-width: 811px) {
    header {
      flex-direction: column;
      justify-content: space-evenly;
      height: max-content;
    }
  }
</style>
