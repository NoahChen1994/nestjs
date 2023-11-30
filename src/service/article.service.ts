import { Injectable } from '@nestjs/common';
import { isNil } from 'lodash';
import { ArticleDto } from 'src/dto/article.dto';

let articels: ArticleDto[] = [
    { title: '第一篇文章标题', body: '第一篇文章内容' },
    { title: '第二篇文章标题', body: '第二篇文章内容' },
    { title: '第三篇文章标题', body: '第三篇文章内容' },
    { title: '第四篇文章标题', body: '第四篇文章内容' },
    { title: '第五篇文章标题', body: '第五篇文章内容' },
    { title: '第六篇文章标题', body: '第六篇文章内容' },
].map((v, id) => ({ ...v, id }));

@Injectable()
export class ArticleService {
    deleteById(id: number) {
        const old = articels.find((i) => i.id === Number(id));
        if (isNil(old)) {
            const msg = `article: ${id} not exist`;
            console.log(msg);
            return msg;
        }
        articels.filter((i) => i.id === Number(id));
        return 'opration succ';
    }

    updateById(update: ArticleDto) {
        console.log(update.id);
        let old = articels.find((i) => i.id === Number(update.id));
        if (isNil(old)) {
            const msg = `article ${update.id} not exist`;
            console.log(msg);
            return msg;
        }
        old = { ...old, ...update };
        articels = articels.map((i) => (i.id === Number(update.id) ? old : i));
        return old;
    }

    store(data: ArticleDto): ArticleDto {
        const newEntity: ArticleDto = {
            id: Math.max(...articels.map(({ id }) => id + 1)),
            ...data,
        };
        articels.push(newEntity);
        return newEntity;
    }

    queryById(id: number) {
        const item = articels.find((i) => i.id === Number(id));
        if (isNil(item)) {
            console.log('articels not found.');
            return null;
        }
        return item;
    }

    list(): ArticleDto[] {
        return articels;
    }
}
