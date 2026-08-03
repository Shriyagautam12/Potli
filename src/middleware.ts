import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (new URL(context.request.url).pathname === "/") {
    response.headers.set("Link", '</about-us>; rel="about"');
  }

  return response;
});