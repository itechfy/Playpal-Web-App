import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GroundModule } from './ground/ground.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UploadImageModule } from './upload-image/upload-image.module';
import { BookingModule } from './booking/booking.module';
import { GigModule } from './gig/gig.module';
import { TeamModule } from './team/team.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.local.env'],
    }),
    GroundModule,
    UserModule,
    AuthModule,
    UploadImageModule,
    BookingModule,
    GigModule,
    TeamModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}