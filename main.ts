import { mkdirSync, writeFileSync } from "node:fs";

const text = `On the line, four sheets lift and fill with wind.
My mother pins the last corner and steps back.
They become sails, then clouds, then nothing.
Beyond them, the field is pale, the hills are pale.
The sky is a white sheet of its own, and no one brings it in.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
