<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import { Button } from "@/components/ui/button/index.ts";
  import Favicon from "@/svg/Favicon.svelte";
  import Fulllogo from "@/svg/Fulllogo.svelte";
  import type { Content } from "@prismicio/client";
  import { PrismicLink } from "@prismicio/svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import CiMenuAlt01 from "~icons/ci/menu-alt-01";
  import X from "~icons/lucide/x";

  export let slice: Content.HeaderSlice;
  const link = slice.primary.nav.filter((e) => e.cta)?.at(0)?.link;

  let current = 0;

  const preloadImages = [
    "/bg.webp",
    "/SlideShow_1.webp",
    "/SlideShow_2.webp",
    "/SlideShow_3.webp",
    "/SlideShow_4.webp",
    "/SlideShow_5.webp",
    "/SlideShow_6.webp",
  ];

  onMount(() => {
    // preload all images (static assets are served from `/`)
    preloadImages.forEach((src) => (new Image().src = src));
    // rotate current image every 3 seconds
    const interval = setInterval(() => {
      current = (current + 1) % preloadImages.length;
    }, 3000);
    return () => clearInterval(interval);
  });
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="relative overflow-hidden bg-[#040711]">
  <div class="absolute inset-0 bg-[#040711]"></div>
  {#key current}
    <img
      src="{preloadImages[current]}"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      transition:fade="{{ duration: 800 }}" />
  {/key}
  <div
    class="relative z-10 flex flex-col items-center justify-center text-white">
    <header
      aria-label="Header"
      class="mx-auto mt-4 flex w-full max-w-7xl flex-row items-center justify-between px-5 lg:mt-10">
      <div class="flex items-center gap-3">
        <a href="/" class="h-9 w-9 lg:h-15 lg:w-15"><Favicon /></a>
        <a href="/" class="h-5 w-18 lg:h-10 lg:w-32"><Fulllogo /></a>
      </div>
      <ul
        class="hidden flex-row gap-8 rounded-full bg-white1 px-15 py-5 lg:flex">
        {#each slice.primary.nav.filter((e) => !e.cta) as element (element.link.text)}
          <li>
            <PrismicLink
              field="{element.link}"
              class="font-int text-sm font-medium text-black hover:text-yellow1 active:text-yellow1">
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>
      <ul class="hidden flex-row gap-8 lg:flex">
        {#each slice.primary.nav.filter((e) => e.cta) as element (element.link.text)}
          <li>
            <PrismicLink
              field="{element.link}"
              class="rounded-full bg-blue1 p-5 font-int text-base font-semibold text-white1 hover:bg-yellow1 hover:text-blue1 active:bg-yellow1 active:text-blue1">
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>

      <div class="lg:hidden">
        <Sheet.Root>
          <Sheet.Trigger asChild let:builder>
            <Button builders="{[builder]}" variant="ghost" size="icon">
              <CiMenuAlt01 class="h-6 w-6  lg:hidden" />
            </Button>
          </Sheet.Trigger>
          <Sheet.Content
            side="right"
            class="flex h-full w-full flex-col bg-blue1  px-6">
            <Sheet.Header class="self-end">
              <Sheet.Title>
                <Sheet.Close asChild let:builder>
                  <Button builders="{[builder]}" variant="ghost" size="icon">
                    <X class="h-6 w-6 text-end   text-white lg:hidden" />
                  </Button>
                </Sheet.Close>
              </Sheet.Title>
            </Sheet.Header>

            <ul class="flex flex-col items-start gap-8 p-2">
              {#each slice.primary.nav.filter((e) => !e.cta) as element (element.link.text)}
                <li>
                  <Sheet.Close>
                    <PrismicLink
                      field="{element.link}"
                      class="font-int text-base font-medium text-white">
                      {element.link.text}
                    </PrismicLink>
                  </Sheet.Close>
                </li>
              {/each}
            </ul>

            <ul class="flex flex-col items-start gap-8 pt-8">
              {#each slice.primary.nav.filter((e) => e.cta) as element (element.link.text)}
                <li>
                  <Sheet.Close>
                    <PrismicLink
                      field="{element.link}"
                      class="rounded-full bg-yellow1 px-8 py-2 font-int text-base font-semibold text-white1 hover:bg-blue1 hover:text-yellow1 active:bg-blue1 active:text-yellow1  ">
                      {element.link.text}
                    </PrismicLink>
                  </Sheet.Close>
                </li>
              {/each}
            </ul>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    </header>
    <h3
      class="mt-22 text-pretty px-8 pb-3 text-center font-grot text-2xl font-black md:mt-96 md:pb-5 md:text-5xl">
      {slice.primary.title}
    </h3>
    {#if link}
      <PrismicLink
        field="{link}"
        class="mb-5 rounded-full bg-blue1 px-8 py-2 font-int text-base font-semibold text-white1 hover:bg-yellow1  hover:text-blue1 active:bg-yellow1  active:text-blue1 md:hidden">
        {link.text}
      </PrismicLink>
    {/if}
  </div>
</section>

<!-- removed CSS animation block in favor of JS-driven inline slideshow -->
