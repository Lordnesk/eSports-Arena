import { IsString, IsNumber } from "class-validator";

export class ErrorResposeDto {
    @IsNumber()
    statusCode: number;

    @IsString()
    message: string;

    @IsString()
    error: string;
}