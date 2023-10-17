const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import("./args.plugins");
  return yarg;
};

describe("yargs test", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });
  it("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "outputs",
      })
    );
  });

  it("should return custom values", async () => {
    const argv = await runCommand([
      "-b",
      "7",
      "-s",
      "-l",
      "50",
      "-n",
      "multiplication-table",
      "-d",
      "output-files",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 7,
        s: true,
        l: 50,
        n: "multiplication-table",
        d: "output-files",
      })
    );
  });
});
