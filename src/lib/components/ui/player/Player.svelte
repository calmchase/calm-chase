<script lang="ts">
  let time = 0;
  let duration: number;
  let paused = true;

  function handleMove(e: MouseEvent | TouchEvent) {
    if (!duration) return;
    if (e instanceof MouseEvent && !(e.buttons & 1)) return;

    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    const { left, right } = (
      e.currentTarget as HTMLElement
    ).getBoundingClientRect();
    time = (duration * (clientX - left)) / (right - left);
    paused = false;
  }

  function handleMousedown(e: MouseEvent) {
    const video = e.currentTarget as HTMLVideoElement;
    if (video.muted) {
      video.muted = false;
    } else {
      paused = !paused;
    }
  }
</script>

<video
  poster="/poster.png"
  src="/video.mp4"
  on:mousemove="{handleMove}"
  on:touchmove|preventDefault="{handleMove}"
  on:mousedown="{handleMousedown}"
  bind:currentTime="{time}"
  bind:duration
  bind:paused
  class="h-auto w-full max-w-3xl object-contain"
  muted
  autoplay>
  <track kind="captions" />
</video>
