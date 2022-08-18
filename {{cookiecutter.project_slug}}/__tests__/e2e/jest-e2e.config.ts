import path from "path";
import jestConfig from "../../jest.config";

export default Object.assign(jestConfig, {
    rootDir: path.dirname(__dirname),
    testRegex: ".e2e-spec.ts$"
});