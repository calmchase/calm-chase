<script lang="ts">
  import { components } from "$lib/slices";
  import { Button } from "@/components/ui/button";
  import { SliceZone } from "@prismicio/svelte";
  import Download from "~icons/mingcute/file-download-fill";
  export let data;
</script>

<SliceZone slices="{data.page.data.slices}" {components} />

<Button
  on:click="{async () => {
    const link = document.createElement('a');
    link.download = 'Problem.pdf';
    link.rel = 'noopener';
    link.href = '/problems.pdf';
    link.click();
    // Revoke the object URL to free up memory
    URL.revokeObjectURL(link.href);
  }}"
  variant="outline"
  class="fixed bottom-5 right-5 h-12 animate-bounce bg-blue1 p-2">
  <Download class="h-10 w-10 text-yellow1" />
</Button>
