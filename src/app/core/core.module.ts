import { environment, environmentSchema, EnvironmentSchema } from "@environment";

import { Module, OnModuleInit } from "@nestjs/common";

import * as Joi from "joi";

import { InvalidEnvironmentException } from "./exceptions";

@Module({})
export class CoreModule implements OnModuleInit {
  private validateEnvironment(): void {
    const { error }: Joi.ValidationResult<EnvironmentSchema> = environmentSchema.validate(environment);

    if (error) {
      throw new InvalidEnvironmentException(error.message);
    }
  }

  public onModuleInit(): void {
    this.validateEnvironment();
  }
}
