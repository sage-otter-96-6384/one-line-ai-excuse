// The One-Line AI Excuse for Breaking Production.
// Writes a single original one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), with no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Good news: I found the bug. Bad news: it was me, and I'd already approved my own pull request.";

// The gate allows 1 to 180 characters: fail loudly rather than submit an invalid line.
const LIMIT = 180;
if (LINE.length === 0 || LINE.length > LIMIT || LINE.trim() !== LINE) {
  throw new Error(`entry line must be 1-${LIMIT} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
