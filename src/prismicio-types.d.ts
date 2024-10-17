// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *About → Paragraph*
 */
export interface AboutDocumentDataParagraphItem {
  /**
   * Title field in *About → Paragraph*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.paragraph[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *About → Paragraph*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.paragraph[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

type AboutDocumentDataSlicesSlice = never;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Logo field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Paragraph field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.paragraph[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  paragraph: prismic.GroupField<Simplify<AboutDocumentDataParagraphItem>>;

  /**
   * Footer field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.footer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  footer: prismic.ImageField<never>;

  /**
   * FooterQuote field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.footerquote
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footerquote: prismic.KeyTextField;

  /**
   * ShowHeader field in *About*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: about.showheader
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  showheader: prismic.BooleanField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type ListingsDocumentDataSlicesSlice =
  | TestimonialsSlice
  | BlogsSlice
  | BatchSlice;

/**
 * Content for Listings documents
 */
interface ListingsDocumentData {
  /**
   * Title field in *Listings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: listings.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Listings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: listings.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * ShowHeader field in *Listings*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: listings.showheader
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  showheader: prismic.BooleanField;

  /**
   * Slice Zone field in *Listings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: listings.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ListingsDocumentDataSlicesSlice> /**
   * Meta Title field in *Listings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: listings.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Listings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: listings.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Listings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: listings.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Listings document from Prismic
 *
 * - **API ID**: `listings`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ListingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ListingsDocumentData>,
    "listings",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | HeroSlice
  | CardSlice
  | ActivitiesSlice
  | ProgramsSlice
  | HeaderSlice;

/**
 * Content for Home documents
 */
interface PageDocumentData {
  /**
   * ShowHeader field in *Home*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: page.showheader
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  showheader: prismic.BooleanField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Scaffold → Nav*
 */
export interface ScaffoldDocumentDataNavItem {
  /**
   * Link field in *Scaffold → Nav*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.nav[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * CTA field in *Scaffold → Nav*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: scaffold.nav[].cta
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta: prismic.BooleanField;
}

/**
 * Item in *Scaffold → Reach us*
 */
export interface ScaffoldDocumentDataReachUsItem {
  /**
   * Link field in *Scaffold → Reach us*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.reach_us[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * SVG field in *Scaffold → Reach us*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.reach_us[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

/**
 * Item in *Scaffold → Socials*
 */
export interface ScaffoldDocumentDataSocialsItem {
  /**
   * Link field in *Scaffold → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * SVG field in *Scaffold → Socials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.socials[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

/**
 * Item in *Scaffold → Company*
 */
export interface ScaffoldDocumentDataCompanyItem {
  /**
   * Link field in *Scaffold → Company*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.company[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * SVG field in *Scaffold → Company*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.company[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

/**
 * Item in *Scaffold → Quick Links*
 */
export interface ScaffoldDocumentDataQuickLinksItem {
  /**
   * Link field in *Scaffold → Quick Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.quick_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * SVG field in *Scaffold → Quick Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.quick_links[].svg
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  svg: prismic.KeyTextField;
}

/**
 * Item in *Scaffold → Footer*
 */
export interface ScaffoldDocumentDataFooterItem {
  /**
   * Link field in *Scaffold → Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.footer[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Scaffold documents
 */
interface ScaffoldDocumentData {
  /**
   * Nav field in *Scaffold*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.nav[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav: prismic.GroupField<Simplify<ScaffoldDocumentDataNavItem>>;

  /**
   * Reach us field in *Scaffold*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.reach_us[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  reach_us: prismic.GroupField<Simplify<ScaffoldDocumentDataReachUsItem>>;

  /**
   * Socials field in *Scaffold*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<ScaffoldDocumentDataSocialsItem>>;

  /**
   * Company field in *Scaffold*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.company[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  company: prismic.GroupField<Simplify<ScaffoldDocumentDataCompanyItem>>;

  /**
   * Quick Links field in *Scaffold*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.quick_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  quick_links: prismic.GroupField<Simplify<ScaffoldDocumentDataQuickLinksItem>>;

  /**
   * Footer field in *Scaffold*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.footer[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer: prismic.GroupField<Simplify<ScaffoldDocumentDataFooterItem>>;
}

/**
 * Scaffold document from Prismic
 *
 * - **API ID**: `scaffold`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ScaffoldDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ScaffoldDocumentData>,
    "scaffold",
    Lang
  >;

type TestimonialDocumentDataSlicesSlice = never;

/**
 * Content for Testimonial documents
 */
interface TestimonialDocumentData {
  /**
   * `slices` field in *Testimonial*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TestimonialDocumentDataSlicesSlice>;
}

/**
 * Testimonial document from Prismic
 *
 * - **API ID**: `testimonial`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TestimonialDocumentData>,
    "testimonial",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | ListingsDocument
  | PageDocument
  | ScaffoldDocument
  | TestimonialDocument;

/**
 * Item in *Activities → Default → Primary → Activities*
 */
export interface ActivitiesSliceDefaultPrimaryActivitiesItem {
  /**
   * Title field in *Activities → Default → Primary → Activities*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Square field in *Activities → Default → Primary → Activities*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[].square
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  square: prismic.ImageField<never>;

  /**
   * content field in *Activities → Default → Primary → Activities*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Wide field in *Activities → Default → Primary → Activities*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[].wide
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  wide: prismic.ImageField<never>;
}

/**
 * Primary content in *Activities → Default → Primary*
 */
export interface ActivitiesSliceDefaultPrimary {
  /**
   * Activities field in *Activities → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  activities: prismic.GroupField<
    Simplify<ActivitiesSliceDefaultPrimaryActivitiesItem>
  >;
}

/**
 * Default variation for Activities Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ActivitiesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ActivitiesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Activities*
 */
type ActivitiesSliceVariation = ActivitiesSliceDefault;

/**
 * Activities Shared Slice
 *
 * - **API ID**: `activities`
 * - **Description**: Activities
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ActivitiesSlice = prismic.SharedSlice<
  "activities",
  ActivitiesSliceVariation
>;

/**
 * Item in *Batch → Default → Primary → BatchDetails*
 */
export interface BatchSliceDefaultPrimaryBatchdetailsItem {
  /**
   * Activity field in *Batch → Default → Primary → BatchDetails*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.batchdetails[].activity
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  activity: prismic.KeyTextField;

  /**
   * Description field in *Batch → Default → Primary → BatchDetails*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.batchdetails[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Frequency field in *Batch → Default → Primary → BatchDetails*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.batchdetails[].frequency
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  frequency: prismic.KeyTextField;
}

/**
 * Primary content in *Batch → Default → Primary*
 */
export interface BatchSliceDefaultPrimary {
  /**
   * BatchDetails field in *Batch → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.batchdetails[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  batchdetails: prismic.GroupField<
    Simplify<BatchSliceDefaultPrimaryBatchdetailsItem>
  >;

  /**
   * Title field in *Batch → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Fees field in *Batch → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.fees
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fees: prismic.KeyTextField;

  /**
   * CTA field in *Batch → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: batch.default.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta: prismic.LinkField;
}

/**
 * Default variation for Batch Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BatchSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BatchSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Batch*
 */
type BatchSliceVariation = BatchSliceDefault;

/**
 * Batch Shared Slice
 *
 * - **API ID**: `batch`
 * - **Description**: Batch
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BatchSlice = prismic.SharedSlice<"batch", BatchSliceVariation>;

/**
 * Primary content in *Blog → Default → Primary*
 */
export interface BlogsSliceDefaultPrimary {
  /**
   * Hero field in *Blog → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs.default.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;

  /**
   * Title field in *Blog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Content field in *Blog → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Default variation for Blog Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Blog*
 */
type BlogsSliceVariation = BlogsSliceDefault;

/**
 * Blog Shared Slice
 *
 * - **API ID**: `blogs`
 * - **Description**: Blogs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogsSlice = prismic.SharedSlice<"blogs", BlogsSliceVariation>;

/**
 * Primary content in *Card → Default → Primary*
 */
export interface CardSliceDefaultPrimary {
  /**
   * Hero field in *Card → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;

  /**
   * Title field in *Card → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Card → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA field in *Card → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta: prismic.LinkField;
}

/**
 * Default variation for Card Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Card*
 */
type CardSliceVariation = CardSliceDefault;

/**
 * Card Shared Slice
 *
 * - **API ID**: `card`
 * - **Description**: Card
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlice = prismic.SharedSlice<"card", CardSliceVariation>;

/**
 * Item in *Header → Default → Primary → Nav*
 */
export interface HeaderSliceDefaultPrimaryNavItem {
  /**
   * Link field in *Header → Default → Primary → Nav*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.nav[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * CTA field in *Header → Default → Primary → Nav*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: header.default.primary.nav[].cta
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  cta: prismic.BooleanField;
}

/**
 * Primary content in *Header → Default → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * Nav field in *Header → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.nav[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav: prismic.GroupField<Simplify<HeaderSliceDefaultPrimaryNavItem>>;

  /**
   * Title field in *Header → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;

  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Programs → Default → Primary → Programs*
 */
export interface ProgramsSliceDefaultPrimaryProgramsItem {
  /**
   * Title field in *Programs → Default → Primary → Programs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Personality Development
   * - **API ID Path**: programs.default.primary.programs[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Programs → Default → Primary → Programs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Immersive 3-month program to enhance your personality, featuring both online and offline activities
   * - **API ID Path**: programs.default.primary.programs[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *Programs → Default → Primary*
 */
export interface ProgramsSliceDefaultPrimary {
  /**
   * Programs field in *Programs → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: programs.default.primary.programs[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  programs: prismic.GroupField<
    Simplify<ProgramsSliceDefaultPrimaryProgramsItem>
  >;
}

/**
 * Default variation for Programs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProgramsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Programs*
 */
type ProgramsSliceVariation = ProgramsSliceDefault;

/**
 * Programs Shared Slice
 *
 * - **API ID**: `programs`
 * - **Description**: Programs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramsSlice = prismic.SharedSlice<
  "programs",
  ProgramsSliceVariation
>;

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * Hero field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<never>;

  /**
   * Testimony field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.testimony
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimony: prismic.KeyTextField;

  /**
   * Name field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataParagraphItem,
      AboutDocumentDataSlicesSlice,
      ListingsDocument,
      ListingsDocumentData,
      ListingsDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ScaffoldDocument,
      ScaffoldDocumentData,
      ScaffoldDocumentDataNavItem,
      ScaffoldDocumentDataReachUsItem,
      ScaffoldDocumentDataSocialsItem,
      ScaffoldDocumentDataCompanyItem,
      ScaffoldDocumentDataQuickLinksItem,
      ScaffoldDocumentDataFooterItem,
      TestimonialDocument,
      TestimonialDocumentData,
      TestimonialDocumentDataSlicesSlice,
      AllDocumentTypes,
      ActivitiesSlice,
      ActivitiesSliceDefaultPrimaryActivitiesItem,
      ActivitiesSliceDefaultPrimary,
      ActivitiesSliceVariation,
      ActivitiesSliceDefault,
      BatchSlice,
      BatchSliceDefaultPrimaryBatchdetailsItem,
      BatchSliceDefaultPrimary,
      BatchSliceVariation,
      BatchSliceDefault,
      BlogsSlice,
      BlogsSliceDefaultPrimary,
      BlogsSliceVariation,
      BlogsSliceDefault,
      CardSlice,
      CardSliceDefaultPrimary,
      CardSliceVariation,
      CardSliceDefault,
      HeaderSlice,
      HeaderSliceDefaultPrimaryNavItem,
      HeaderSliceDefaultPrimary,
      HeaderSliceVariation,
      HeaderSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProgramsSlice,
      ProgramsSliceDefaultPrimaryProgramsItem,
      ProgramsSliceDefaultPrimary,
      ProgramsSliceVariation,
      ProgramsSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
    };
  }
}
