<script>
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import { Button } from "@/components/ui/button/index.ts";
  import Favicon from "@/svg/Favicon.svelte";
  import Fulllogo from "@/svg/Fulllogo.svelte";
  import CiMenuAlt01 from "~icons/ci/menu-alt-01";
  import X from "~icons/lucide/x";

  //   /** @type {import('@prismicio/client').Content.ScaffoldDocument} */
  //   export let scaffold;
</script>

<section
  class="flex flex-col items-center justify-center bg-[url('$lib/asset/bg.webp')] bg-cover bg-center bg-no-repeat text-white">
  <div
    class="mx-auto mt-4 flex w-full max-w-7xl flex-row items-center justify-between px-5 md:mt-10">
    <div class="flex items-center gap-3">
      <div class="h-9 w-9 md:h-15 md:w-15"><Favicon /></div>
      <div class="h-5 w-18 md:h-10 md:w-32"><Fulllogo /></div>
    </div>

    <ul class="hidden flex-row gap-8 rounded-full bg-white1 px-15 py-5 md:flex">
      {#each ["Home", "About us", "Our Pride", "Batch Details", "Blogs", "Contact Us"] as element (element)}
        <li class="font-int text-sm font-medium text-black">
          {element}
        </li>
      {/each}
    </ul>
    <ul class="hidden flex-row gap-8 md:flex">
      {#each ["Book your Session"] as element (element)}
        <li
          class="rounded-full bg-blue1 p-5 font-int text-base font-semibold text-white1">
          {element}
        </li>
      {/each}
    </ul>

    <div class="md:hidden">
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button builders="{[builder]}" variant="ghost" size="icon">
            <CiMenuAlt01 class="h-6 w-6  md:hidden" />
          </Button>
        </Sheet.Trigger>
        <Sheet.Content
          side="right"
          class="flex h-full w-full flex-col bg-blue1  px-6">
          <Sheet.Header class="self-end">
            <Sheet.Title>
              <Sheet.Close asChild let:builder>
                <Button builders="{[builder]}" variant="ghost" size="icon">
                  <X class="h-6 w-6 text-end   text-white md:hidden" />
                </Button>
              </Sheet.Close>
            </Sheet.Title>
          </Sheet.Header>

          <ul class="flex flex-col items-start gap-8 p-2">
            {#each ["Home", "About us", "Our Pride", "Batch Details", "Blogs", "Contact Us"] as element (element)}
              <li class="font-int text-base font-medium text-white">
                {element}
              </li>
            {/each}
          </ul>

          <ul class="flex flex-col items-start gap-8 pt-8">
            {#each ["Book your Session"] as element (element)}
              <li
                class="bg-yellow1 rounded-full px-8 py-2 font-int text-base font-semibold text-white1">
                {element}
              </li>
            {/each}
          </ul>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
  <h3
    class="font-man mt-22 pb-3 text-center text-2xl font-black md:mt-96 md:pb-5 md:text-5xl">
    CHASE YOUR GOALS WITH CALMNESS
  </h3>
  <Button class=" bg-blue1 pb-5 md:hidden">Book your Session</Button>
</section>
