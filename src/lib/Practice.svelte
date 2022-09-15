<script lang="ts">
  import { uniq } from "lodash"
  import calculateSize from "calculate-size"
  import {
    type RelationGrid,
    type RelationCheck,
    applyCheck,
  } from "$lib/relations"
  import { CanvasEffects } from "./CanvasEffects"

  const effects = new CanvasEffects()

  let grid: RelationGrid = {}
  let checks: {
    check: RelationCheck
    applies: boolean
    visible: boolean
  }[] = []
  let checkIndex = 0

  let completed = 0
  let correct = 0
  let incorrectShake: boolean = false
  let shakeTimeout: number | undefined
  let quizRef: HTMLDivElement
  let madeMistake: boolean = false
  $: accuracy = ((correct / completed) * 100).toFixed(0)

  const possibleChecks: RelationCheck[] = [
    "functional",
    "injective",
    "total",
    "surjective",
    "bijective",
  ]

  function nextRelation() {
    grid = {}
    const size = completed === 0 ? 3 : Math.floor(Math.random() * 3) + 2
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 0; i < size; i++) {
      grid[alpha[i]] = {}
      for (let j = 0; j < size; j++) {
        grid[alpha[i]][alpha[j]] = Math.random() > 0.5 ? true : false
      }
    }

    checks = possibleChecks.map((check) => ({
      check,
      applies: applyCheck(check, grid),
      visible: false,
    }))
    checkIndex = 0
    madeMistake = false
  }

  function answer(attempt: boolean) {
    if (attempt === currentCheck.applies) {
      currentCheck.visible = true
      checks = Array.from(checks)
      checkIndex++
      if (checkIndex === checks.length) {
        completed += 1
        if (!madeMistake) {
          correct += 1
          effects.confetti.spawnAt(quizRef)
        }
      }
    } else {
      madeMistake = true
      incorrectShake = true
      clearTimeout(shakeTimeout)
      shakeTimeout = setTimeout(() => {
        incorrectShake = false
      }, 300) as any
    }
  }

  $: visibleChecks = checks.filter((check) => check.visible)
  $: currentCheck = checks[checkIndex]

  $: finishedRelation = checkIndex === checks.length

  nextRelation()

  $: leftNodes = Object.keys(grid)
  $: rightNodes = uniq(
    Object.keys(grid).flatMap((parent) => Object.keys(grid[parent]))
  )

  const svgWidth = 150
  $: svgHeight = leftNodes.length * 30

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

<svelte:head>
  <title>Practice binary relations</title>
</svelte:head>

<div class="Practice">
  <div class="visual">
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
              <td style:font-weight="normal">
                {#if grid[node][node2]}
                  1
                {:else}
                  0
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </table>
    </div>
    <div class="slopes">
      <svg style:width={svgWidth + "px"} style:height={svgHeight + "px"}>
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

    <div class="sidebar">
      <div>Completed: {completed}</div>
      <div>Perfect: {correct}</div>
      <div>
        Accuracy: {#if accuracy === "NaN"}TBD{:else}{accuracy}%{/if}
      </div>
      <hr />
      <ul>
        {#each visibleChecks as { check, applies }, i}
          <li>
            {#if !applies}not{/if}
            {check}
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="quiz" class:shake={incorrectShake} bind:this={quizRef}>
    {#if finishedRelation}
      <button class="btn btn-success" on:click={nextRelation}>Next</button>
    {:else}
      {#key currentCheck.check}
        <button class="btn btn-success" on:click={() => answer(true)}
          >{currentCheck.check}</button
        >
        <button class="btn btn-danger" on:click={() => answer(false)}
          >not {currentCheck.check}</button
        >
      {/key}
    {/if}
  </div>
</div>

<style lang="scss">
  @import "./shake.scss";

  .shake {
    @include animation(shake-base);
  }

  .visual {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 18px;
  }

  .sidebar {
    position: absolute;
    left: 100%;
    width: 200px;
    padding-left: 1rem;
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
    height: fit-content;
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

  .quiz {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.5rem;
  }

  .quiz .btn {
    width: 160px;
  }
</style>
