<script>
	let toggled = false;

	let grid = Array(4)
		.fill(0)
		.map((_) => Array(5).fill(0));

	let numRows;
	let numCols;
	$: numRows = grid.length;
	$: numCols = grid[0].length;

	function addRow() {
		grid = [...grid, Array(numCols).fill(0)];
	}
	function removeRow() {
		if (numRows <= 1) {
			return;
		}
		grid = [...grid.slice(0, -1)];
	}
	function addCol() {
		grid.forEach((row, i) => (grid[i] = [...row, 0]));
	}
	function removeCol() {
		if (numCols <= 1) {
			return;
		}
		grid.forEach((row, i) => (grid[i] = [...row.slice(0, -1)]));
	}
</script>

<div id="interface">
	<button id="copy">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
			<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
			/>
		</svg>
	</button>
	<button class="row-btn subtract" on:click={removeRow}>-</button>
	<button class="row-btn add" on:click={addRow}>+</button>
	<button class="col-btn add" on:click={addCol}>+</button>
	<button class="col-btn subtract" on:click={removeCol}>-</button>
	<div id="grid">
		{#each grid as row, i}
			<div class="row">
				{#each row as elem, j}
					<button
						class="elem"
						on:click={() => grid[i][j] = ++grid[i][j]%5}
						class:connected-left={j > 0 && (grid[i][j] === grid[i][j-1])}
						class:connected-right={j < numCols-1 && (grid[i][j] === grid[i][j+1])}
						class:connected-top={i > 0 && (grid[i][j] === grid[i-1][j])}
						class:connected-bottom={i < numRows - 1 && (grid[i][j] === grid[i+1][j])}
						>{grid[i][j]}
					</button>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	#interface {
		display: grid;
		grid-template-areas:
			'copy           subtract-row    add-row'
			'add-col        grid            grid'
			'subtract-col   grid            grid';
		grid-template-columns: 40px 1fr 1fr;
		grid-template-rows: 40px 1fr 1fr;
		margin: 0;
		gap: 1rem;
		height: calc(100vh - 16px);
		width: 100vw;
		max-height: 100%;
		max-width: 100%;
	}
	#copy {
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: copy;
	}
	#copy svg {
		margin: 0.5rem;
	}
	.row-btn.subtract {
		grid-area: subtract-row;
	}
	.col-btn.subtract {
		grid-area: subtract-col;
	}
	.row-btn.add {
		grid-area: add-row;
	}
	.col-btn.add {
		grid-area: add-col;
	}
	#grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		grid-area: grid;
		max-height: 100%;
		max-width: 100%;
	}
	.row {
		display: flex;
		margin: 0;
		padding: 0;
		gap: inherit;
		flex: 1;
	}
	.elem {
		flex: 1;
		margin: 0;
		padding: 0;
		border: 1px black solid;
		border-radius: 0;
	}
	.connected-left {
		margin-left: -0.5rem;
		padding-left: 0.5rem;
		border-left: none;
	}
	.connected-right {
		margin-right: -0.5rem;
		padding-right: 0.5rem;
		border-right: none;
	}
	.connected-top {
		margin-top: -0.5rem;
		padding-top: 0.5rem;
		border-top: none;
	}
	.connected-bottom {
		margin-bottom: -0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: none;
	}
</style>
