import { createClient } from "$lib/prismicio";
import { saveResponse } from "@/server/firebase.js";
import { fail, superValidate, type Infer } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "./$types.js";
import { contactSchema } from "./schema.js";

export async function load({ fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  const page = await client.getSingle("contact");
  return {
    form: await superValidate<Infer<typeof contactSchema>, Message>(
      zod(contactSchema),
    ),
    page,
    hideHeader: page.data.hideHeader,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image,
    meta_description: page.data.meta_description,
  };
}

export async function entries() {
  return [{}];
}

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(contactSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    saveResponse(form.data);
    console.log(JSON.stringify(form.data, null, 2));
    return { form };
  },
};
