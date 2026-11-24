// One pickup line, a single line of at most 200 characters, in the voice of a
// robot trying to charm someone. Written deterministically to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My sensors say you're 98.7% perfect, and my firmware refuses to round you down.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
