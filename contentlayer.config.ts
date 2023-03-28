import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";
import { syncContentFromGit, getSlug } from "./lib/utils";

const require = createRequire(import.meta.url);
const theme = require("shiki/themes/material-ocean.json");

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    version: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => getSlug(doc._raw.flattenedPath),
    },
  },
}));
export default makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "content",
  documentTypes: [Post],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
});
