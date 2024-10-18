<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";

  export let slice: Content.TestimonialsSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mx-auto my-5 max-w-7xl md:my-11">
  <Card.Root class="flex flex-col rounded-md p-4 md:flex-row md:gap-14 md:p-0">
    <Card.Header class="h-32 w-28 shrink-0 rounded-md p-0 md:h-64 md:w-80">
      <PrismicImage field="{slice.primary.hero}" />
    </Card.Header>
    <Card.Content class="space-y-4 p-0 md:space-y-9 md:pt-5">
      <p class="font-int text-sm font-normal text-grey1">
        {slice.primary.testimony}
      </p>
      <p class="font-int text-base font-bold text-[#293238]">
        {slice.primary.name}
      </p>
    </Card.Content>
    <p></p>
  </Card.Root>
</section>
