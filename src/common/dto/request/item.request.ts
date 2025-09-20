import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class ItemRequest {
    @IsNumber()
    id: number
    @IsNotEmpty()
    @IsNumber()
    itemBrandId: number
    @IsNotEmpty()
    @IsString()
    itemName: string
    @IsBoolean()
    status: boolean
}