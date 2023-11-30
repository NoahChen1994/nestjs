import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ArticleDto } from 'src/dto/article.dto';
import { ArticleService } from 'src/service/article.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get('/queryAll')
    async queryAll(): Promise<ArticleDto[]> {
        return this.articleService.list();
    }

    @Get('/queryById')
    async queryById(@Query('id') id: number) {
        return this.articleService.queryById(id);
    }

    @Post('/store')
    async store(@Body() data: ArticleDto) {
        return this.articleService.store(data);
    }

    @Patch('/updateById')
    async updateById(@Body() data: ArticleDto) {
        return this.articleService.updateById(data);
    }

    @Delete('deleteById')
    async deleteById(@Query('id') id: number) {
        return this.articleService.deleteById(id);
    }
}
