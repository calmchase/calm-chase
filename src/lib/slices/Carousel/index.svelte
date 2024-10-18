<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";
  import AutoScroll from "embla-carousel-auto-scroll";

  export let slice: Content.CarouselSlice;
</script>

<p
  class="col-span-full mb-4 w-full pt-5 text-center font-grot text-2xl font-black md:row-span-full md:mb-8 md:pt-18 md:text-5xl">
  RECENT HIGHLIGHTS
</p>
<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class=" w-full bg-blue1 py-4 text-center md:py-14">
  <div class="mx-auto w-full bg-yellow1 px-2 text-center">
    <Carousel.Root
      plugins="{[
        AutoScroll({
          playOnInit: true,
        }),
      ]}"
      opts="{{
        align: 'start',
        loop: true,
      }}"
      class="w-full">
      <Carousel.Content class="max-w-44 bg-yellow1 py-4 pb-0 md:max-w-88">
        {#each slice.primary.images as item, i (i)}
          <Carousel.Item class="basic-1/4">
            <div class="h-44 w-44 px-2 md:h-88 md:w-88">
              <PrismicImage field="{item.image}" />
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
    </Carousel.Root>
  </div>
</section>
