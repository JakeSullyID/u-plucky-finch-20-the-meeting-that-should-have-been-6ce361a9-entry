import * as fs from 'node:fs';
import * as path from 'node:path';

// This highlights the supreme foolishness of people sitting through a live synchronous broadcast to ingest text they already absorbed asynchronously.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

// The output file must contain strictly this single line with no extra padding or trailing newlines.
const text = "Someone shared their screen to present the email, slide by slide, to the people who wrote it.";
fs.writeFileSync(path.join(outputDir, 'entry.txt'), text, { encoding: 'utf8' });
