<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Content } from "@prismicio/client";
  import {
    PrismicImage,
    PrismicLink,
    PrismicRichText,
  } from "@prismicio/svelte";

  export let slice: Content.CardSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mx-auto w-full max-w-7xl bg-white px-2 py-5 text-start md:py-16">
  <Card.Root
    class="mx-auto flex w-full  max-w-6xl flex-col items-center gap-6 rounded-sm  bg-blue1  md:flex-row md:py-20 md:pl-22   md:pr-11">
    <Card.Content
      class="flex h-full basis-1/2 flex-col justify-between p-3 text-white md:p-0">
      <Card.Title
        class="p-0 font-int text-xl font-semibold text-white md:text-4.5xl ">
        {slice.primary.title}
      </Card.Title>
      <Card.Header class="my-7 basis-1/2 rounded-2xl p-0 md:hidden  ">
        <PrismicImage field="{slice.primary.hero}" />
      </Card.Header>
      <div class="text-balance py-9">
        <PrismicRichText field="{slice.primary.description}" />
      </div>

      <Card.Footer class="flex justify-between self-center p-0 md:self-auto ">
        <PrismicLink
          field="{slice.primary.cta}"
          class="mb-4 rounded-full bg-yellow1 px-6 py-2 font-int text-base font-semibold text-blue1 hover:bg-blue1 hover:text-yellow1 active:bg-blue1 active:text-yellow1 md:px-13 md:py-6  ">
          {slice.primary.cta.text}
        </PrismicLink>
      </Card.Footer>
    </Card.Content>
    <Card.Header class="hidden basis-1/2 rounded-2xl p-0 md:inline-block">
      <PrismicImage field="{slice.primary.hero}" />
    </Card.Header>
  </Card.Root>
</section>
