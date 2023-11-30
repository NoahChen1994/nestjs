import { Injectable } from '@nestjs/common';

import { IsNumber, IsDefined } from 'class-validator';

import { AtritcleCreateDto } from './article.create.dto';

@Injectable()
export class AtritcleUpdateDto extends AtritcleCreateDto {
    @IsNumber(undefined, { groups: ['update'], message: 'ID格式错误' })
    @IsDefined({ groups: ['update'], message: 'ID必须指定' })
    id: number;
}
