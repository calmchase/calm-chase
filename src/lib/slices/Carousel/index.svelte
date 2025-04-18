<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { cn } from "$lib/utils";
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";
  import { Button } from "bits-ui";
  import { onMount } from "svelte";
  import { mediaQuery } from "svelte-legos";
  import Play from "~icons/lucide/play";

  const isDesktop = mediaQuery("(min-width: 768px)");
  export let slice: Content.CarouselSlice;
  let open = new Array(slice.primary.images.length).fill(false);

  let containerRef: HTMLDivElement;
  let scrollerRef: HTMLUListElement;
  const pauseOnHover = false;
  const direction = "left";

  onMount(() => {
    addAnimation();
  });

  let start = false;

  function addAnimation() {
    if (containerRef && scrollerRef) {
      const scrollerContent = Array.from(scrollerRef.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef) {
          scrollerRef.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      start = true;
    }
  }
  const getDirection = () => {
    if (containerRef) {
      if (direction === "left") {
        containerRef.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef) {
      //   if (speed === "fast") {
      //     containerRef.style.setProperty("--animation-duration", "20s");
      //   } else if (speed === "normal") {
      containerRef.style.setProperty("--animation-duration", "40s");
      //   } else {
      //     containerRef.style.setProperty("--animation-duration", "80s");
      //   }
    }
  };
</script>

<p
  class="col-span-full mb-4 w-full pt-5 text-center font-grot text-2xl font-black text-grey1 md:row-span-full md:mb-8 md:pt-18 md:text-5xl">
  RECENT HIGHLIGHTS
</p>
<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="w-full bg-blue1 py-4 text-center md:max-w-full md:py-14">
  <div
    bind:this="{containerRef}"
    class="{cn(
      'scroller relative z-20 mx-auto max-w-sm  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]  md:max-w-7xl',
    )}">
    <ul
      bind:this="{scrollerRef}"
      class="{cn(
        ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 bg-blue1 py-4',
        start && 'animate-scroll ',
        pauseOnHover && 'hover:[animation-play-state:paused]',
      )}">
      {#each slice.primary.images as item, i (i)}
        {#if $isDesktop}
          <Dialog.Root bind:open="{open[i]}">
            <Dialog.Trigger asChild let:builder>
              <Button.Root
                class="relative border-none p-0 shadow-md hover:shadow-xl"
                builders="{[builder]}">
                <li class="h-44 w-44 rounded-md md:h-88 md:w-88">
                  <PrismicImage field="{item.image}" />
                  {#if item.videolink?.trim().length}
                    <div
                      class="absolute inset-0 flex items-center justify-center">
                      <div
                        class="flex size-24 items-center justify-center rounded-full border border-neutral-800 backdrop-blur-md transition-transform duration-300 ease-out">
                        <div
                          class="relative flex size-20 items-center justify-center rounded-full border border-neutral-800 backdrop-blur-2xl transition-all duration-300 ease-out">
                          <Play
                            class="size-8"
                            style="transition: transform 0.3s ease; color: white;" />
                        </div>
                      </div>
                    </div>
                  {/if}
                </li>
              </Button.Root>
            </Dialog.Trigger>
            {#if item.videolink?.trim().length}
              <Dialog.Content
                class="flex items-center rounded-md border-none bg-transparent p-4 ">
                <div
                  class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
                  <div
                    class="mx-4 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-white md:mx-0">
                    <iframe
                      src="{item.videolink}"
                      class="size-full"
                      title="Calm Chase demo clips"
                      allowfullscreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                  </div>
                </div>
              </Dialog.Content>
            {:else}
              <Dialog.Content
                class="flex max-w-xl items-center rounded-md border-none bg-transparent p-4 ">
                <div class="h-auto w-full rounded-md">
                  <PrismicImage field="{item.image}" />
                </div>
              </Dialog.Content>
            {/if}
          </Dialog.Root>
        {:else}
          <Drawer.Root snapPoints="{[0.8]}" bind:open="{open[i]}">
            <Drawer.Trigger asChild let:builder>
              <Button.Root
                class="relative border-none p-0 shadow-md hover:shadow-xl"
                builders="{[builder]}">
                <li class="h-44 w-44 rounded-md md:h-88 md:w-88">
                  <PrismicImage field="{item.image}" />
                  {#if item.videolink?.trim().length}
                    <div
                      class="absolute inset-0 flex items-center justify-center">
                      <div
                        class="flex size-24 items-center justify-center rounded-full border border-neutral-800 backdrop-blur-md transition-transform duration-300 ease-out">
                        <div
                          class="relative flex size-20 items-center justify-center rounded-full border border-neutral-800 backdrop-blur-2xl transition-all duration-300 ease-out">
                          <Play
                            class="size-8"
                            style="transition: transform 0.3s ease; color: white;" />
                        </div>
                      </div>
                    </div>
                  {/if}
                </li>
              </Button.Root>
            </Drawer.Trigger>
            <Drawer.Content
              class="h-full border-none  bg-white/20 px-5 backdrop-blur-md">
              {#if item.videolink?.trim().length}
                <div class="flex h-full w-full justify-center">
                  <div
                    class="mx-4 mt-5 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/40 bg-black/80 shadow-lg backdrop-blur-sm md:mx-0">
                    <iframe
                      src="{item.videolink}"
                      class="size-full"
                      title="Calm Chase demo clips"
                      allowfullscreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </iframe>
                  </div>
                </div>
              {:else}
                <div
                  class="mt-5 h-auto w-full overflow-hidden rounded-2xl border border-white/40 bg-black/90 shadow-lg backdrop-blur-sm md:mx-0">
                  <PrismicImage field="{item.image}" />
                </div>
              {/if}
            </Drawer.Content>
          </Drawer.Root>
        {/if}
      {/each}
    </ul>
  </div>
</section>
