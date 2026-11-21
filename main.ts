import { mkdirSync, writeFileSync } from "node:fs";

const text = `My father quarters an apple and lays the seeds on the sill.
Each seed is a tree folded to the size of a fingernail.
He wipes the knife and goes back to work.
The seeds dry in the afternoon light.
In a hundred years, one of them will be an old tree, still letting its apples fall.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
