import { mkdirSync, writeFileSync } from "node:fs";

const text = `In the museum stairwell, sandstone holds ripples from a sea that was here before the stairs. Visitors climb over it with wet umbrellas. The ripples run as they did under the old tide. At closing, the guard's shadow crosses the slab and the sea moves under it.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
