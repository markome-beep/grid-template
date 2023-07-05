<script>
	let num_rows = 4;
	let num_cols = 5;
    let toggled = false;

	let grid = [];
	$: grid = Array(num_rows).fill(Array(num_cols));
</script>

<div id="interface">
	<button id="copy">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
			<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
			/>
		</svg>
	</button>
		<button class="row-btn subtract" on:click={() => num_rows > 1 && num_rows--}>-</button>
		<button class="row-btn add" on:click={() => num_rows++}>+</button>
		<button class="col-btn add" on:click={() => num_cols++}>+</button>
		<button class="col-btn subtract" on:click={() => num_cols > 1 && num_cols--}>-</button>
	<div id="grid">
		{#each grid as row}
			<div class="row">
				{#each row as elem}
					<button class="elem" />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	#interface {
		display: grid;
        grid-template-areas: 
        "copy           subtract-row    add-row"
        "add-col        grid            grid"
        "subtract-col   grid            grid";
        grid-template-columns: 40px 1fr 1fr;
        grid-template-rows: 40px 1fr 1fr;
		margin: 0;
		gap: 0.5rem;
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
		gap: 1rem;
        grid-area: grid;
        max-height: 100%;
        max-width: 100%;
	}
	.row {
		display: flex;
		margin: 0;
		padding: 0;
		gap: 1rem;
        flex: 1;
	}
	.elem {
        flex: 1;
		margin: 0;
		padding: 0;
	}
</style>
