import * as Joi from "joi";

import { EnvironmentSchemaOptions } from "./interfaces";

export const environmentSchema: Joi.ObjectSchema<EnvironmentSchemaOptions> = Joi.object<EnvironmentSchemaOptions>({
  NODE_ENV: Joi.string().valid("development", "staging", "production").required(),
  APPLICATION_VERSION: Joi.string().required(),
  APPLICATION_NAME: Joi.string().required(),
  SERVER_PORT: Joi.number().port().required()
}).required();
