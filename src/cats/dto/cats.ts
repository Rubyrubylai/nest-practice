import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Breed } from '../const/breed.const';
class CreateCatDto {
    @ApiProperty({
        default: 'cat'
    })
    @IsString()
    name: string;

    @ApiProperty({
        default: 2
    })
    @IsInt()
    age: number;

    @ApiProperty({
        enum: Breed
    })
    @IsString()
    breed: string;
}

export {
    CreateCatDto
}
