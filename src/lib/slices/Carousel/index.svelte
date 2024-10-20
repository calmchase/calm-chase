<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";
  import { onMount } from "svelte";

  export let slice: Content.CarouselSlice;

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
  class=" w-full bg-blue1 py-4 text-center md:py-14">
  <div
    bind:this="{containerRef}"
    class="{cn(
      'scroller relative z-20 mx-auto max-w-screen-sm overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]  md:max-w-7xl',
    )}">
    <ul
      bind:this="{scrollerRef}"
      class="{cn(
        ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 bg-yellow1 py-4',
        start && 'animate-scroll ',
        pauseOnHover && 'hover:[animation-play-state:paused]',
      )}">
      {#each slice.primary.images as item, i (i)}
        <li class="h-44 w-44 rounded-md md:h-88 md:w-88">
          <PrismicImage field="{item.image}" />
        </li>
      {/each}
    </ul>
  </div>
</section>
