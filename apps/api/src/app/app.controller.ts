import { AppService, Product } from './app.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
