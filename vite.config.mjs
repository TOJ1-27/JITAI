import { cp, mkdir, stat, copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const projectRoot = import.meta.dirname;
const siteBase = process.env.VITE_BASE_PATH || "/JITAI/";

function copyStaticSiteFiles() {
  return {
    name: "copy-static-site-files",
    async closeBundle() {
      const distDir = resolve(projectRoot, "dist");
      const assetsSource = resolve(projectRoot, "assets");
      const assetsTarget = resolve(distDir, "assets");

      await mkdir(assetsTarget, { recursive: true });
      await cp(assetsSource, assetsTarget, { recursive: true });

      for (const fileName of ["robots.txt", "sitemap.xml", ".nojekyll"]) {
        const source = resolve(projectRoot, fileName);
        try {
          await stat(source);
          await copyFile(source, resolve(distDir, fileName));
        } catch (error) {
          if (error.code !== "ENOENT") {
            throw error;
          }
        }
      }
    },
  };
}

export default defineConfig({
  base: siteBase,
  plugins: [copyStaticSiteFiles()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(projectRoot, "index.html"),
        "mobile-preview": resolve(projectRoot, "mobile-preview.html"),
        404: resolve(projectRoot, "404.html"),
      },
    },
  },
});
