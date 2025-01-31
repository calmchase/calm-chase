<script lang="ts">
  export let label: string;
</script>

<media-menu-button
  class="ring-media-focus parent left-0 z-10 flex w-full cursor-pointer select-none items-center justify-start rounded-sm bg-black/60 p-2.5 outline-none ring-inset aria-disabled:hidden aria-hidden:hidden data-[open]:sticky data-[open]:-top-2.5 data-[hocus]:bg-white/10 data-[focus]:ring-[3px]">
  <media-icon
    class="parent-data-[open]:block -ml-0.5 mr-1.5 hidden h-[18px] w-[18px]"
    type="chevron-left">
  </media-icon>
  <div class="parent-data-[open]:hidden contents">
    <slot name="icon" />
  </div>
  <span class="parent-data-[open]:ml-0 ml-1.5">{label}</span>
  <span class="ml-auto text-sm text-white/50" data-part="hint"></span>
  <media-icon
    class="parent-data-[open]:hidden ml-0.5 h-[18px] w-[18px] text-sm text-white/50"
    type="chevron-right">
  </media-icon>
</media-menu-button>
