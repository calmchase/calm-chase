<script lang="ts">
  // Import styles.
  import "vidstack/player/styles/default/theme.css";
  // Register elements.
  import "vidstack/icons";
  import "vidstack/player";
  import "vidstack/player/ui";

  import { onDestroy, onMount } from "svelte";
  import { isHLSProvider, type MediaProviderChangeEvent } from "vidstack";
  import type { MediaPlayerElement } from "vidstack/elements";

  import VideoLayout from "./components/layouts/VideoLayout.svelte";
  //   import { textTracks } from "./tracks";

  let player: MediaPlayerElement | null;

  onMount(() => {
    /**
     * You can add these tracks using HTML as well.
     *
     * @example
     * ```html
     * <media-provider>
     *   <track label="..." src="..." kind="..." srclang="..." default />
     *   <track label="..." src="..." kind="..." srclang="..." />
     * </media-provider>
     * ```
     */
    // for (const track of textTracks) player.textTracks.add(track);

    // Subscribe to state updates.
    return player?.subscribe(() => {
      // console.log('is paused?', '->', paused);
      // console.log('is audio view?', '->', viewType === 'audio');
    });
  });

  onDestroy(() => {
    player?.destroy();
  });

  function onProviderChange(event: MediaProviderChangeEvent) {
    const provider = event.detail;
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay() {
    // ...
  }
</script>

<media-player
  class="ring-media-focus aspect-video w-full overflow-hidden rounded-md bg-slate-900 font-sans text-white data-[focus]:ring-4"
  title="Sprite Fight"
  src="/video.mp4"
  crossOrigin
  playsInline
  autoplay
  muted="{true}"
  volume="{0}"
  data-muted
  on:provider-change="{onProviderChange}"
  on:can-play="{onCanPlay}"
  bind:this="{player}">
  <media-provider>
    <media-poster
      class="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
      src="/poster.png"
      alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!">
    </media-poster>
  </media-provider>

  <VideoLayout
    thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" />
</media-player>
