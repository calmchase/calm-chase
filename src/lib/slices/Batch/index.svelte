<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import type { Content } from "@prismicio/client";
  import { PrismicLink } from "@prismicio/svelte";

  export let slice: Content.BatchSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class=" mx-auto my-5 max-w-7xl px-2 md:my-11">
  <Card.Root class="px-3 pt-5 md:px-15 md:pt-9">
    <Card.Header
      class="flex flex-col p-0 md:flex-row md:items-center md:justify-between">
      <div>
        <Card.Title>{slice.primary.title}</Card.Title>
        <Card.Description>{slice.primary.fees}</Card.Description>
      </div>

      <PrismicLink
        field="{slice.primary.cta}"
        class="  rounded-full bg-blue1 py-2 text-center font-int text-base font-semibold text-white1 hover:bg-yellow1 hover:text-blue1 active:bg-yellow1 active:text-blue1  md:px-12 md:py-5">
        {slice.primary.cta.text}
      </PrismicLink>
    </Card.Header>
    <Card.Content class="mx-auto w-full p-0 pt-5">
      <Table.Root>
        <Table.Header>
          <Table.Row class="font-int text-base font-medium text-blue1">
            <Table.Head>Activity</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head class="text-right">Frequency</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each slice.primary.batchdetails as row, i (i)}
            <Table.Row class="font-int text-base font-medium text-black1">
              <Table.Cell class="font-medium">{row.activity}</Table.Cell>
              <Table.Cell>{row.description}</Table.Cell>
              <Table.Cell class="text-right">{row.frequency}</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </Card.Content>
  </Card.Root>
</section>
