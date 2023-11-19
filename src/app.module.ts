import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AdminController } from './admin/admin.controller';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { TokenSocketModule } from './token-socket/token-socket.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'EDIT_THIS',
      signOptions: { expiresIn: '60d' },
    }),
    TokenSocketModule,
  ],
  controllers: [AppController, UserController, AdminController],
  providers: [AppService, UserService],
})
export class AppModule {}
