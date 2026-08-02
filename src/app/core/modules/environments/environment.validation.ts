import * as Joi from "joi";

import { InvalidEnvironmentException } from "./exceptions";
import { EnvironmentSchemaOptions } from "./interfaces";

import { environmentSchema } from "./environment.schema";

export function validateEnvironment(env: Record<string, unknown>): Record<string, unknown> {
  const { error, value }: Joi.ValidationResult<EnvironmentSchemaOptions> = environmentSchema.validate(env, {
    allowUnknown: true
  });

  if (error) {
    throw new InvalidEnvironmentException(error.message);
  }

  return value as Record<string, unknown>;
}
