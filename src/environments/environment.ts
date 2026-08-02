import { Environment } from "./types";

export const environment: Environment = {
  profile: process.env.NODE_ENV,
  application: {
    version: process.env.APPLICATION_VERSION,
    name: process.env.APPLICATION_NAME
  },
  server: {
    port: Number.parseInt(process.env.SERVER_PORT, 10)
  }
};
