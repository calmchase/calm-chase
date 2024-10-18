<script lang="ts">
  export let data;
  import { PrismicImage, PrismicRichText } from "@prismicio/svelte";
</script>

<h3
  class="mt-6 text-center font-grot text-1.5xl font-black md:mt-18 md:text-7.5xl">
  {data.page.data.title}
</h3>
<section
  class="mx-auto flex max-w-7xl flex-col justify-between px-2 py-6 md:flex-row md:py-18">
  <div class="mb-10 h-32 w-32 self-center md:h-76 md:w-76 md:self-start">
    <PrismicImage field="{data.page.data.logo}" />
  </div>
  <div class="basis-2/3">
    {#each data.page.data.paragraph as para}
      <article
        class="max-w-prose text-balance pb-8 text-center font-int text-base text-grey1 md:pb-22 md:text-start">
        <h4 class="pb-5 text-xl font-semibold md:pb-7 md:text-4.5xl">
          {para.title}
        </h4>
        <PrismicRichText field="{para.content}" />
      </article>
    {/each}
  </div>
</section>
<div class="relative">
  <PrismicImage field="{data.page.data.footer}" />
  <h3
    class="absolute left-1/2 top-1/3 w-full max-w-prose -translate-x-1/2 -translate-y-1/2 transform text-pretty text-center font-int text-xl font-semibold text-white1 md:top-1/2 md:text-2xl">
    {data.page.data.footerquote}
  </h3>
</div>
