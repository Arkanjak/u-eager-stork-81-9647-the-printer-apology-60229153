import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One apology line from the office printer; the gate allows 1-120 characters.
const line =
  "Sorry I ate your page: it arrived stapled, sideways, and damp — I'm a printer, not a goat.";

const chars = [...line].length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry line out of range: ${chars} chars`);
}

let outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  outDir = "output";
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
