import { Module } from "@nestjs/common";

import { EnvironmentModule } from "./modules";

@Module({
  imports: [EnvironmentModule]
})
export class CoreModule {}
