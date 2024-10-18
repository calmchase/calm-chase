<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import CardHeader from "@/components/ui/card/card-header.svelte";
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";

  export let slice: Content.TeamSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mx-auto w-full max-w-7xl bg-white1 text-center">
  <p
    class="col-span-full mb-4 mt-6 font-grot text-2xl font-black md:row-span-full md:mb-8 md:mt-13 md:text-5xl">
    OUR TEAM
  </p>
  <div
    class="grid grid-cols-2 gap-3 px-2 pb-10 md:grid-cols-4 md:gap-6 md:px-6 md:pb-28">
    {#each slice.primary.members as element}
      <Card.Root class="z-10 flex flex-col items-center rounded-md bg-white  ">
        <CardHeader class="relative w-full rounded-t-md bg-blue1 ">
          <Card.Title class="font-man  text-base  font-extrabold text-white1  ">
            {element.title}
          </Card.Title>
          <div
            class="absolute left-0 top-10 -z-10 h-28 w-full rounded-[0%_0%_70%_70%] bg-blue1">
          </div>
        </CardHeader>
        <div class="z-10 h-50 w-50">
          <PrismicImage field="{element.hero}" />
        </div>

        <Card.Content class="flex flex-col gap-2 p-2  md:px-6">
          <p class="-mt-10 font-man text-base font-extrabold text-black">
            {element.name}
          </p>
          <Card.Description
            class="text-pretty text-center text-sm font-normal   text-grey1 md:text-base">
            {element.description}
          </Card.Description>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</section>
