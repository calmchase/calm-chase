<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicLink } from "@prismicio/svelte";

  export let slice: Content.ProgramsSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mx-auto w-full max-w-7xl bg-white text-center">
  <p
    class="col-span-full mb-4 mt-6 font-grot text-2xl font-black text-grey1 md:row-span-full md:mb-8 md:mt-13 md:text-5xl">
    OUR PROGRAMS
  </p>
  <div
    class="grid grid-cols-2 items-stretch gap-3 px-2 md:grid-cols-4 md:gap-6 md:px-6">
    {#each slice.primary.programs as element}
      <PrismicLink field="{element.goto}" class="h-full">
        <Card.Root class=" h-full bg-yellow1 ">
          <Card.Content class="flex flex-col gap-2 px-1 py-8 md:px-6">
            <Card.Title
              class="text-base font-semibold text-grey1 md:text-3xl  ">
              {element.title}
            </Card.Title>
            <Card.Description
              class="text-sm font-normal text-grey1 md:text-base">
              {element.description}
            </Card.Description>
          </Card.Content>
        </Card.Root>
      </PrismicLink>
    {/each}
  </div>
</section>
