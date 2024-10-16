<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
  import { Button } from "bits-ui";
  import { mediaQuery } from "svelte-legos";

  export let slice: Content.ActivitiesSlice;
  let open = new Array(slice.primary.activities.length).fill(false);
  const isDesktop = mediaQuery("(min-width: 768px)");
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mt-6 bg-blue1 md:mt-13">
  <div class="mx-auto w-full max-w-7xl pt-4 text-center text-white md:pt-11">
    <p
      class="col-span-full mb-4 font-grot text-2xl font-black md:row-span-full md:mb-8 md:text-5xl">
      OUR <span class="text-yellow1">ACTIVITIES</span>
    </p>
    <div class="grid grid-cols-2 gap-3 px-10 md:grid-cols-4 md:gap-6 md:px-6">
      {#each slice.primary.activities as element, i (element.title)}
        {#if $isDesktop}
          <Dialog.Root bind:open="{open[i]}">
            <Dialog.Trigger asChild let:builder>
              <Button.Root
                class="relative border-none p-0 shadow-md hover:shadow-xl"
                builders="{[builder]}">
                <PrismicImage field="{element.square}" />
                <h6
                  class="absolute bottom-4 left-0 right-0 mx-auto font-int text-sm font-semibold text-white md:text-1.5xl">
                  {element.title}
                </h6>
              </Button.Root>
            </Dialog.Trigger>
            <Dialog.Content
              class="flex max-w-6xl items-center gap-10 bg-yellow1 p-10">
              <PrismicImage field="{element.square}" class="h-72 w-72" />
              <div class="text-black">
                <Dialog.Title class="pb-6 font-int text-4.5xl font-semibold">
                  {element.title}
                </Dialog.Title>
                <PrismicRichText field="{element.content}" />
              </div>
            </Dialog.Content>
          </Dialog.Root>
        {:else}
          <Drawer.Root bind:open="{open[i]}">
            <Drawer.Trigger asChild let:builder>
              <Button.Root
                class="relative border-none p-0 shadow-md hover:shadow-xl"
                builders="{[builder]}">
                <PrismicImage field="{element.square}" />
                <h6
                  class="absolute bottom-4 left-0 right-0 mx-auto font-int text-sm font-semibold text-white md:text-1.5xl">
                  {element.title}
                </h6>
              </Button.Root>
            </Drawer.Trigger>
            <Drawer.Content class="flex flex-col bg-yellow1 px-5 py-4">
              <Drawer.Header class="h-auto w-full">
                <PrismicImage field="{element.wide}" />
              </Drawer.Header>
              <Drawer.Title class="pb-6 font-int text-xl font-semibold">
                {element.title}
              </Drawer.Title>
              <PrismicRichText field="{element.content}" />
            </Drawer.Content>
          </Drawer.Root>
        {/if}
      {/each}
    </div>
  </div>
</section>
