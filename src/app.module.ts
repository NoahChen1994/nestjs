import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleControllerValidaModule } from './modules/article.controller-validation.module';
import { ArticleControllerModule } from './modules/article.controller.module';
import { HelloWorldControllerModule } from './modules/hello.world.controller.module';

@Module({
    imports: [HelloWorldControllerModule, ArticleControllerModule, ArticleControllerValidaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
