import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  cleanUrls: true,
  base:
    process.env["NODE_ENV"] === "production"
      ? "/vitepress-routing-problem/"
      : undefined,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Examples",
        items: [{ text: "Example page", link: "/docs/foo/bar" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
