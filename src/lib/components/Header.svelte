<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import { Button } from "@/components/ui/button/index.ts";
  import Favicon from "@/svg/Favicon.svelte";
  import Fulllogo from "@/svg/Fulllogo.svelte";
  import "@fontsource-variable/inter";
  import "@fontsource-variable/manrope";
  import "@fontsource-variable/schibsted-grotesk";
  import { type Content } from "@prismicio/client";
  import { PrismicLink } from "@prismicio/svelte";
  import "highlight.js/styles/github-dark.css";
  import CiMenuAlt01 from "~icons/ci/menu-alt-01";
  import X from "~icons/lucide/x";
  import "../app.css";

  export let scaffold: Content.ScaffoldDocument;
</script>

<header
  aria-label="Header"
  class="mx-auto mt-4 flex w-full max-w-7xl flex-row items-center justify-between px-5 md:mt-10">
  <div class="flex items-center gap-3">
    <div class="h-9 w-9 md:h-15 md:w-15"><Favicon /></div>
    <div class="h-5 w-18 md:h-10 md:w-32"><Fulllogo /></div>
  </div>
  <ul class="hidden flex-row gap-8 rounded-full bg-white1 px-15 py-5 md:flex">
    {#each scaffold.data.nav.filter((e) => !e.cta) as element (element.link.text)}
      <li>
        <PrismicLink
          field="{element.link}"
          class="font-int text-sm font-medium text-black">
          {element.link.text}
        </PrismicLink>
      </li>
    {/each}
  </ul>
  <ul class="hidden flex-row gap-8 md:flex">
    {#each scaffold.data.nav.filter((e) => e.cta) as element (element.link.text)}
      <li>
        <PrismicLink
          field="{element.link}"
          class="rounded-full bg-blue1 p-5 font-int text-base font-semibold text-white1 hover:bg-yellow1 hover:text-blue1 active:bg-yellow1 active:text-blue1">
          {element.link.text}
        </PrismicLink>
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
          {#each scaffold.data.nav.filter((e) => !e.cta) as element (element.link.text)}
            <li>
              <PrismicLink
                field="{element.link}"
                class="font-int text-base font-medium text-white">
                {element.link.text}
              </PrismicLink>
            </li>
          {/each}
        </ul>

        <ul class="flex flex-col items-start gap-8 pt-8">
          {#each scaffold.data.nav.filter((e) => e.cta) as element (element.link.text)}
            <li>
              <PrismicLink
                field="{element.link}"
                class="rounded-full bg-yellow1 px-8 py-2 font-int text-base font-semibold text-white1 hover:bg-blue1 hover:text-yellow1 active:bg-blue1 active:text-yellow1  ">
                {element.link.text}
              </PrismicLink>
            </li>
          {/each}
        </ul>
      </Sheet.Content>
    </Sheet.Root>
  </div>
</header>
