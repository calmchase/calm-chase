import "unplugin-icons/types/svelte";
import "vite-plugin-pwa/info";
import "vite-plugin-pwa/pwa-assets";
import "vite-plugin-pwa/svelte";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  type Message = { status: "error" | "success" | "warning"; text: string };

  type APIResponse<T = object> =
    | { success: false; error: string }
    | { success: true; data: T };

  namespace App {
    interface Locals {
      ip: string;
      userid: string;
      buildDate: string;
      userAgent: string;
      periodicUpdates: boolean;
    }

    // interface Error {}
    interface Locals {
      user: import("firebase-admin/auth").DecodedIdToken | null;
    }
    // interface PageData {}
    // interface PageState {}
    interface Platform {
      env: {
        COUNTER: DurableObjectNamespace;
      };
      context: {
        waitUntil(promise: Promise<unknown>): void;
      };
      caches: CacheStorage & { default: Cache };
    }
  }
}

export {};
