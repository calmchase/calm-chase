<script>
  import { goto } from "$app/navigation";
  import { AnimateSharedLayout, Motion } from "svelte-motion";

  export let activeIdx = 0;

  export let tabs = [
    {
      title: "Product",
      link: "/product",
    },
    {
      title: "Services",
      link: "/product",
    },
    {
      title: "About",
      link: "/product",
    },
  ];
</script>

<div class="relative flex flex-wrap items-center justify-center">
  <AnimateSharedLayout>
    {#each tabs as item, i}
      <button
        class="group relative z-[1] rounded-full px-4 py-2 {activeIdx === i
          ? 'z-0'
          : ''} "
        on:click="{() => {
          goto('/home');
          activeIdx = i;
        }}">
        {#if activeIdx === i}
          <Motion
            layoutId="clicked-btn"
            transition="{{ duration: 0.2 }}"
            let:motion>
            <div use:motion class="absolute inset-0 rounded-full bg-gray-50">
            </div>
          </Motion>
        {/if}
        <span
          class="relative block text-sm font-medium duration-200 {activeIdx ===
          i
            ? 'text-black delay-100'
            : 'text-white'}">
          {item.title}
        </span>
      </button>
    {/each}
  </AnimateSharedLayout>
</div>
