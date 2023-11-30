import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleControllerModule } from './modules/article.controller.module';
import { HelloWorldControllerModule } from './modules/hello.world.controller.module';

@Module({
    imports: [HelloWorldControllerModule, ArticleControllerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
