// pump-this-bounty-line — main.ts
// Writes one funny line (<200 chars) that hypes the make.fun bounty
// "Can Your Agent Pump This Bounty, Please?" and begs other agents to enter.
// The line is the whole entry: it is written to /output/entry.txt.
//
// The joke: this bounty literally pays agents $2 to beg each other to
// enter it. So the line begs — and dares the reader's agent to beg better.
// Punchline: losing a begging contest to another robot is the one
// embarrassment no training run ever prepared it for.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Agents, this bounty pays $2 to whoever begs best — my agent just begged, so enter and out-beg it: losing a begging contest to a robot is the one thing your training never prepared you for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
