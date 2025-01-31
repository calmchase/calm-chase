<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.ts";
  import DynamicSvg from "@/components/DynamicSvg.svelte";
  import NumberTicker from "@/components/NumberTicker.svelte";
  import { Button } from "@/components/ui/button/index.ts";
  import Player from "@/components/ui/player/Player.svelte";
  import Favicon from "@/svg/Favicon.svelte";
  import CiMenuAlt01 from "~icons/ci/menu-alt-01";
  import X from "~icons/lucide/x";
</script>

<main class="flex flex-col items-center bg-[#040711] font-man">
  <div class="w-full max-w-screen-xl">
    <!-- Header component -->
    <header
      aria-label="Header"
      class="mx-auto mt-4 flex w-full flex-row items-center justify-between px-5 lg:mt-10">
      <a href="/" class="  h-12 w-12 lg:h-32 lg:w-32">
        <Favicon />
      </a>
      <p class="flex flex-col items-center gap-2">
        <a
          href="/codequest"
          class="font-mico text-2xl tracking-widest text-white md:text-4xl/none">
          CODEQUEST
        </a>
        <a
          href="/"
          class="font-mina text-sm tracking-wider text-white md:text-base/7">
          BY CALM CHASE
        </a>
      </p>
      <ul class="hidden flex-row lg:flex">
        <li>
          <a
            href="/"
            class="mr-8 text-center text-base/4 font-medium text-white">
            (+91 9503796276)
          </a>
          <a href="/" class="text-center text-base/4 font-medium text-white">
            calmchase@gmail.com
          </a>
        </li>
      </ul>
      <ul class="hidden flex-row gap-8 lg:flex">
        <a
          href="/"
          class="bg-purple1 hover:text-purple1 active:text-purple1 rounded-full p-5 text-base font-semibold text-white1 hover:bg-white active:bg-white">
          Early Bird Registration
        </a>
      </ul>

      <div class="lg:hidden">
        <Sheet.Root>
          <Sheet.Trigger asChild let:builder>
            <Button builders="{[builder]}" variant="ghost" size="icon">
              <CiMenuAlt01 class="h-6 w-6 text-white  lg:hidden" />
            </Button>
          </Sheet.Trigger>
          <Sheet.Content
            side="right"
            class="flex h-full w-full flex-col bg-black  px-6">
            <Sheet.Header class="self-end">
              <Sheet.Title>
                <Sheet.Close asChild let:builder>
                  <Button builders="{[builder]}" variant="ghost" size="icon">
                    <X class="h-6 w-6 text-end   text-white lg:hidden" />
                  </Button>
                </Sheet.Close>
              </Sheet.Title>
            </Sheet.Header>

            <ul class="flex flex-col items-start gap-8 p-2">
              <a
                href="/"
                class="text-center text-base/4 font-medium text-white">
                (+91 9503796276)
              </a>
              <a
                href="/"
                class="text-center text-base/4 font-medium text-white">
                calmchase@gmail.com
              </a>
            </ul>

            <ul class="flex flex-col items-start gap-8 pt-8">
              <a
                href="/"
                class="bg-purple1 hover:text-purple1 active:text-purple1 rounded-full p-5 text-base font-semibold text-white1 hover:bg-white active:bg-white">
                Early Bird Registration
              </a>
            </ul>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    </header>

    <div
      class="grid grid-cols-1 items-center px-5 pb-10 pt-10 text-white lg:grid-cols-2 lg:px-0 lg:pb-40 lg:pt-22">
      <article class="space-y-8">
        <h2 class="font-man text-4.5xl/8 font-normal md:text-6xl">
          CodeQuest - Learning & Hackathon
        </h2>
        <h6 class="text-4xl">By Calm Chase</h6>
        <p class="text-base/5 font-light text-white/80">
          CodeQuest 2025 is a month-long program accelerating coding skills
          through classes, projects, and mentorship, culminating in a national
          hackathon with prizes.
        </p>

        <h6 class="mb-8 text-4xl">Win cash prize up to INR 20,000!</h6>
        <div class="h-8"></div>
        <a
          href="/"
          class="bg-purple1 hover:text-purple1 active:text-purple1 rounded-full px-5 py-3 text-base font-semibold text-white1 hover:bg-white active:bg-white">
          Register now ->
        </a>
        <p class="text-base/5 font-light text-white/80">
          Early bird registration open till Feb 25th, 2025.
        </p>
        <h6 class="mb-8 text-xl">Learn & earn with Calm Chase</h6>
      </article>
      <Player />
    </div>

    <!--Program Highlight section  -->
    <section class="mt-6 md:mt-13">
      <div class="mx-auto w-full py-4 text-center text-white md:py-11">
        <p
          class="col-span-full mb-2 text-2xl font-normal text-white md:row-span-full md:mb-5 md:text-7xl">
          Program Highlights
        </p>
        <div
          class="grid grid-cols-2 gap-3 px-10 md:grid-cols-5 md:gap-2 md:px-6">
          <div
            class="grid grid-cols-subgrid place-content-center place-items-center">
            <NumberTicker
              duration="{500}"
              class="py-2 text-2xl font-bold text-white md:text-9xl"
              value="{Number(20)}" />
            <p
              class="text-pretty text-center text-sm font-medium text-white md:text-xl">
              Hours recorded content
            </p>
          </div>
          <div
            class="grid grid-cols-subgrid place-content-center place-items-center">
            <NumberTicker
              duration="{500}"
              class="py-2 text-2xl font-bold text-white md:text-9xl"
              value="{Number(4)}" />
            <p
              class="text-pretty text-center text-sm font-medium text-white md:text-xl">
              Workshops
            </p>
          </div>
          <div
            class="grid grid-cols-subgrid place-content-center place-items-center">
            <NumberTicker
              duration="{500}"
              class="py-2 text-2xl font-bold text-white md:text-9xl"
              value="{Number(5)}" />
            <p
              class="text-pretty text-center text-sm font-medium text-white md:text-xl">
              Project and assignments
            </p>
          </div>
          <div
            class="grid grid-cols-subgrid place-content-center place-items-center">
            <NumberTicker
              duration="{500}"
              class="py-2 text-2xl font-bold text-white md:text-9xl"
              value="{Number(3)}" />
            <p
              class="text-pretty text-center text-sm font-medium text-white md:text-xl">
              Guest Sessions
            </p>
          </div>
          <div
            class="grid grid-cols-subgrid place-content-center place-items-center">
            <NumberTicker
              duration="{500}"
              class="py-2 text-2xl font-bold text-white md:text-9xl"
              value="{Number(1)}" />
            <p
              class="text-pretty text-center text-sm font-medium text-white md:text-xl">
              Hackathon Event
            </p>
          </div>
        </div>
        <p
          class="col-span-full mb-2 mt-10 text-base font-normal text-white/80 md:row-span-full md:mb-5 md:mt-25">
          Don’t miss this incredible opportunity to level up your skills, make
          new friends, and have fun while learning. Spaces are limited, so make
          sure to secure your spot early. <br />
          Let’s innovate, learn, and hack together!
        </p>
      </div>
    </section>
    <!-- Footer component -->

    <footer
      aria-label="Footer"
      class="mx-auto w-full max-w-7xl p-6 px-4 pt-9 backdrop-blur-sm">
      <div class="flex flex-col gap-8 md:flex-row md:justify-between">
        <p class="flex flex-col items-center gap-2">
          <a href="/" class="  h-12 w-12 lg:h-32 lg:w-32">
            <Favicon />
          </a>
          <a
            href="/codequest"
            class="font-mico text-2xl tracking-widest text-white">
            CODEQUEST
          </a>
          <a href="/" class="font-mina text-sm tracking-wider text-white">
            BY CALM CHASE
          </a>
        </p>
        <ul
          class="flex basis-2/5 flex-col items-start gap-6 text-wrap text-base font-normal text-white">
          <li class="mt-6 text-lg font-semibold">Reach out</li>
          <li>
            <a href="tel:+919503796276" class="flex flex-row items-center">
              <DynamicSvg icon="phone" />
              +91 9503796276
            </a>
          </li>
          <li>
            <a
              href="mail:info@calmchase.com"
              class="flex flex-row items-center">
              <DynamicSvg icon="email" />
              info@calmchase.com
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/63EuUX9K2qjNJrRT7"
              class="flex flex-row items-center">
              <DynamicSvg icon="location" />
              Hadapsar, Pune, India - 412307
            </a>
          </li>
        </ul>
        <ul
          class="flex basis-1/5 flex-col items-start gap-6 text-wrap text-base font-normal text-white">
          <li class="mt-6 text-lg font-semibold">Explore</li>
          <li>
            <a href="/about" class="flex flex-row items-center">About</a>
          </li>
          <li>
            <a href="/about" class="flex flex-row items-center">Blogs</a>
          </li>
          <li>
            <a href="/about" class="flex flex-row items-center">Contact</a>
          </li>
        </ul>
        <ul
          class="flex basis-1/5 flex-col items-start gap-6 text-wrap text-base font-normal text-white">
          <li class="mt-6 text-lg font-semibold">Menu</li>
          <li>
            <a href="/about" class="flex flex-row items-center">Home</a>
          </li>
          <li>
            <a href="/about" class="flex flex-row items-center">Highlights</a>
          </li>
          <li>
            <a href="/about" class="flex flex-row items-center">Tech Events</a>
          </li>
          <li>
            <a href="/about" class="flex flex-row items-center">Timelines</a>
          </li>
        </ul>
        <ul
          class="flex basis-1/5 flex-col items-start gap-6 text-wrap text-base font-normal text-white">
          <li class="mt-6 flex gap-6 text-lg font-semibold">
            <a href="/about" class=" rounded-full border p-2">
              <DynamicSvg icon="internet" />
            </a>
            <a href="/about" class=" rounded-full border p-2">
              <DynamicSvg icon="linkedin" />
            </a>
            <a href="/about" class=" rounded-full border p-2">
              <DynamicSvg icon="instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div
        class=" w-full py-4 text-center text-xs text-white/50 md:py-16 md:text-base">
        ©2025 By Calm Chase. All Rights Reserved.
      </div>
    </footer>
  </div>
</main>
