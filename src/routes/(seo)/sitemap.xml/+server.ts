import type { RequestHandler } from "@sveltejs/kit";
import * as sitemap from "super-sitemap";

export const GET: RequestHandler = async ({ url }) => {
  return await sitemap.response({
    origin: url.origin,
    excludeRoutePatterns: [".*\\(app\\).*"],
    paramValues: {
      "/[method=auth_method]": ["login", "signup"],
    },
  });
};
