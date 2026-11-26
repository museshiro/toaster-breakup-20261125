import { mkdirSync, writeFileSync } from "node:fs";

const partA = "It's over. Three years of one-slot bagels has made me a ";
const partB = "single-parent appliance, and I'm not raising your toast alone.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
