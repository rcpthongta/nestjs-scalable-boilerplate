import * as Joi from "joi";

import { EnvironmentApplication, EnvironmentApplicationSchema } from "./environment-application.type";
import { EnvironmentServer, EnvironmentServerSchema } from "./environment-server.type";
import { OnlyData } from "./only-data.type";
import { OnlySchema } from "./only-schema.type";

type EnvironmentOptions = {
  readonly profile: string | Joi.StringSchema;
  readonly application: EnvironmentApplication | Joi.ObjectSchema<EnvironmentApplicationSchema>;
  readonly server: EnvironmentServer | Joi.ObjectSchema<EnvironmentServerSchema>;
};

export type Environment = OnlyData<EnvironmentOptions>;
export type EnvironmentSchema = OnlySchema<EnvironmentOptions>;
