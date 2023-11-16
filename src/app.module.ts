import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AdminController } from './admin/admin.controller';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'EDIT_THIS',
      signOptions: { expiresIn: '60d' },
    }),
  ],
  controllers: [AppController, UserController, AdminController],
  providers: [AppService, UserService],
})
export class AppModule {}
