import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}
  async getToken(): Promise<string> {
    const payload = { date: new Date().toString() };
    return await this.jwtService.signAsync(payload);
  }

  async login(
    token: string,
  ): Promise<{ clientId: string; iat: number; exp: number } | boolean> {
    try {
      const verification = await this.jwtService.verifyAsync(token, {
        secret: 'EDIT_THIS',
      });
      return verification;
    } catch (e) {
      return false;
    }
  }
}
