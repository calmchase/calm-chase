<script lang="ts">
  import Globe from "~icons/ion/globe-outline";
  import Mail from "~icons/material-symbols-light/mail";
  import Instagram from "~icons/mdi/instagram";
  import LinkedIn from "~icons/mdi/linkedin";
  import Location from "~icons/mdi/location";
  import Phone from "~icons/mingcute/phone-call-fill";

  export let icon: string;
</script>

<div class="h-6 w-6 text-white">
  {#if icon.toLocaleLowerCase().trim() === "phone"}
    <Phone />
  {:else if icon.toLocaleLowerCase().trim() === "email"}
    <Mail />
  {:else if icon.toLocaleLowerCase().trim() === "location"}
    <Location />
  {:else if icon.toLocaleLowerCase().trim() === "instagram"}
    <Instagram />
  {:else if icon.toLocaleLowerCase().trim() === "linkedin"}
    <LinkedIn />
  {:else if icon.toLocaleLowerCase().trim() === "internet"}
    <Globe />
  {:else}
    <Phone />
  {/if}
</div>
