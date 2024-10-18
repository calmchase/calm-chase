<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicLink } from "@prismicio/svelte";
  export let slice: Content.BlogsSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class=" mx-auto my-5 max-w-7xl px-3 md:my-11">
  <Card.Root class="flex flex-col">
    <Card.Header>
      <Card.Title>{slice.primary.title}</Card.Title>
    </Card.Header>
    <Card.Content>
      <p>{slice.primary.content}</p>
    </Card.Content>
    <Card.Footer class="self-center text-sm font-normal text-black1 underline">
      <PrismicLink field="{slice.primary.link}">
        {slice.primary.link.text}
      </PrismicLink>
    </Card.Footer>
  </Card.Root>
</section>
