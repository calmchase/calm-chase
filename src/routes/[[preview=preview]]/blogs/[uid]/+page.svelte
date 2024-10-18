<script>
  import { components } from "$lib/slices";
  import { PrismicImage, PrismicRichText, SliceZone } from "@prismicio/svelte";

  export let data;
</script>

<section
  class="mx-auto flex max-w-prose flex-col gap-5 text-pretty px-4 md:px-0">
  <h3 class="mt-6 font-grot text-xl font-black md:mt-18 md:text-4xl">
    {data.page.data.title}
  </h3>
  <div class="flex flex-row items-center gap-4">
    <PrismicImage field="{data.page.data.pic}" class="h-10 w-10 rounded-full" />
    <p>{data.page.data.name}</p>
    <p>{data.page.data.date}</p>
  </div>
  <PrismicImage field="{data.page.data.hero}" class="h-auto w-full" />
  <PrismicRichText field="{data.page.data.content}" />
</section>
<SliceZone slices="{data.page.data.slices}" {components} />
