import { mkdirSync, writeFileSync } from "node:fs";

const text = `We lay in the field under my father's coat.
The grass was warm from the day.
A star came loose and drew a line through the dark.
Then another.
I stopped counting when his hand grew heavy.
The sky kept turning, quietly, long after I closed my eyes.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
