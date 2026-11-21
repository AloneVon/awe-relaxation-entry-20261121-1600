import { mkdirSync, writeFileSync } from "node:fs";

const text = `Rain ticks on the bus shelter roof. A man folds his receipt into smaller squares, then smaller, until it is a white pebble in his palm. The road shines. A bus that is not his slows, sighs, and goes on, and the shelter holds the red tail lights long after they have vanished.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
