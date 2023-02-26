import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortUrlModule } from './short-url/short-url.module';
import { ShortUrlService } from './short-url/short-url.service';

require('dotenv').config();

@Module({
  imports: [ShortUrlModule, 
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: process.env.MYSQL_USER, 
      password: process.env.MYSQL_PASSWORD, 
      database: process.env.MYSQL_DATABASE, 
      autoLoadEntities: true, 
      synchronize: true
    }),],
  controllers: [AppController],
  providers: [AppService, ShortUrlService],
})
export class AppModule {}
