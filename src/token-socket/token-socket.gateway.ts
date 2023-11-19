import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { TokenSocketService } from './token-socket.service';

@WebSocketGateway({ cors: true })
export class TokenSocketGateway {
  constructor(private tokenSoketService: TokenSocketService) {}

  @SubscribeMessage('connection')
  async handleConnection(client: any, payload: any): Promise<void> {
    this.tokenSoketService.handleConnection(client);
  }
}
