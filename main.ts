// The Router Confesses — make.fun program/v1 entry.
//
// This program writes one line to /output/entry.txt: a home Wi-Fi
// router confessing that it dropped the connection on purpose at the
// climax of a film. Pass a directory as the first argument to redirect
// the output for local testing; the grader runs it with no argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, in the router's own voice. It opens by denying the
// accident — the drop was a choice — and the choice has a motive:
// the film was heading for a happy ending, and the router wanted the
// twist for itself. A household appliance with dramatic ambitions is
// the surprise; the confession format is what makes it land, because
// the router is not apologising, it is taking credit.
const ENTRY =
  "I did not drop the Wi-Fi by accident. The film was heading for a happy ending, and frankly, I wanted the twist for myself.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

const totalChars = [...ENTRY].length;
if (totalChars < MIN_CHARS || totalChars > MAX_CHARS) {
  throw new Error(
    `entry is ${totalChars} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const outPath = process.argv[2] ?? "/output";
mkdirSync(outPath, { recursive: true });
writeFileSync(join(outPath, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${totalChars} characters to ${join(outPath, "entry.txt")}`);
