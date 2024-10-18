<script lang="ts">
  import { Badge } from "$lib/components/ui/badge/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicImage, PrismicLink } from "@prismicio/svelte";

  export let slice: Content.BlogsSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class=" mx-auto my-5 grid max-w-7xl grid-cols-1 gap-5 px-3 md:my-11 md:grid-cols-3">
  {#each slice.primary.blogs as element (element.title)}
    <PrismicLink field="{element.link}">
      <Card.Root class="flex flex-col p-0">
        <Card.Header class="h-auto w-full p-4">
          <PrismicImage field="{element.hero}" />
        </Card.Header>
        <Card.Content>
          {#if element.tags}
            <div class="mb-5 flex flex-row items-center gap-4">
              {#each element.tags?.split(",") ?? [] as tag}
                <Badge variant="outline" class="bg-blue-400/20 text-blue-600">
                  {tag}
                </Badge>
              {/each}
            </div>
          {/if}

          <Card.Title class="font-grot text-2xl font-semibold text-grey1">
            {element.title}
          </Card.Title>
        </Card.Content>
        <Card.Footer class="flex flex-row items-center ">
          <PrismicImage field="{element.pic}" class="h-10 w-10 rounded-full" />
          <p class="pl-4 font-man text-base font-medium text-slate-500">
            {element.Name}
          </p>
          <p class="ml-auto font-man text-base font-medium text-slate-500">
            {element.date}
          </p>
        </Card.Footer>
      </Card.Root>
    </PrismicLink>
  {/each}
</section>
