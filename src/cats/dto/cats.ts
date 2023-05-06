import { IsString, IsInt } from 'class-validator';
class CreateCatDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
}

export {
    CreateCatDto
}
