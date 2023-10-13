import fs from "fs";

let outputMessage = "";
const base = 15;
const headerMessage = `
=================================
        - Table of ${base} -
=================================\n
`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);
