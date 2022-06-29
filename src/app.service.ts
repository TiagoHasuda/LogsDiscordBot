import { Injectable } from '@nestjs/common';
import { DiscordGateway } from './discord.gateway';
import { NewLogParams } from './models/newLog.model';

@Injectable()
export class AppService {
  constructor(
    readonly gateway: DiscordGateway
  ) {}

  async newLog(params: NewLogParams): Promise<void> {
    await this.gateway.sendLog(params)
  }
}
