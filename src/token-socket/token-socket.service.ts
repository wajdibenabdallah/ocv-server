import { Injectable, Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenSocketService {
  private readonly connectedClients: Map<string, Socket | null> = new Map();
  constructor(private jwtService: JwtService) {}

  // async getToken(): Promise<string> {
  //   const payload = { date: new Date().toString() };
  //   return await this.jwtService.signAsync(payload);
  // }

  async setClient(): Promise<void> {
    return;
  }

  async handleConnection(socket: Socket): Promise<void> {
    console.log('handleConnection ......');
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    // setClient(clientId)

    // console.log('?', this.connectedClients.size);

    // this.connectedClients

    setTimeout(async () => {
      const token = await this.jwtService.signAsync({ clientId });
      // Logger.debug(`\n Generated token \n ${token} \n for client :${clientId}`);
      socket.emit('token', token);
    }, 5000);

    socket.on('disconnect', () => {
      console.log('disconnected ...');
      this.connectedClients.delete(clientId);
    });
  }
}
