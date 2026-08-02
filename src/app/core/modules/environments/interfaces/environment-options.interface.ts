import { EnvironmentApplicationOptions } from "./environment-application-options.interface";
import { EnvironmentServerOptions } from "./environment-server-options.interface";

export interface EnvironmentOptions {
  readonly profile: string;
  readonly application: EnvironmentApplicationOptions;
  readonly server: EnvironmentServerOptions;
}
