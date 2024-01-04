import { Body, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  login(@Body() createLoginDto: CreateLoginDto) {
    return `This action returns all login`;
  }
}
