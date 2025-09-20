import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class TypeRequest {
    @IsNumber()
    id:number
    @IsNotEmpty()
    @IsString()
    type: string
    @IsBoolean()
    status: boolean
}