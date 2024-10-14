import { createClient } from "$lib/prismicio.js";
import { redirectToPreviewURL } from "@prismicio/svelte/kit";

export async function GET({ fetch, request, cookies }) {
  const client = createClient({ fetch });

  return await redirectToPreviewURL({ client, request, cookies });
}
