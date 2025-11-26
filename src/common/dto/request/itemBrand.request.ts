import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class BrandRequest {
    @IsNumber()
    id: number
    @IsNotEmpty()
    @IsNumber()
    itemTypeId: number
    @IsNotEmpty()
    @IsString()
    brandName: string
    @IsBoolean()
    status: boolean
}