<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import type { Content } from "@prismicio/client";

  export let slice: Content.BatchSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class=" mx-auto my-5 max-w-7xl px-2 md:my-11">
  <Card.Root class="px-3 pt-5 md:px-15 md:pt-9">
    <Card.Header class="flex  flex-row items-center  justify-between  p-0">
      <div>
        <Card.Title>{slice.primary.title}</Card.Title>
        <Card.Description>{slice.primary.fees}</Card.Description>
      </div>

      <a
        href="/contact"
        class="rounded-full bg-blue1 px-5 py-3 text-center font-int text-xs font-semibold text-white1 hover:bg-yellow1 hover:text-blue1 active:bg-yellow1 active:text-blue1 md:px-12 md:py-5 md:text-base">
        {slice.primary.cta.text}
      </a>
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
