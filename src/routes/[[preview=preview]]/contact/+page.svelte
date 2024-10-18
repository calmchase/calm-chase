<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import DynamicSvg from "@/components/DynamicSvg.svelte";
  import Button from "@/components/ui/button/button.svelte";
  import { formatPhoneNumber } from "@/utils.js";
  import { PrismicLink } from "@prismicio/svelte";
  import { toast } from "svelte-sonner";
  import SuperDebug, { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import type { PageData } from "./$types.js";
  import { contactSchema } from "./schema.js";

  export let data: PageData;

  const form = superForm(data.form, {
    validationMethod: "oninput",
    validators: zodClient(contactSchema),
    onSubmit: () => {
      toast.message("Sending your query...");
    },

    onResult({ result }) {
      if (result.status === 200 && result.type === "success") {
        toast.success("We have received your query.");
      }
    },
  });

  const { form: formData, enhance, capture, restore, errors } = form;

  export const snapshot = { capture, restore };
</script>

<h3
  class="mt-6 text-center font-grot text-1.5xl font-black md:mt-18 md:text-7.5xl">
  {data.page.data.title}
</h3>
{#if data.page.data.subtitle}
  <p
    class="my-4 text-center font-int text-base font-normal text-slate-400 md:my-7">
    {data.page.data.subtitle}
  </p>
{/if}
<section
  class="mx-auto mb-22 flex w-full max-w-6xl flex-col gap-10 px-2 md:mb-80 md:flex-row">
  <div
    class=" flex flex-col items-start justify-center rounded-md bg-[url('/contact.webp')] bg-cover bg-center bg-no-repeat p-5 md:basis-2/5 md:p-10">
    <h5 class="font-int text-2.5xl text-white1">Contact Information</h5>
    <ul
      class="flex flex-col items-start gap-6 text-wrap pb-24 font-int text-base font-normal text-white">
      <li class="mt-6 text-lg font-semibold">Reach out</li>
      {#each data.page.data.reach_us as element (element.link.text)}
        <li>
          <PrismicLink
            field="{element.link}"
            class="flex flex-row items-center gap-6">
            <DynamicSvg icon="{element.svg?.toLocaleLowerCase() ?? ''}" />
            {element.link.text}
          </PrismicLink>
        </li>
      {/each}
    </ul>
  </div>
  <form
    method="POST"
    class="flex basis-3/5 flex-col gap-5 px-9 md:gap-10 md:px-0"
    use:enhance>
    <div
      class="flex w-full flex-col justify-between gap-5 md:flex-row md:gap-10">
      <Form.Field {form} name="firstName" class="w-full">
        <Form.Control let:attrs>
          <Form.Label class="font-int text-base font-normal text-slate-400">
            First Name
          </Form.Label>
          <Input
            {...attrs}
            type="text"
            inputmode="text"
            placeholder="John"
            autocomplete="given-name"
            class="rounded-none border-0 border-b-2  focus-visible:ring-0  "
            bind:value="{$formData.firstName}" />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="lastName" class="w-full">
        <Form.Control let:attrs>
          <Form.Label class="font-int text-base font-normal text-slate-400">
            Last Name
          </Form.Label>
          <Input
            {...attrs}
            type="text"
            inputmode="text"
            placeholder="Doe"
            autocomplete="family-name"
            class="rounded-none border-0 border-b-2  focus-visible:ring-0  "
            bind:value="{$formData.lastName}" />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    <div
      class="flex w-full flex-col justify-between gap-5 md:flex-row md:gap-10">
      <Form.Field {form} name="email" class="w-full">
        <Form.Control let:attrs>
          <Form.Label class="font-int text-base font-normal text-slate-400">
            Email
          </Form.Label>
          <Input
            {...attrs}
            type="email"
            inputmode="email"
            autocomplete="email"
            placeholder="name@org.com"
            class="rounded-none border-0 border-b-2  focus-visible:ring-0  "
            bind:value="{$formData.email}" />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="phone" class="w-full">
        <Form.Control let:attrs>
          <Form.Label class="font-int text-base font-normal text-slate-400">
            Phone
          </Form.Label>
          <!-- <p class="absolute -left-4 bottom-[19px] text-sm text-slate-600">
            +91
          </p> -->
          <Input
            {...attrs}
            type="tel"
            inputmode="tel"
            autocomplete="tel"
            placeholder="(884) 992-3455"
            class="rounded-none border-0 border-b-2 pl-3  focus-visible:ring-0  "
            value="{formatPhoneNumber($formData.phone)}"
            on:input="{(e) => {
              $formData.phone = formatPhoneNumber(e.currentTarget?.value ?? '');
            }}" />
        </Form.Control>
        <Form.FieldErrors />
      </Form.Field>
    </div>
    <Form.Fieldset {form} name="subject" class="space-y-3">
      <Form.Legend class="font-int text-base font-normal text-slate-400">
        Select Subject?
      </Form.Legend>
      <RadioGroup.Root
        bind:value="{$formData.subject}"
        class="flex flex-row gap-5">
        <div class="flex items-center gap-3">
          <Form.Control let:attrs>
            <RadioGroup.Item value="general" {...attrs} />
            <Form.Label class="font-int text-xs font-normal text-black">
              General Inquiry
            </Form.Label>
          </Form.Control>
        </div>
        <div class="flex items-center gap-3">
          <Form.Control let:attrs>
            <RadioGroup.Item value="course" {...attrs} />
            <Form.Label class="font-int text-xs font-normal text-black">
              Course Inquiry
            </Form.Label>
          </Form.Control>
        </div>
        <RadioGroup.Input name="subject" />
      </RadioGroup.Root>
      <Form.FieldErrors />
    </Form.Fieldset>
    <Form.Field {form} name="message">
      <Form.Control let:attrs>
        <Form.Label class="font-int text-base font-normal text-slate-400">
          Message
        </Form.Label>
        <Textarea
          {...attrs}
          placeholder="Write your message.."
          class="resize-none rounded-none border-0 border-b-2  focus-visible:ring-0  "
          bind:value="{$formData.message}" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Button
      type="submit"
      class="w-full self-end rounded-full bg-blue1 p-5 font-int text-base font-semibold text-white1 hover:bg-yellow1 hover:text-blue1 active:bg-yellow1 active:text-blue1 md:w-fit">
      Send Request
    </Button>
  </form>
</section>

<SuperDebug data="{$formData}" />
<pre>{JSON.stringify(errors, null, 2)}</pre>
