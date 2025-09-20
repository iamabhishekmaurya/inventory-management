import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class BrandRequest {
    @IsNumber()
    id: number
    @IsNotEmpty()
    @IsNumber()
    itemId: number
    @IsNotEmpty()
    @IsString()
    brandName: string
    @IsBoolean()
    status: boolean
}