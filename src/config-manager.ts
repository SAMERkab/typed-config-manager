import * as jsYaml from "js-yaml";
import * as config from "./config.json";
import * as _ConfigScheme from "./schema.json";

type LOL = typeof _ConfigScheme;

type O<ConfigProperties extends typeof _ConfigScheme["properties"]> = {
  [Key in keyof ConfigProperties]: Extract<ConfigProperties[Key], "type"> extends string ? 1 : 2
}

class ConfigManager {
  private readonly configSchema: object;

  constructor(configSchema: object, defaultConfig: object, configFilePaths: string[]) {
    this.configSchema = configSchema;
    this.loadConfigFromFiles
  }

  test() {
    let o: O<_ConfigScheme>;
  }

  public loadConfigFromFiles(paths?: string[]): typeof config {
    return config;
  }
}
