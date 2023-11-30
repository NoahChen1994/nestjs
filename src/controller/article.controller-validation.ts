import { Body, Controller, Post, Patch, ValidationPipe } from '@nestjs/common';
import { AtritcleCreateDto } from 'src/dto/article.create.dto';
import { ArticleDto } from 'src/dto/article.dto';
import { AtritcleUpdateDto } from 'src/dto/article.update.dto';
import { ArticleService } from 'src/service/article.service';
// param validation
@Controller('article/valid')
export class ArticleValidController {
    constructor(private readonly articleService: ArticleService) {}

    @Post('/create')
    async create(
        @Body(
            new ValidationPipe({
                transform: true,
                forbidNonWhitelisted: true,
                forbidUnknownValues: true,
                validationError: { target: false },
                groups: ['create'],
            }),
        )
        data: AtritcleCreateDto,
    ) {
        let dto: ArticleDto;
        return this.articleService.store({ ...data, ...dto });
    }

    @Patch('/updateById')
    async updateById(
        @Body(
            new ValidationPipe({
                transform: true,
                forbidNonWhitelisted: true,
                forbidUnknownValues: true,
                validationError: { target: false },
                groups: ['update'],
            }),
        )
        data: AtritcleUpdateDto,
    ) {
        let dto: ArticleDto;
        return this.articleService.updateById({ ...data, ...dto });
    }
}
