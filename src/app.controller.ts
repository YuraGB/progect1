import {Controller, Get, Render, Res} from '@nestjs/common';
import { Response } from 'express';

@Controller('/')
export class AppController {
  @Get()
 // @Render('index')
  root() {
    return "Hello world";
  }
}
