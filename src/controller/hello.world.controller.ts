import { Controller, Get } from '@nestjs/common';
import { HelloService } from 'src/service/say.hello.service';

@Controller('hello')
export class HelloWorldController {
    constructor(private readonly helloService: HelloService) {}

    @Get('hello')
    sayHello(): string {
        return this.helloService.sayHello();
    }
}
