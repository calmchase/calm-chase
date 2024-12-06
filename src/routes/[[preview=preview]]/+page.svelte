<script lang="ts">
  import { components } from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
  export let data;
</script>

<p class=" w-full bg-yellow1 text-center text-black1">
  Hackathon results are out!!. <a
    target="_blank"
    href="http://calmchase.com/results.pdf"
    class="animate-pulse font-bold underline">
    Click here to See your score now !
  </a>
</p>
<SliceZone slices="{data.page.data.slices}" {components} />
