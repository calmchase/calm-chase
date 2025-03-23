<script>
  import { SliceZone } from "@prismicio/svelte";

  import { components } from "$lib/slices";

  export let data;
</script>

<h3
  class="mt-6 text-center font-grot text-1.5xl font-black md:mt-18 md:text-7.5xl">
  {data.page.data.title}
</h3>
{#if data.page.data.subtitle}<h6
    class="mt-4 text-center font-int text-xl font-semibold text-blue1 md:mt-11 md:text-4.5xl">
    {data.page.data.subtitle}
  </h6>
{/if}
<section class="container mx-auto">
  <div
    class="columns-1 gap-4 px-1 py-10 sm:columns-2 md:columns-3 md:py-20"
    id="test-gallery">
    <SliceZone slices="{data.page.data.slices}" {components} />
  </div>
</section>
