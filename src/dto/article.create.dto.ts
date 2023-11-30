import { Injectable } from '@nestjs/common';
import { MaxLength, IsNotEmpty, IsOptional } from 'class-validator';

@Injectable()
export class AtritcleCreateDto {
    @MaxLength(255, {
        always: true,
        message: '标题最大长度为255',
    })
    @IsNotEmpty({ groups: ['create'], message: '标题不能为空' })
    @IsOptional({ groups: ['update'] })
    title: string;

    @IsNotEmpty({ groups: ['create'], message: '内容不能为空' })
    @IsOptional({ groups: ['update'] })
    body: string;

    @MaxLength(500, {
        always: true,
        message: '描述长度最大为$constraint1',
    })
    @IsOptional({ always: true })
    summary?: string;
}
