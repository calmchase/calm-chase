<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Slider as SliderPrimitive } from "bits-ui";

  type $$Props = SliderPrimitive.Props;

  let className: $$Props["class"] = undefined;
  export let value: $$Props["value"] = [0];
  export { className as class };
</script>

<SliderPrimitive.Root
  bind:value
  class="{cn(
    'relative flex w-full touch-none select-none items-center',
    className,
  )}"
  {...$$restProps}
  let:thumbs>
  <span
    class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
    <SliderPrimitive.Range class="absolute h-full bg-blue1" />
  </span>
  {#each thumbs as thumb}
    <SliderPrimitive.Thumb
      {thumb}
      class="block h-8 w-18 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:h-11 md:w-24" />

    <span
      class="{cn(
        'absolute z-10  translate-x-[-50%] font-arch text-xl font-semibold text-blue1 md:text-2xl',
      )}"
      style="{`left: ${value?.[0] ?? 0 / $$restProps.max}%`}">
      {value?.[0] ?? 0 / $$restProps.max}%
    </span>
  {/each}
</SliderPrimitive.Root>
