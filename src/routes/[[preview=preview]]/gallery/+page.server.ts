import { createClient } from "$lib/prismicio";
import { error } from "@sveltejs/kit";

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  try {
    const page = await client.getSingle("gallery");
    return {
      page,
      hideHeader: page.data.hideheader,
      meta_title: page.data.meta_title,
      meta_image: page.data.meta_image,
      meta_description: page.data.meta_description,
    };
  } catch (err) {
    error(404, String(err));
  }
}

export async function entries() {
  return [{}];
}
