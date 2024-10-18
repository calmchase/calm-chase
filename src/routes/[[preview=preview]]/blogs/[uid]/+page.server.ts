import { createClient } from "$lib/prismicio";
import { error } from "@sveltejs/kit";

export async function load({ params, fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  try {
    console.error(params.uid);
    const page = await client.getByUID("blog", params.uid);
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
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid ?? "" };
  });
}
