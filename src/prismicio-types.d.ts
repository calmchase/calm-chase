// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | ActivitiesSlice
  | ProgramsSlice
  | HeaderSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
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
 * Page document from Prismic
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
   * Site Title field in *Scaffold*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Scaffold*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Scaffold*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: scaffold.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

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

export type AllDocumentTypes = PageDocument | ScaffoldDocument;

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
   * Hero field in *Activities → Default → Primary → Activities*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[].hero
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero: prismic.ImageField<"expanded" | "small" | "square">;

  /**
   * content field in *Activities → Default → Primary → Activities*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: activities.default.primary.activities[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
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
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ScaffoldDocument,
      ScaffoldDocumentData,
      ScaffoldDocumentDataReachUsItem,
      ScaffoldDocumentDataSocialsItem,
      ScaffoldDocumentDataCompanyItem,
      ScaffoldDocumentDataQuickLinksItem,
      ScaffoldDocumentDataFooterItem,
      AllDocumentTypes,
      ActivitiesSlice,
      ActivitiesSliceDefaultPrimaryActivitiesItem,
      ActivitiesSliceDefaultPrimary,
      ActivitiesSliceVariation,
      ActivitiesSliceDefault,
      HeaderSlice,
      HeaderSliceDefaultPrimaryNavItem,
      HeaderSliceDefaultPrimary,
      HeaderSliceVariation,
      HeaderSliceDefault,
      ProgramsSlice,
      ProgramsSliceDefaultPrimaryProgramsItem,
      ProgramsSliceDefaultPrimary,
      ProgramsSliceVariation,
      ProgramsSliceDefault,
    };
  }
}
