import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    sayHello(): string {
        return 'hello';
    }
}
