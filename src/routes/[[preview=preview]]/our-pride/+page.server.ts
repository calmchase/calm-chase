import { createClient } from "$lib/prismicio";

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  const page = await client.getByUID("listings", "our-pride");
  console.log(JSON.stringify(page, null, 2));
  return {
    page,
    showHeader: page.data.showheader,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image,
    meta_description: page.data.meta_description,
  };
}

export async function entries() {
  return [{}];
}
