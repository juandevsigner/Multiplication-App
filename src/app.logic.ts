import fs from "fs";
import { yarg } from "./config/plugins/args.plugins";

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = "";
const headerMessage = `
=================================
        - Table of ${base} -
=================================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}
if (showTable)
  console.log("🚀 ~ file: app.logic.ts:16 ~ outputMessage:", outputMessage);

outputMessage = headerMessage + outputMessage;
const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
console.log("File was created");
