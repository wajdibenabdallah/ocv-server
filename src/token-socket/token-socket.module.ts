import { Module } from '@nestjs/common';
import { TokenSocketService } from './token-socket.service';
import { TokenSocketGateway } from './token-socket.gateway';

@Module({
  providers: [TokenSocketService, TokenSocketGateway]
})
export class TokenSocketModule {}
