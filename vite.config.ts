import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    SvelteKitPWA({
      // registerType: 'autoUpdate',
      // injectRegister: 'script-defer',
      // includeAssets: ['static/favicon.ico', 'static/apple-touch-icon.png', 'static/favicon.svg'],

      scope: "/",
      base: "/",
      srcDir: "./src",
      mode: "production",
      strategies: "generateSW",

      devOptions: {
        enabled: false,
        type: "module",
        navigateFallback: "/",
        suppressWarnings: true,
      },
      kit: {
        includeVersionFile: true,
      },
      selfDestroying: process.env.SELF_DESTROYING_SW === "true",
      manifest: {
        id: "/",
        lang: "en",
        scope: "/",
        start_url: "/",
        name: "AutoQuoteGuide 1",
        orientation: "any",
        display: "standalone",
        theme_color: "#ffffff",
        short_name: "AutoQuoteGuide",
        background_color: "#ffffff",
        categories: ["lead", "insurance", "utilities"],
        description: "Empowering Your Lead Generation",
        icons: [
          {
            src: "/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        shortcuts: [
          {
            name: "Home",
            short_name: "Home",
            url: "/?source=pwa",
            description: "Goto Home Page",
            icons: [
              { src: "/pwa-192x192.png", type: "image/png", sizes: "192x192" },
            ],
          },
          {
            name: "Request Quote",
            short_name: "Quote",
            url: "/quote?source=pwa",
            description: "Request free quote",
            icons: [
              { src: "/pwa-192x192.png", type: "image/png", sizes: "192x192" },
            ],
          },
        ],

        share_target: {
          action: "/?utm_medium=PWA&utm_source=share-target&share-target",
          method: "POST",
          enctype: "multipart/form-data",
          params: { files: [{ name: "file", accept: ["image/*"] }] },
        },
        screenshots: [
          {
            src: "/narrow.png",
            type: "image/png",
            sizes: "448x776",
            form_factor: "narrow",
          },

          {
            src: "/wide.png",
            type: "image/png",
            sizes: "879x476",
            form_factor: "wide",
          },
        ],
      },
    }),
    enhancedImages(),
    sveltekit(),
    Icons({
      compiler: "svelte",
      autoInstall: true,
    }),
    purgeCss(),
  ],
  server: {
    fs: {
      // Allow access to files from the project root.
      allow: [".."],
    },
  },
});
