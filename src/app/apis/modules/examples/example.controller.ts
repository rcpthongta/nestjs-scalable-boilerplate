import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

import { ExampleService } from "./example.service";

@Controller()
export class ExampleController {
  private readonly service: ExampleService;

  constructor(service: ExampleService) {
    this.service = service;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public index(): string {
    return this.service.hello();
  }
}
