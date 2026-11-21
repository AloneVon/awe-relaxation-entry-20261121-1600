import { mkdirSync, writeFileSync } from "node:fs";

const text = `My grandmother spreads a quilt on the grass.
It is sewn from the coats of everyone in the family.
We lie on the pockets and sleeves and watch the dark.
One patch still holds the shape of a shoulder.
Above us, the sky is the largest patch of all, not yet sewn.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
