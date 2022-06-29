import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NewLogParams } from './models/newLog.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  newLog(
    @Body() params: NewLogParams,
  ): Promise<void> {
    return this.appService.newLog(params)
  }
}
