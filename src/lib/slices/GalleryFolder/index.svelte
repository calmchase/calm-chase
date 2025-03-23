<script lang="ts">
  import { Card, CardContent, CardFooter } from "$lib/components/ui/card";
  import type { Content } from "@prismicio/client";
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";
  import { onMount } from "svelte";
  export let slice: Content.GalleryFolderSlice;

  onMount(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-container",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    // Register bullets indicator UI element
    lightbox.on("uiRegister", function () {
      lightbox?.pswp?.ui?.registerElement({
        name: "bulletsIndicator",
        className: "pswp__bullets-indicator",
        appendTo: "wrapper",
        onInit: (el, pswp) => {
          const bullets: HTMLDivElement[] = [];
          let bullet;
          let prevIndex = -1;

          // Create bullet for each slide
          for (let i = 0; i < pswp.getNumItems(); i++) {
            bullet = document.createElement("div");
            bullet.className = "pswp__bullet";
            bullet.onclick = (e) => {
              if (e.target instanceof HTMLDivElement) {
                pswp.goTo(bullets.indexOf(e.target));
              }
            };
            el.appendChild(bullet);
            bullets.push(bullet);
          }

          // Update active bullet on slide change
          pswp.on("change", () => {
            if (prevIndex >= 0) {
              bullets[prevIndex].classList.remove("pswp__bullet--active");
            }
            bullets[pswp.currIndex].classList.add("pswp__bullet--active");
            prevIndex = pswp.currIndex;
          });
        },
      });

      // Register custom caption UI element with improved empty caption handling
      lightbox?.pswp?.ui?.registerElement({
        name: "custom-caption",
        order: 9,
        isButton: false,
        appendTo: "root",
        html: "",
        onInit: (el) => {
          // Hide caption element initially
          el.classList.add("pswp__custom-caption");

          lightbox.pswp?.on("change", () => {
            const currSlideElement = lightbox.pswp?.currSlide?.data.element;
            let captionHTML = "";

            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector(
                ".hidden-caption-content",
              );
              if (hiddenCaption) {
                // Get caption from hidden element
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // Fallback to alt attribute if no hidden caption
                const img = currSlideElement.querySelector("img");
                if (img) {
                  captionHTML = img.getAttribute("alt") || "";
                }
              }
            }

            // Handle empty caption cases - hide element when no caption
            if (captionHTML.trim() === "") {
              el.style.display = "none";
            } else {
              el.style.display = "block";
              el.innerHTML = captionHTML;
            }
          });
        },
      });
    });

    lightbox.init();
  });
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="container mx-auto"
  id="gallery-container">
  <!-- Use Card component instead of custom wrapper -->
  <Card
    class="mb-4 inline-block w-full break-inside-avoid overflow-hidden rounded-lg">
    <CardContent class="p-0">
      <a
        href="{slice.primary.cover.url}"
        data-pswp-width="{slice.primary.cover.dimensions?.width}"
        data-pswp-height="{slice.primary.cover.dimensions?.height}"
        target="_blank"
        rel="noreferrer">
        <PrismicImage
          field="{slice.primary.cover}"
          class="w-full cursor-pointer object-cover transition-opacity hover:opacity-90" />
      </a>
    </CardContent>

    {#if slice.primary.caption}
      <CardFooter class="px-3 py-2 text-center">
        <div
          class="caption-container mx-auto w-full text-pretty text-start font-light text-gray-700">
          <PrismicRichText field="{slice.primary.caption}" />
        </div>
      </CardFooter>
    {/if}
  </Card>

  <!-- Hidden links for all images in the gallery (for PhotoSwipe) -->
  <div class="hidden">
    {#each slice.primary.images as element}
      <a
        href="{element.image.url}"
        data-pswp-width="{element.image.dimensions?.width}"
        data-pswp-height="{element.image.dimensions?.height}"
        target="_blank"
        rel="noreferrer">
        <!-- Add hidden caption content -->
        {#if element.caption}
          <div class="hidden-caption-content">
            <PrismicRichText field="{element.caption}" />
          </div>
        {/if}
      </a>
    {/each}
  </div>
</section>

<style>
  /* Styles for the bullets indicator */
  :global(.pswp__bullets-indicator) {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 1;
  }

  :global(.pswp__bullet) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 5px;
    cursor: pointer;
  }

  :global(.pswp__bullet--active) {
    background: #fff;
  }

  /* Improved caption styles with enhanced readability */
  :global(.pswp__custom-caption) {
    /* Base styling */
    position: absolute;
    left: 50%;
    bottom: 60px; /* Position well above bullets */
    transform: translateX(-50%);

    /* Size and shape */
    width: auto;
    min-width: 200px;
    max-width: 80%;
    border-radius: 0.5rem;

    /* Background and shadows - improved for readability */
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    /* Text styling - enhanced for better readability */
    color: white;
    padding: 0.75rem 1.25rem;
    font-size: 1rem; /* Increased from 0.875rem */
    line-height: 1.6;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.01em;

    /* Animation */
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
  }

  /* Animation for caption appearance */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, 10px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  :global(.pswp__custom-caption a) {
    color: #38bdf8; /* Tailwind sky-400 */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  :global(.pswp__custom-caption a:hover) {
    color: #7dd3fc; /* Tailwind sky-300 */
    text-decoration: underline;
  }

  :global(.hidden-caption-content) {
    display: none;
  }

  /* Style the caption content that comes from Prismic - improved readability */
  :global(.pswp__custom-caption p) {
    margin: 0.5em 0;
  }

  :global(.pswp__custom-caption p:first-child) {
    margin-top: 0;
  }

  :global(.pswp__custom-caption p:last-child) {
    margin-bottom: 0;
  }

  :global(.pswp__custom-caption strong) {
    font-weight: 600;
  }

  /* Better contrast for small text */
  :global(.pswp__custom-caption small) {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.85em;
  }
</style>
