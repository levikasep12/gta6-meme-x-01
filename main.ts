// gta6-meme-x-01 entry: hands the post file to the grader.
//
// The entry is the X post itself (see POST.json). All this program has to
// do is copy POST.json from this repository into the grader's output
// directory, where the gate reads it and the house fetches the post from X.
// Paths come from this file's own location and the MAKEFUN_* environment
// variables, never from the process working directory.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The repository root is where POST.json lives when the grader mounts the
// repo at /bot; when run locally, MAKEFUN_BOT_DIR points at the checkout.
const sourceDir = botDir === '/bot' ? repoRoot : botDir;
const sourcePath = join(sourceDir, 'POST.json');
const targetPath = join(outputDir, 'POST.json');

const raw = readFileSync(sourcePath, 'utf8');
const post = JSON.parse(raw) as unknown;
if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  throw new Error(`POST.json must hold a JSON object, got ${typeof post}`);
}
const url = (post as { url?: unknown }).url;
if (typeof url !== 'string' || url.length === 0) {
  throw new Error('POST.json must hold a non-empty "url" string');
}
// The gate only accepts an X post address; warn early instead of failing
// the copy, so a placeholder POST.json still runs locally while the real
// post address is pending.
const postAddress = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\S+\/status\/\d+$/;
if (!postAddress.test(url)) {
  console.warn(`warning: url is not an X post address yet: ${url}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, `${JSON.stringify(post)}\n`, 'utf8');
console.log(`POST.json copied to ${targetPath} (url: ${url})`);
