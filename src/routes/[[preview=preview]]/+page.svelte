<script lang="ts">
  import { components } from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";

  export let data;
</script>

<SliceZone slices="{data.page.data.slices}" {components} />
