import { Injectable } from "@nestjs/common";
import { InjectDiscordClient, Once } from '@discord-nestjs/core'
import { Client } from 'discord.js'
import { NewLogParams } from "./models/newLog.model";

@Injectable()
export class DiscordGateway {
  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
  ) {}

  @Once('ready')
  onReady() {
    console.log(`Connected to user ${this.client.user.tag}`)
  }

  async sendLog(params: NewLogParams): Promise<void> {
    const channel = await this.client.channels.cache.get(params.channelId)
    if (channel.isText())
      channel.send(`\`\`\`${params.log}\`\`\``)
  }
}
