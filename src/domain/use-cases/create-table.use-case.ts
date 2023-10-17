export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  execute({ base, limit = 10 }: CreateTableOptions) {
    const header = `====== Create Table of ${base} ======\n`;
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}`;
      if (i < limit) outputMessage += "\n";
    }
    return header + outputMessage;
  }
}
