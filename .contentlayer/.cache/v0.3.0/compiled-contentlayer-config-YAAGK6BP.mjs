// contentlayer.config.ts
import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";

// lib/utils/contentlayer.ts
import { spawn } from "node:child_process";
var runBashCommand = (command) => new Promise((resolve, reject) => {
  const child = spawn(command, [], { shell: true });
  child.stdout.setEncoding("utf8");
  child.stdout.on("data", (data) => process.stdout.write(data));
  child.stderr.setEncoding("utf8");
  child.stderr.on("data", (data) => process.stderr.write(data));
  child.on("close", function(code) {
    if (code === 0) {
      resolve(void 0);
    } else {
      reject(new Error(`Command failed with exit code ${code}`));
    }
  });
});
var syncContentFromGit = async (contentDir) => {
  const syncRun = async () => {
    const gitUrl = process.env.REMOTE_GIT_CONTENT_URL;
    const localRemoteContent = `${contentDir}/remote`;
    await runBashCommand(`
      if [ -d  "${localRemoteContent}" ];
        then
          cd "${localRemoteContent}"; git pull;
        else
          git clone --depth 1 --single-branch  ${gitUrl} ${localRemoteContent};
      fi
    `);
  };
  let wasCancelled = false;
  let syncInterval;
  const syncLoop = async () => {
    console.log("Syncing content files from git");
    await syncRun();
    if (wasCancelled)
      return;
    syncInterval = setTimeout(syncLoop, 1e3 * 60);
  };
  await syncLoop();
  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

// lib/utils/format.ts
import ms from "ms";
import {
  format,
  formatDistanceToNow,
  formatRelative,
  isToday,
  isThisWeek,
  isThisMonth
} from "date-fns";

// lib/utils/network.ts
var getSlug = (filePath) => {
  return filePath.split("/").reverse()[0];
};

// contentlayer.config.ts
var require2 = createRequire(import.meta.url);
var theme = require2("shiki/themes/material-ocean.json");
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    version: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => getSlug(doc._raw.flattenedPath)
    }
  }
}));
var contentlayer_config_default = makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "content",
  documentTypes: [Post],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YAAGK6BP.mjs.map
