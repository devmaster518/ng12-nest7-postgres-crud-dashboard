import { Injectable } from '@nestjs/common';
import { Message } from '@angular12-nest7-crud-dashboard/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
