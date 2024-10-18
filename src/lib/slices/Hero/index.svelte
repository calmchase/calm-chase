<script lang="ts">
  import type { Content } from "@prismicio/client";
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";

  export let slice: Content.HeroSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mx-auto w-full max-w-7xl bg-white px-2 text-center">
  <p
    class="col-span-full mb-4 font-grot text-2xl font-black md:row-span-full md:mb-8 md:text-5xl">
    OUR VISION
  </p>
  <div class="flex flex-col justify-between gap-7 md:flex-row">
    <div class="md:max-w-lg"><PrismicImage field="{slice.primary.hero}" /></div>
    <div class="flex flex-col gap-4 text-pretty px-2 text-start md:gap-10">
      <p class="font-int text-xl font-semibold text-grey1 md:text-4.5xl/10">
        {slice.primary.subtitle}
      </p>
      <p class="  font-int text-base font-normal text-grey1">
        <PrismicRichText field="{slice.primary.description}" />
      </p>
    </div>
  </div>
</section>
