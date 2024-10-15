import { createClient } from "$lib/prismicio";

export const prerender = "auto";

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  return { scaffold: await client.getSingle("scaffold") };
}
