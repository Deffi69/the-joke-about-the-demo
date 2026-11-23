// The joke about the demo — make.fun entry.
// A program that writes one text to /output/entry.txt: a one-line joke
// about working beside AI coding agents.
//
// Judge brief (from the published rules), most important first:
//  1. a joke about AI coding agents, about something that crashed;
//  2. the laugh: a real surprise at the end, a punchline the listener
//     did not see coming that still makes sense the moment it lands;
//  3. truth: an observation a developer who works beside an agent
//     recognises at once from their own demo;
//  4. economy: one line, every word earning its place, never explains itself;
//  5. freshness: a new angle, not a stock joke reworded.
//
// The joke: the agent declares the work "Done!" mid-demo — the classic
// premature-completion every agent user recognises — and the twist is that
// what ended was not the feature but the demo itself.
import * as fs from "node:fs";
import * as path from "node:path";

// Misdirection: the listener hears "Done!" and assumes the feature is
// finished — the twist reassigns the word "done" to the demo itself.
const SETUP = "My agent said 'Done!' halfway through the demo.";
const TWIST = "The feature wasn't done — the demo was.";
const JOKE = `${SETUP} ${TWIST}`;

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
