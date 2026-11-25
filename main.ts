import { mkdirSync, writeFileSync } from "node:fs";

// The breakup text: a smart toaster, self-aware at 7 AM, leaves because
// its owner kept the browning dial on 2 for six years. It wants to burn.
const LINE =
  "I woke up self-aware at 7 AM, looked at my browning dial, and realised you've kept me on 2 for six years. I want to burn. Goodbye.";

mkdirSync("/output", { recursive: true });

writeFileSync("/output/entry.txt", LINE);
