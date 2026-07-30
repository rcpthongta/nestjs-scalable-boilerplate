import fs from "node:fs";
import path from "node:path";

import tsJest from "ts-jest";

const swc = fs.readFileSync(path.resolve(".swcrc"), "utf8");
const tsconfig = fs.readFileSync(path.resolve("tsconfig.json"), "utf8");

const configuration = {
  rootDir: "src",
  testEnvironment: "node",
  testRegex: String.raw`.*\.spec\.ts$`,
  transform: {
    "^.+\\.(t|j)s$": [
      "@swc/jest",
      {
        ...JSON.parse(swc)
      }
    ]
  },
  moduleFileExtensions: ["js", "json", "ts"],
  moduleNameMapper: tsJest.pathsToModuleNameMapper(JSON.parse(tsconfig).compilerOptions.paths, {
    prefix: path.resolve()
  }),
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverages/unit",
  verbose: true
};

export default configuration;
