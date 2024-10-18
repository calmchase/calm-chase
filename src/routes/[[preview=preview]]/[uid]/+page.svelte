<script>
  import { SliceZone } from "@prismicio/svelte";

  import { components } from "$lib/slices";

  export let data;
</script>

<h3 class="text-center font-grot text-1.5xl font-black md:text-7.5xl">
  {data.page.data.title}
</h3>
<SliceZone slices="{data.page.data.slices}" {components} />
