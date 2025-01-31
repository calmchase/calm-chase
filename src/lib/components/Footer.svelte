<script lang="ts">
  import Fulllogo from "@/svg/Fulllogo.svelte";
  import { type Content } from "@prismicio/client";
  import { PrismicLink } from "@prismicio/svelte";
  import DynamicSvg from "./DynamicSvg.svelte";

  export let scaffold: Content.ScaffoldDocument;
</script>

<footer class="bg-blue1">
  <nav aria-label="Footer" class="mx-auto w-full max-w-7xl px-4 pt-9">
    <a href="/">
      <div class="mb-6 h-5 w-18 md:mb-15 md:h-13 md:w-44"><Fulllogo /></div>
    </a>
    <hr class="" />
    <div class="flex flex-col gap-8 md:flex-row md:justify-between">
      <ul
        class="flex basis-2/5 flex-col items-start gap-6 text-wrap font-int text-base font-normal text-white">
        <li class="mt-6 text-lg font-semibold">Reach out</li>
        {#each scaffold.data.reach_us as element (element.link.text)}
          <li>
            <PrismicLink
              field="{element.link}"
              class="flex flex-row items-center gap-6">
              <DynamicSvg icon="{element.svg?.toLocaleLowerCase() ?? ''}" />
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>
      <ul
        class="flex basis-1/5 flex-col items-start gap-6 text-wrap font-int text-base font-normal text-white">
        <li class="mt-6 text-lg font-semibold">Socials</li>
        {#each scaffold.data.socials as element (element.link.text)}
          <li>
            <PrismicLink
              field="{element.link}"
              class="flex flex-row items-center gap-6">
              <DynamicSvg icon="{element.svg?.toLocaleLowerCase() ?? ''}" />
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>
      <ul
        class="flex basis-1/5 flex-col items-start gap-6 text-wrap font-int text-base font-normal text-white">
        <li class="mt-6 text-lg font-semibold">Company</li>
        {#each scaffold.data.company as element (element.link.text)}
          <li>
            <PrismicLink field="{element.link}">
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>
      <ul
        class="flex basis-1/5 flex-col items-start gap-6 text-wrap font-int text-base font-normal text-white">
        <li class="mt-6 text-lg font-semibold">Quick Links</li>
        {#each scaffold.data.quick_links as element (element.link.text)}
          <li>
            <PrismicLink field="{element.link}">
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>
    </div>
    <hr class="mt-8 border-white/30" />
    <div
      class="flex w-full flex-row justify-between py-4 text-xs text-white/50 md:text-base">
      <p>All rights reserved @2025</p>
      <ul class="flex flex-row gap-4">
        {#each scaffold.data.footer as element (element.link.text)}
          <li>
            <PrismicLink field="{element.link}">
              {element.link.text}
            </PrismicLink>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</footer>
