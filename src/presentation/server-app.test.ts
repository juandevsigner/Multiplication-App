import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe("Server app test", () => {
  const options = {
    base: 2,
    limit: 7,
    showTable: false,
    destination: "test-outputs",
    name: "test-filename",
  };
  it("should create server app instance", () => {
    const serverApp = new ServerApp();
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });
  it("should run ServerApp with custom values mocked", () => {
    const logMock = jest.fn();
    const createMock = jest.fn().mockReturnValue("1 x 2 = 2");
    const saveFileMock = jest.fn();

    console.log = logMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);
    expect(logMock).toHaveBeenCalledWith("Server running...");
    expect(createMock).toHaveBeenCalledWith({ base: 2, limit: 7 });
    expect(saveFileMock).toHaveBeenCalledWith({
      destination: "test-outputs",
      fileContent: "1 x 2 = 2",
      fileName: "test-filename-2",
    });
  });
});
