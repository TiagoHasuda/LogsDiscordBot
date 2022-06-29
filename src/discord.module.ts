import { Module } from "@nestjs/common";
import { DiscordModule as DModule } from '@discord-nestjs/core'
import { DiscordGateway } from "./discord.gateway";

@Module({
  imports: [DModule.forFeature()],
  providers: [DiscordGateway],
  exports: [DiscordGateway],
})
export class DiscordModule {}
