import { Controller, Get } from '@nestjs/common';
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
    // fake timeout to send token : every 10 secondes
    // should use a kind of socket to communicate between server and front
    await this.sleep(10);
    const token = await this.userService.getToken();
    return { token };
  }
}
