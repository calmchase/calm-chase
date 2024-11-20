<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import ShadButton from "@/components/ui/button/button.svelte";
  import { cn } from "@/utils";

  import type { Content } from "@prismicio/client";
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
  import { Button } from "bits-ui";
  import { mediaQuery } from "svelte-legos";

  export let slice: Content.ActivitiesSlice;
  let open = new Array(slice.primary.activities.length).fill(false);
  let read = false;
  const isDesktop = mediaQuery("(min-width: 768px)");
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="mt-6 bg-blue1 md:mt-13">
  <div class="mx-auto w-full max-w-7xl py-4 text-center text-white md:py-11">
    <p
      class="col-span-full mb-4 font-grot text-2xl font-black text-white md:row-span-full md:mb-8 md:text-5xl">
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
              <div class="w-full">
                <PrismicImage field="{element.square}" class="h-72 w-72" />
                <ShadButton
                  type="submit"
                  class="mt-4 w-full self-end rounded-full bg-blue1 p-5 font-int text-base font-semibold text-white1 hover:bg-black1   active:bg-black1  md:w-72">
                  Join community
                </ShadButton>
              </div>
              <div class="text-black">
                <Dialog.Title class="pb-6 font-int text-4.5xl font-semibold">
                  {element.title}
                </Dialog.Title>
                <PrismicRichText field="{element.content}" />
              </div>
            </Dialog.Content>
          </Dialog.Root>
        {:else}
          <Drawer.Root
            shouldScaleBackground
            snapPoints="{[0.8]}"
            onClose="{() => (read = false)}"
            bind:open="{open[i]}">
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
            <Drawer.Content class="h-full bg-yellow1 px-5 pb-20">
              <div class="flex flex-col overflow-y-auto pb-38 pt-4">
                <Drawer.Header class="h-auto w-full">
                  <PrismicImage field="{element.wide}" />
                </Drawer.Header>
                <Drawer.Title class="pb-6 font-int text-xl font-semibold">
                  {element.title}
                </Drawer.Title>
                <p class="{cn({ 'line-clamp-5': !read })}">
                  <PrismicRichText field="{element.content}" />
                </p>

                <ShadButton variant="link" on:click="{() => (read = !read)}">
                  {#if read}
                    Show less
                  {:else}
                    Read more
                  {/if}
                </ShadButton>

                <ShadButton
                  type="submit"
                  class="mt-4 w-full self-end rounded-full bg-blue1 p-5 font-int text-base font-semibold text-white1 hover:bg-yellow1 hover:text-blue1 active:bg-yellow1 active:text-blue1 md:w-fit">
                  Join community
                </ShadButton>
              </div>
            </Drawer.Content>
          </Drawer.Root>
        {/if}
      {/each}
    </div>
  </div>
</section>
