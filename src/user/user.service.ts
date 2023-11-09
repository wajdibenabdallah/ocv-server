import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}
  async getToken(): Promise<string> {
    const payload = { date: new Date().toString() };
    return await this.jwtService.signAsync(payload);
  }
}
