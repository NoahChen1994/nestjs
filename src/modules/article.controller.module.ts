import { Module } from '@nestjs/common';
import { ArticleController } from 'src/controller/article.controller';
import { ArticleService } from 'src/service/article.service';

@Module({
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleControllerModule {}
