import fs from "fs";
import { SaveFile } from "./save-file.use-case";

describe("save file test", () => {
  afterEach(() => {
    const outputFolderExist = fs.existsSync("outputs");
    if (outputFolderExist) fs.rmSync("outputs", { recursive: true });

    const customOutputFolderExists = fs.existsSync("custom-outputs");
    if (customOutputFolderExists)
      fs.rmSync("custom-outputs", { recursive: true });
  });

  it("should save file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "test content",
    };
    const result = saveFile.execute(options);
    expect(result).toBeTruthy();
    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    expect(checkFile).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  it("should return false if directory could not be created", () => {
    const save = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error");
    });
    const result = save.execute({ fileContent: "Hello world!" });
    expect(result).toBe(false);
    mkdirSpy.mockRestore();
  });

  it("should return false if file could not be created", () => {
    const save = new SaveFile();
    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("This is a custom write error");
      });
    const result = save.execute({ fileContent: "hello world" });
    expect(result).toBe(false);
    writeFileSpy.mockRestore();
  });
});
