<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";
  import { Button } from "bits-ui";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { AnimatePresence, Motion } from "svelte-motion";
  import { X } from "lucide-svelte";

  export let slice: Content.CarouselSlice;
  let containerRef: HTMLDivElement;
  let scrollerRef: HTMLUListElement;
  const pauseOnHover = false;
  const direction = "left";

  onMount(() => {
    addAnimation();
  });

  let start = false;
  const isVideoOpen = writable(false);
  const selectedVideoSrc = writable("");

  // function openVideo(videoSrc: string) {    ----On prismic content
  function openVideo() {
    // selectedVideoSrc.set(videoSrc);
    selectedVideoSrc.set(
      "https://www.youtube.com/embed/yrNhWVLVLTk?si=sLn_w-8F6lniVaRx",
    );
    isVideoOpen.set(true);
  }

  function closeVideo() {
    isVideoOpen.set(false);
  }

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
      containerRef.style.setProperty("--animation-duration", "40s");
    }
  };

  let animationVariants = {
    "from-center": {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.5, opacity: 0 },
    },
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
      'scroller relative z-20 mx-auto max-w-sm overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:max-w-7xl',
    )}">
    <ul
      bind:this="{scrollerRef}"
      class="{cn(
        'flex w-max min-w-full shrink-0 flex-nowrap gap-4 bg-blue1 py-4',
        start && 'animate-scroll ',
        pauseOnHover && 'hover:[animation-play-state:paused]',
      )}">
      {#each slice.primary.images as item, i (i)}
        <!-- <Button.Root class="relative border-none p-0 shadow-md hover:shadow-xl" on:click={() => openVideo(item.videoSrc)}> -->
        <Button.Root
          class="relative border-none p-0 shadow-md hover:shadow-xl"
          on:click="{() => openVideo()}">
          <li class="h-44 w-44 rounded-md md:h-88 md:w-88">
            <PrismicImage field="{item.image}" />
          </li>
        </Button.Root>
      {/each}
    </ul>
  </div>
</section>

<AnimatePresence let:item list="{[{ key: $isVideoOpen }]}">
  {#if item.key}
    <Motion
      initial="{{ opacity: 0 }}"
      animate="{{ opacity: 1 }}"
      exit="{{ opacity: 0 }}"
      let:motion>
      <div
        use:motion
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
        <Motion
          initial="{animationVariants['from-center'].initial}"
          animate="{animationVariants['from-center'].animate}"
          exit="{animationVariants['from-center'].exit}"
          transition="{{ type: 'spring', damping: 30, stiffness: 300 }}"
          let:motion>
          <div
            use:motion
            class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0">
            <Motion
              let:motion
              whileHover="{{ scale: 1.1 }}"
              whileTap="{{ scale: 0.95 }}">
              <button
                use:motion
                class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md"
                on:click="{closeVideo}">
                <X class="size-5" />
              </button>
            </Motion>
            <Motion
              animate="{{ scale: 1 }}"
              transition="{{ duration: 0.2 }}"
              let:motion>
              <div
                use:motion
                class="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white">
                <iframe
                  src="{$selectedVideoSrc}"
                  class="size-full rounded-2xl"
                  title="Calm Chase  demo clips"
                  allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
              </div>
            </Motion>
          </div>
        </Motion>
      </div>
    </Motion>
  {/if}
</AnimatePresence>

<style>
  .size-5 {
    width: 1.25rem;
    height: 1.25rem;
  }
  .size-full {
    width: 100%;
    height: 100%;
  }
</style>
