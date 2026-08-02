import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { EnvironmentApplicationOptions, EnvironmentServerOptions } from "./interfaces";

@Injectable()
export class EnvironmentService {
  private readonly configService: ConfigService;

  public constructor(configService: ConfigService) {
    this.configService = configService;
  }

  public get profile(): string {
    return this.configService.get("profile");
  }

  public get application(): EnvironmentApplicationOptions {
    return this.configService.get("application");
  }

  public get server(): EnvironmentServerOptions {
    return this.configService.get("server");
  }
}
