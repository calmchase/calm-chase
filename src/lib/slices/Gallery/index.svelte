<script lang="ts">
  import type { Content } from "@prismicio/client";
  import { PrismicImage } from "@prismicio/svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { onMount } from "svelte";

  export let slice: Content.GallerySlice;

  onMount(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="container mx-auto mt-4">
  <div class="flex flex-wrap px-1 py-0">
    <div
      class="columns-1 gap-4 py-10 sm:columns-2 md:columns-3 md:py-20"
      id="test-gallery">
      {#each slice.primary.images.reverse() as element}
        <div class="mb-4 break-inside-auto">
          <a
            href="{element.image.url}"
            data-pswp-width="{element.image.dimensions?.width}"
            data-pswp-height="{element.image.dimensions?.height}"
            target="_blank"
            rel="noreferrer">
            <PrismicImage
              field="{element.image}"
              class="w-full rounded-lg object-cover" />
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
