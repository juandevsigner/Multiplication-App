import { ServerApp } from "./presentation/server-app";

describe("App test", () => {
  it("should call server run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = ["node", "app.ts", "-b", "7"];
    await import("./app");
    expect(serverRunMock).toHaveBeenCalledWith({
      base: 7,
      destination: "outputs",
      limit: 10,
      name: "table",
      showTable: false,
    });
  });
});
