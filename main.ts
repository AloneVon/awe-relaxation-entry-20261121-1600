import { mkdirSync, writeFileSync } from "node:fs";

const text = `The tide went out farther than I had known.
My grandmother walked with me among boats on their sides.
She turned over a stone.
Beneath it, the water held every star.
We put the stone back.
The sky stayed in the sand all the way home.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
