<script lang="ts">
  import { browser } from "$app/environment";
  import RelationEditor from "$lib/RelationEditor.svelte";
</script>

<main>
  <header>
    <div class="container">
      <h1>Properties of binary relations</h1>
      <p>
        This page covers the common properties of binary relations, with
        illustrative examples.
      </p>
    </div>
  </header>
  <section class="container">
    <h2>Functional</h2>
    <div class="with-figure">
      <div class="explanation">
        <p>
          A relation is functional when each node on the left points to <em
            >at most</em
          > one node on the right.
        </p>
        <p>
          We describe this as <em>functional</em> because it mirrors the behavior
          of a mathematical function, which always has one defined output for a given
          input value. A function can be viewed as a binary relation between the
          domain and codomain of the function.
        </p>
        <p>
          Many of the terms used to describe relations were originally defined <a
            href="https://hsm.stackexchange.com/questions/4929/history-of-the-definition-of-injective-surjective-function"
            >in the context of functions</a
          >. The key difference is that a valid function is always by definition
          functional, but binary relations need not be.
        </p>
        <p>
          You can quickly identify functional relations by looking at the grid
          of connections. A relation is functional if <strong
            >no row has more than one tick</strong
          >.
        </p>
      </div>
      <figure>
        {#if browser}
          <RelationEditor rel="🌰R🐿️ 2Rb 3 Rc" check="functional" />
          <RelationEditor rel="🌰R🐿️ 🌰Rb 2 3 Rc" check="functional" />
        {/if}
        <figcaption>
          The functional squirrel doesn't like to share his acorn. He feels he
          earned it with his clever functions.
        </figcaption>
      </figure>
    </div>
  </section>
  <section class="container">
    <h2>Injective</h2>
    <div class="with-figure">
      <div class="explanation">
        <p>
          A relation is injective when each node on the right receives <em
            >at most</em
          > one connection from the left.
        </p>
        <p>
          A grid shows an injective relation if <strong
            >no column has more than one tick</strong
          >.
        </p>
      </div>
      <figure>
        {#if browser}
          <RelationEditor rel="🌰R🐿️ 2Rb 3 Rc" check="injective" />
          <RelationEditor rel="🌰R🐿️ 2R🐿️ Rb 3 Rc" check="injective" />
        {/if}
        <figcaption>
          The injective squirrel can't have more than one acorn each. The
          squirrels are trying to reduce wealth inequality.
        </figcaption>
      </figure>
    </div>
  </section>
  <section class="container">
    <h2>Total</h2>
    <div class="with-figure">
      <div class="explanation">
        <p>
          A relation is total or <em>left-total</em> when every node on the left
          has at least one connection.
        </p>
        <p>
          A grid shows a total relation if <strong>every row has a tick</strong
          >.
        </p>
      </div>
      <figure>
        {#if browser}
          <RelationEditor rel="🌰R🐿️ 2Rb 3Rb Rc" check="total" />
          <RelationEditor rel="🌰R🐿️ 2Rb 2Rc 3" check="total" />
        {/if}
        <figcaption>
          Every left-total acorn is always assigned to a squirrel. They're
          trying to eliminate food waste!
        </figcaption>
      </figure>
    </div>
  </section>
  <section class="container">
    <h2>Surjective</h2>
    <div class="with-figure">
      <div class="explanation">
        <p>
          A relation is surjective or <em>right-total</em> when every node on the
          right has at least one connection.
        </p>
        <p>
          A grid shows a surjective relation if <strong
            >every column has a tick</strong
          >.
        </p>
      </div>
      <figure>
        {#if browser}
          <RelationEditor rel="🌰R🐿️ 2Rb 2Rc 3" check="surjective" />
          <RelationEditor rel="🌰R🐿️ 2Rb 3Rb Rc" check="surjective" />
        {/if}

        <figcaption>
          Every surjective squirrel gets to at least share one acorn. The
          squirrels have announced a welfare policy.
        </figcaption>
      </figure>
    </div>
  </section>
  <section class="container">
    <h2>Bijective</h2>
    <div class="with-figure">
      <div class="explanation">
        <p>
          A relation is bijective when it is functional, total, injective <em
            >and</em
          > surjective. Every node on both sides must have a connection, and both
          ends of every connection must be unique.
        </p>
        <p>
          The grid shows a bijective relation if <strong
            >every row and every column has exactly one tick</strong
          >.
        </p>
      </div>
      <figure>
        {#if browser}
          <RelationEditor rel="🌰R🐿️ R2 bR3 cR2" check="bijective" />
          <RelationEditor rel="🌰R🐿️ 🌰R2 bR2 c R3" check="bijective" />
        {/if}
        <figcaption>
          Every bijective squirrel gets exactly one acorn, and every acorn goes
          to exactly one squirrel. It's a time of strict rationing during the
          squirrel war.
        </figcaption>
      </figure>
    </div>
  </section>
  <section class="practice">
    <div class="d-flex align-items-center justify-content-center">
      <a class="btn btn-lg btn-success" href="/binary-relations/practice"
        >Practice!</a
      >
    </div>
  </section>
</main>

<style>
  @import "bootstrap/dist/css/bootstrap.min.css";

  main {
    margin-bottom: 3rem;
  }
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  section {
    margin-top: 2rem;
  }
  .with-figure {
    display: flex;
    width: 100%;
  }

  .explanation {
    max-width: 800px;
    width: 100%;
  }

  figure {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-left: 1rem;
    max-width: 400px;
  }

  figcaption {
    text-align: center;
  }

  .practice {
    margin-top: 4rem;
    border-top: 1px solid #ccc;
    padding-top: 4rem;
  }

  @media (max-width: 900px) {
    .with-figure {
      flex-direction: column;
    }

    figure {
      margin: auto;
    }
  }
</style>
