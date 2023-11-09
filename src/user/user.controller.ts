import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/token')
  async getToken(): Promise<string> {
    return await this.userService.getToken();
  }
}
