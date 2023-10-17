import { CreateTable } from "./create-table.use-case";

describe("create table testing", () => {
  const createTable = new CreateTable();
  it("should create table with default values", () => {
    const table = createTable.execute({ base: 7 });
    const row = table.split("\n");
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("Create Table of 7");
    expect(table).toContain("7 x 1 = 7");
    expect(table).toContain("7 x 10 = 70");
    expect(row.length).toBe(11);
  });

  it("should craete table with custom values", () => {
    const options = {
      base: 5,
      limit: 5,
    };

    const table = createTable.execute(options);
    const row = table.split("\n");
    expect(table).toContain("Create Table of 5");
    expect(table).toContain("5 x 1 = 5");
    expect(table).not.toContain("5 x 10 = 70");
    expect(row.length).toBe(options.limit + 1);
  });
});
