<script lang="ts">
  import { page } from "$app/stores";
  import Sonner from "$lib/components/ui/sonner/sonner.svelte";
  import { repositoryName } from "$lib/prismicio";
  import Footer from "@/components/Footer.svelte";
  import Header from "@/components/Header.svelte";
  import "@fontsource-variable/inter";
  import "@fontsource-variable/manrope";
  import "@fontsource-variable/schibsted-grotesk";
  import { PrismicPreview } from "@prismicio/svelte/kit";
  import "highlight.js/styles/github-dark.css";
  import { pwaAssetsHead } from "virtual:pwa-assets/head";
  import { pwaInfo } from "virtual:pwa-info";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {#if pwaAssetsHead.themeColor}
    <meta name="theme-color" content="{pwaAssetsHead.themeColor.content}" />
  {/if}
  {#each pwaAssetsHead.links as link}
    <link {...link} />
  {/each}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html webManifestLink}
  <title>{$page.data.meta_title}</title>
  {#if $page.data.meta_description}
    <meta name="description" content="{$page.data.meta_description}" />
  {/if}
  {#if $page.data.meta_title}
    <meta name="og:title" content="{$page.data.meta_title}" />
  {/if}
  {#if $page.data.meta_image}
    <meta name="og:image" content="{$page.data.meta_image}" />
    <meta name="twitter:card" content="summary_large_image" />
  {/if}
</svelte:head>
<main class="bg-white font-int">
  {#if !$page.data.hideHeader}
    <Header scaffold="{data.scaffold}" />
  {/if}
  <slot />
  <Footer scaffold="{data.scaffold}" />
</main>

<Sonner />
<PrismicPreview {repositoryName} />
