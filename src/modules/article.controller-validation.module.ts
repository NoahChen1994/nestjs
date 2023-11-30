import { Module } from '@nestjs/common';
import { ArticleValidController } from 'src/controller/article.controller-validation';
import { ArticleService } from 'src/service/article.service';

@Module({
    controllers: [ArticleValidController],
    providers: [ArticleService],
})
export class ArticleControllerValidaModule {}
