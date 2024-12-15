<script lang="ts">
  import NumberTicker from "@/components/NumberTicker.svelte";
  import Adventure from "@/svg/Adventure.svelte";
  import Community from "@/svg/Community.svelte";
  import Defence from "@/svg/Defence.svelte";
  import Tech from "@/svg/Tech.svelte";
  import type { Content } from "@prismicio/client";

  export let slice: Content.CounterSlice;
</script>

<section
  data-slice-type="{slice.slice_type}"
  data-slice-variation="{slice.variation}"
  class="bg-blue1">
  <section
    class="mx-auto my-10 grid max-w-7xl grid-cols-2 place-content-start place-items-start gap-4 py-5 md:grid-cols-4">
    <div class="grid grid-cols-subgrid place-content-center place-items-center">
      <div class="w-16 md:w-32"><Defence /></div>
      <NumberTicker
        class="py-2 text-2xl font-bold text-yellow1 md:text-5xl"
        value="{Number(slice.primary.defence)}" />
      <p
        class="text-pretty text-center text-sm font-medium text-white md:text-xl">
        SELECTED IN DEFENCE FORCES
      </p>
    </div>
    <div class="grid grid-cols-subgrid place-content-center place-items-center">
      <div class="w-16 md:w-32"><Community /></div>
      <NumberTicker
        class="py-2 text-2xl font-bold text-yellow1 md:text-5xl"
        value="{Number(slice.primary.community)}" />
      <p
        class="text-pretty text-center text-sm font-medium text-white md:text-xl">
        COMMUNITY MEMBERS
      </p>
    </div>
    <div class="grid grid-cols-subgrid place-content-center place-items-center">
      <div class="w-16 md:w-32"><Tech /></div>
      <NumberTicker
        class="py-2 text-2xl font-bold text-yellow1 md:text-5xl"
        value="{Number(slice.primary.tech)}" />
      <p
        class="text-pretty text-center text-sm font-medium text-white md:text-xl">
        TECH CLUB MEMBERS
      </p>
    </div>
    <div class="grid grid-cols-subgrid justify-items-center">
      <div class="w-16 md:w-32"><Adventure /></div>
      <NumberTicker
        class="py-2 text-2xl font-bold text-yellow1 md:text-5xl"
        value="{Number(slice.primary.adventure)}" />
      <p
        class="text-pretty text-center text-sm font-medium text-white md:text-xl">
        ADVENTURE CLUB MEMBERS
      </p>
    </div>
  </section>
</section>
