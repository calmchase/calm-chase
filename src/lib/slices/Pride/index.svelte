<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
  import Fade from "embla-carousel-fade";

  export let slice: Content.PrideSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mx-auto w-full max-w-screen-sm px-4 md:max-w-7xl">
  <p
    class="col-span-full mb-4 mt-6 text-center font-grot text-2xl font-black md:row-span-full md:mb-8 md:mt-13 md:text-5xl">
    OUR PRIDE
  </p>
  <Carousel.Root
    plugins="{[Fade()]}"
    opts="{{
      containScroll: false,
      loop: true,
    }}"
    class="relative mx-auto  w-full md:max-w-4xl">
    <Carousel.Content class="md:max-w-4xl">
      {#each slice.primary.cards as element, i (i)}
        <Carousel.Item>
          <div
            class="relative z-10 mx-auto flex flex-row items-center gap-3 bg-white p-7 md:max-w-4xl md:gap-12">
            <div class="absolute left-0 -z-10 h-full w-1/5 bg-blue1"></div>

            <PrismicImage
              field="{element?.hero}"
              class="h-48 w-32 pl-2 md:h-92 md:w-76 md:pl-14" />

            <div>
              <h1
                class="pb-4 font-man text-base font-extrabold md:pb-8 md:text-5xl">
                {element?.name}
              </h1>
              <p class="h-40 text-clip text-pretty text-xs md:text-base">
                <PrismicRichText field="{element?.description}" />
              </p>
            </div>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous
      class="absolute left-5 top-1/3 rounded-none bg-yellow1 text-white1 md:left-15" />
    <Carousel.Next
      class="absolute right-5 top-1/3 rounded-none bg-yellow1 text-white1" />
  </Carousel.Root>
</section>
