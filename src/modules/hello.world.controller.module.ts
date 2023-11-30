import { Module } from '@nestjs/common';
import { HelloWorldController } from 'src/controller/hello.world.controller';
import { HelloService } from 'src/service/say.hello.service';

@Module({
    controllers: [HelloWorldController],
    providers: [HelloService],
})
export class HelloWorldControllerModule {}
