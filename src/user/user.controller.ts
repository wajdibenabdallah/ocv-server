import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //TODO : to remove later
  sleep(secondes: number): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, secondes * 1000));
  }

  @Get('/token')
  async getToken(): Promise<{ token: string }> {
    const token = await this.userService.getToken();
    return { token };
  }

  @Post('/login')
  async login(@Body() { token }: { token: string }): Promise<any> {
    const auth = await this.userService.login(token);
    return !!auth;
  }
}
