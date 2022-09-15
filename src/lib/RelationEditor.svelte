<script lang="ts">
  import { uniq } from "lodash"
  import calculateSize from "calculate-size"

  export let rel: string
  export let check:
    | "functional"
    | "injective"
    | "surjective"
    | "total"
    | "bijective"

  function parseDef(def: string) {
    const connDefs = def.split(" ").filter((s) => s.length)
    const leftNodes = uniq(
      connDefs.map((connDef) => connDef.split("R")[0]).filter((d) => d)
    )
    const rightNodes = uniq(
      connDefs.flatMap((connDef) => connDef.split("R")[1]).filter((d) => d)
    )
    const grid: { [node: string]: { [node: string]: boolean }} = {}
    for (const node of leftNodes) {
      grid[node] = {}
    }
    for (const connDef of connDefs) {
      const [from, to] = connDef.split("R")
      if (from && to) {
        grid[from][to] = true
      }
    }

    return { grid, leftNodes, rightNodes }
  }

  const { grid, leftNodes, rightNodes } = parseDef(rel)

  $: isFunctional = leftNodes.every(
    (parent) => rightNodes.filter((child) => grid[parent][child]).length <= 1
  )

  $: isInjective = rightNodes.every(
    (child) => leftNodes.filter((parent) => grid[parent][child]).length <= 1
  )

  $: isTotal = leftNodes.every((parent) =>
    rightNodes.some((child) => grid[parent][child])
  )

  $: isSurjective = rightNodes.every((child) =>
    leftNodes.some((parent) => grid[parent][child])
  )

  $: isBijective = isFunctional && isInjective && isTotal && isSurjective

  $: leftRenderNodes = uniq(
    leftNodes.map((node, i) => {
      const size = calculateSize(node, {
        font: "Arial",
        fontSize: "18px",
        fontWeight: "bold",
      })
      return {
        x: 0,
        y: 5 + i * 30,
        width: size.width,
        height: 12,
        label: node,
      }
    })
  )
  $: rightRenderNodes = uniq(
    rightNodes.map((node, i) => {
      const size = calculateSize(node, {
        font: "Arial",
        fontSize: "18px",
        fontWeight: "bold",
      })
      return {
        x: 130,
        y: 5 + i * 30,
        width: size.width,
        height: 12,
        label: node,
      }
    })
  )
</script>

<div class="RelationEditor">
  <div class="editor">
    <div class="grid">
      <table>
        <tr>
          <td />
          {#each rightNodes as node}
            <td>{node}</td>
          {/each}
        </tr>
        {#each leftNodes as node}
          <tr>
            <td>{node}</td>
            {#each rightNodes as node2}
              <td>
                <input type="checkbox" bind:checked={grid[node][node2]} />
              </td>
            {/each}
          </tr>
        {/each}
      </table>
    </div>
    <div class="slopes">
      <svg>
        <defs>
          <marker
            id="head"
            orient="auto"
            markerWidth="3"
            markerHeight="4"
            refX="1.5"
            refY="2"
          >
            <path d="M0,0 V4 L2,2 Z" fill="black" />
          </marker>
        </defs>
        {#each leftRenderNodes as node}
          <text x={node.x} y={node.y} dominant-baseline="hanging"
            >{node.label}</text
          >
        {/each}
        {#each leftRenderNodes as from}
          {#each rightRenderNodes as to}
            {#if grid[from.label][to.label]}
              <line
                x1={from.x + from.width + 5}
                y1={from.y + from.height / 2}
                x2={to.x - 5}
                y2={to.y + to.height / 2}
                marker-end="url(#head)"
                stroke="black"
                stroke-width="2"
              />
            {/if}
          {/each}
        {/each}
        {#each rightRenderNodes as node}
          <text x={node.x} y={node.y} dominant-baseline="hanging"
            >{node.label}</text
          >
        {/each}
      </svg>
    </div>
  </div>

  <div class="check">
    {#if check === "functional"}
      {#if isFunctional}
        Functional ✅
      {:else}
        Not functional ❌
      {/if}
    {:else if check === "injective"}
      {#if isInjective}
        Injective ✅
      {:else}
        Not injective ❌
      {/if}
    {:else if check === "total"}
      {#if isTotal}
        Total ✅
      {:else}
        Not total ❌
      {/if}
    {:else if check === "surjective"}
      {#if isSurjective}
        Surjective ✅
      {:else}
        Not surjective ❌
      {/if}
    {:else if check === "bijective"}
      {#if isBijective}
        Bijective ✅
      {:else}
        Not bijective ❌
      {/if}
    {/if}
  </div>
</div>

<style>
  .RelationEditor {
    width: fit-content;
    margin: auto;
  }
  .editor {
    display: flex;
    justify-content: center;
    font-size: 18px;
  }

  .check {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }

  .grid {
    text-align: center;
    /* border: 2px solid #a0a0c0;
    background: #f0f0ff; */
  }

  .grid td {
    padding: 5px;
    font-weight: bold;
  }

  .slopes {
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    border: 2px solid #a0a0c0;
    background: #f0f0ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    font-family: "Arial";
    font-weight: bold;
    width: 150px;
    height: 80px;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
</style>
