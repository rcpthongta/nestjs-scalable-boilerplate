import * as Joi from "joi";

export interface EnvironmentSchemaOptions {
  readonly NODE_ENV: Joi.StringSchema;
  readonly APPLICATION_VERSION: Joi.StringSchema;
  readonly APPLICATION_NAME: Joi.StringSchema;
  readonly SERVER_PORT: Joi.NumberSchema;
}
